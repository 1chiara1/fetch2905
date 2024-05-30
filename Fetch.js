import { useState, useEffect } from 'react';


export default function Fetch() {
  const [quiz, setQuiz] = useState([]);
  const [count, setCount] = useState(0);

  //CHIAMATA API CON GET
  useEffect(()=>{
    /*fetch("http://localhost:3001/getQuizList",{method: "get"}).then(
      (res) => {
                return res.json();}).then(
                                    (data) => {
                                    console.log(data);
                                    setQuiz(data) });*/
  },[])

  
  //CHIAMA API CON POST
  useEffect(()=>{
    var body_post= {email : "poldi@gmail.com"}
    fetch("http://localhost:3001/getQuizDone",{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body_post)
    }).then(
      (res) => {
                return res.json();}).then(
                                    (data) => {
                                    console.log(data);
                                    setCount(data) });
  },[])

  return(  
    <>
    {quiz.map((quiz)=>{
      return (<>
      <p>quiz n: {quiz.id}, contiene {quiz.numeroDomande} domande e dura {quiz.tempoSvolgimento} </p>
      </>)
    })}
    <p>l'utente ha svolto {count[0].conteggio} quiz</p>
    </>
  )
}


// import { useState, useEffect } from 'react';
// const Fetch = () => {
//   const [quiz, setQuiz] = useState([]);
//   useEffect(() => {

//     const user = {
//         user: "John Doe",
//         password: "john.doe@example.com"
//       };

//     fetch('http://localhost:3000/', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify( user )
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setQuiz(data);
//       });
//   }, []);
//   return (
//     <div>
//       {quiz.map((quiz) => (
//         <>
//         <p>quiz n: {quiz.id}, contiene {quiz.numeroDomande} domande e dura {quiz.tempoSvolgimento} </p> 
//         </>
//       ))}
//     </div>
//   );
// };
// export default Fetch;