import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.scss";

const Quiz = () => {
  const [question, setQuestion] = useState("When did man first go to the moon?")
  let [message, setMessage] = useState("")

  useEffect(() => {

    console.log(question.content);

  }, [message]);

  const checkanswer = (answer) => {
    console.log(document.getElementById("answer").value)
    if (answer === "1969") {
      setMessage("True")
      
    }
    else{
      setMessage("False")
      
    }
    

  }
  return (
    <>
      <h3>{question}</h3>
      <input type="text" id="answer" placeholder="answer here"></input>
      <button onClick={() => checkanswer(document.getElementById("answer").value)}>submit</button>
      <h3>{message}</h3>
    </>
  );
};

export default Quiz;
