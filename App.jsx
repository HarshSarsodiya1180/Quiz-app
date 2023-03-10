import { useEffect, useMemo, useState } from "react";
import "../src/app.css"
import Start from "./component/Start";
import Timer from "./component/Timer";
import Trivia from "./component/Trivia";
function App() {

  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");
  const data = [
    {
      id: 1,
      question: "Which of the following language does the computer understand?",
      answers: [
        {
          text: "C Language",
          correct: false,
        },
        {
          text: "Assembly Language",
          correct: false,
        },
        {
          text: "Binary Language",
          correct: true,
        },
        {
          text: "BASIC",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following computer language is written in binary codes only?",
      answers: [
        {
          text: "pascal",
          correct: false,
        },
        {
          text: "Machine Language",
          correct: true,
        },
        {
          text: "C",
          correct: false,
        },
        {
          text: "C#",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following is the smallest unit of data in a computer?",
      answers: [
        {
          text: "Bit",
          correct: true,
        },
        {
          text: "KB",
          correct: false,
        },
        {
          text: "Nibble",
          correct: false,
        },
        {
          text: "Byte",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "A computer cannot boot if it does not have the _____",
      answers: [
        {
          text: "A) Compiler",
          correct: false,
        },
        {
          text: "B) Loader",
          correct: false,
        },
        {
          text: "C) Operating system",
          correct: true,
        },
        {
          text: "D) Assembler",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "By default, your documents print in ________ mode",
      answers: [
        {
          text: "A) Landscape",
          correct: false,
        },
        {
          text: "B) Portrait",
          correct: true,
        },
        {
          text: "C) Page Setup",
          correct: false,
        },
        {
          text: "D) Print View",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who invented C++?",
      answers: [
        {
          text: "a) Dennis Ritchie",
          correct: false,
        },
        {
          text: "b) Ken Thompson",
          correct: false,
        },
        {
          text: "c) Brian Kernighan",
          correct: false,
        },
        {
          text: "d) Bjarne Stroustrup",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following is not a type of Constructor in C++?",
      answers: [
        {
          text: "a) Default constructor",
          correct: false,
        },
        {
          text: "b) Parameterized constructor",
          correct: false,
        },
        {
          text: "c) Copy constructor",
          correct: false,
        },
        {
          text: "d) Friend constructor",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which of the following type is provided by C++ but not C?",
      answers: [
        {
          text: "a) double",
          correct: false,
        },
        {
          text: "b) float",
          correct: false,
        },
        {
          text: "c) int",
          correct: false,
        },
        {
          text: "d) bool",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following correctly declares an array in C++?",
      answers: [
        {
          text: "a) array{10};",
          correct: false,
        },
        {
          text: "b) array array[10];",
          correct: false,
        },
        {
          text: "c) int array;",
          correct: false,
        },
        {
          text: "d) int array[10];",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which is more effective while calling the C++ functions?",
      answers: [
        {
          text: "a) call by object",
          correct: false,
        },
        {
          text: "b) call by pointer",
          correct: false,
        },
        {
          text: "c) call by value",
          correct: false,
        },
        {
          text: "d) call by reference",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: " Which keyword is used to define the macros in c++?",
      answers: [
        {
          text: "a) #macro",
          correct: false,
        },
        {
          text: "b) #define",
          correct: true,
        },
        {
          text: "c) macro",
          correct: false,
        },
        {
          text: "d) define",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who invented Java Programming?",
      answers: [
        {
          text: "a) Guido van Rossum",
          correct: false,
        },
        {
          text: "b) James Gosling",
          correct: true,
        },
        {
          text: "c) Dennis Ritchie",
          correct: false,
        },
        {
          text: "d) Bjarne Stroustrup",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: " Which component is used to compile, debug and execute the java programs?",
      answers: [
        {
          text: "a) JRE",
          correct: false,
        },
        {
          text: "b) JIT",
          correct: false,
        },
        {
          text: "c) JDK",
          correct: true,
        },
        {
          text: "d) JVM",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: " Which one of the following is not a Java feature?",
      answers: [
        {
          text: "a) Object-oriented",
          correct: false,
        },
        {
          text: "b) Use of pointers",
          correct: true,
        },
        {
          text: "c) Portable",
          correct: false,
        },
        {
          text: "d) Dynamic and Extensible",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What type of join is needed when you wish to return rows that do have matching values?",
      answers: [
        {
          text: "a)Equi-join",
          correct: false,
        },
        {
          text: "b)Natural join",
          correct: false,
        },
        {
          text: "c)Outer join",
          correct: false,
        },
        {
          text: "d)All of the above",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid = [
    { id: 1, amount: "₹ 1,000" },
    { id: 2, amount: "₹ 2,000" },
    { id: 3, amount: "₹ 3,000" },
    { id: 4, amount: "₹ 5,000" },
    { id: 5, amount: "₹ 10,000" },
    { id: 6, amount: "₹ 20,000" },
    { id: 7, amount: "₹ 40,000" },
    { id: 8, amount: "₹ 80,000" },
    { id: 9, amount: "₹ 1,60,000" },
    { id: 10, amount: "₹ 3,20,000" },
    { id: 11, amount: "₹ 6,40,000" },
    { id: 12, amount: "₹ 12,50,000" },
    { id: 13, amount: "₹ 25,00,000" },
    { id: 14, amount: "₹ 50,00,000" },
    { id: 15, amount: "₹ 1 Crore" },
    { id: 16, amount: "₹ 7 Crore" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
