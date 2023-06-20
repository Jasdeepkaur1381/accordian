import React, { useState } from 'react';
import './App.css';
import { questions } from './api.js';
import MyAccordion from './MyAccordian';
const App = () => {
  const [data, setdata] = useState(questions);

  return (
    <>
      {
        data.map((curElem) => {
          const { id, question, answer } = curElem;
          return <MyAccordion key={id}
            question={question}
            answer={answer}

          />
        })
      }
    </>
  )
}

export default App;
