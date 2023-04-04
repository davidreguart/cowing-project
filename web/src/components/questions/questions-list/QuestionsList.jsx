import React, { useEffect, useState } from 'react';
import questionsService from '../../../services/questions.service';
import RandomName from '../../RandomName';
import FingerImage from '../../FingerImage';

function QuestionsList() {
  const [questions, setQuestions] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState();

  useEffect(() => {
    questionsService.list()
      .then((questions) => setQuestions(questions))
      .catch(console.error)
  }, []);

  function generateRandomQuestion() {
    return Math.floor(Math.random() * questions.length);
  }


  return (
    <div className='h-screen w-auto flex'>
      <div className='w-1/2 h-full flex items-center justify-center'>
        <img
          className='w-6/12'
          src="/cow-logo.png" alt="Logo-Cow" />
      </div>
      <div className='w-1/2 h-full flex justify-center items-center -ml-20'>
        <div>
          <h1 className='text-center text-9xl mb-8 py-10 font-extrabold bg-clip-text bg-gradient-to-r from-green-900 to-green-600 text-transparent'>Cowing</h1>
          <div className="text-center">

            {randomQuestion && (
              <p className='text-lg mb-2 shadow-md bg-white bg-opacity-5 rounded-full'>Autor: {randomQuestion.author} | Pregunta del módulo {randomQuestion.module}</p>
            )}

            {randomQuestion && (
              <p className='h-36 bg-white bg-opacity-50 font-black text-xl pt-3 mb-4 rounded-2xl shadow-xl'>
                {randomQuestion.question}
              </p>
            )}

            <button
              onClick={() => setRandomQuestion(questions[generateRandomQuestion(questions.length)])}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white hover:text-gray-700 rounded-md shadow-lg group mb-8">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-lime-300 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">Nueva pregunta</span>
            </button>

            <RandomName />
            <div className='flex justify-center mt-8'>
              <div className='flex items-center w-[30rem] h-auto'>
                <FingerImage />
                <FingerImage />
                <FingerImage />
                <FingerImage />
                <FingerImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsList