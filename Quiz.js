import { useState } from "react";

import data from "./data.json";
import Fetch from "./Fetch";

function Winner({ fine, risposte }) {
  var punti = 0;
  var errori = [];
  if (fine) {
    for (var i = 0; i < risposte.length; i++) {
      if (risposte[i] === data.domande[i].corretta) punti++;
      else
        errori.push(
          <p>
            la domanda {i + 1} è sbagliata, la risposta corretta è:{" "}
            <b>{data.domande[i].corretta}</b>{" "}
          </p>,
        );
    }
    return (
      <>
        <p> Totalizzati {punti} punti</p>
        {errori.map((errore) => {
          return errore;
        })}
      </>
    );
  }
}

function Opzione({ daVisualizzare, statoQuiz, option, id, arrayRisp }) {
  return (
    <>
      <input
        type="radio"
        id={id}
        value={daVisualizzare}
        onChange={option}
        disabled={statoQuiz === true}
        checked={arrayRisp[id] === daVisualizzare}
      />
      <label>{daVisualizzare}</label>
      <br />
    </>
  );
}

function Domanda({ domanda, risposte, statoQuiz, option, id, arrayRisp }) {
  var n = id + 1;
  return (
    <>
      <p>
        {n} {domanda}
      </p>
      {risposte.map((risposta, i) => {
        return (
          <Opzione
            key={i}
            id={id}
            daVisualizzare={risposta}
            statoQuiz={statoQuiz}
            option={option}
            arrayRisp={arrayRisp}
          />
        );
      })}
    </>
  );
}

export default function Quiz() {
  // UNO STATO PER LE RISPOSTE
  const [answerArray, SetAnswer] = useState([]);
  // UNO STATO PER CAPIRE QUALE DOMANDA VISUALIZZARE
  const [idDomanda, setidDomanda] = useState(0);
  // UNO STATO PER CAPIRE SE IL QUIZ è TERMINATO
  const [fine, setFine] = useState(0);

  //QUESTA FUNZIONE AGGIORNA LA RISPOSTA, QUANDO VIENE CLICCATO UN RADIO BUTTON
  const onOptionChange = (e) => {
    const answ = answerArray.slice();
    answ[e.target.id] = e.target.value;
    SetAnswer(answ);
  };

  return (
    <>
      <Domanda
        id={data.domande[idDomanda].id}
        domanda={data.domande[idDomanda].domanda}
        risposte={data.domande[idDomanda].risposte}
        corretta={data.domande[idDomanda].corretta}
        statoQuiz={fine}
        option={onOptionChange}
        arrayRisp={answerArray}
      />
      <input
        type="button"
        value="Clicca qui per controllare"
        onClick={() => {
          setFine(true);
        }}
      />
      <br />
      <input
        type="button"
        value="INDIETRO"
        disabled={idDomanda === 0}
        onClick={() => {
          setidDomanda(idDomanda - 1);
        }}
      />
      <input
        type="button"
        value="AVANTI"
        disabled={idDomanda === data.domande.length - 1}
        onClick={() => {
          setidDomanda(idDomanda + 1);
        }}
      />

      <p>
        {" "}
        Selected answer <strong>{answerArray}</strong>
      </p>
      <p>
        {" "}
        stato: <strong>{fine}</strong>
      </p>

      <Winner fine={fine} risposte={answerArray} />

      <Fetch/>
    </>
  );
}


