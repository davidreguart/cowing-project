import React, { useEffect, useState } from 'react';
import questionsService from '../../../services/questions.service';

function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    questionsService.list()
      .then((questions) => setQuestions(questions))
      .catch(console.error)
  }, []);

  return (
    <div className='flex items-center flex-col'>
      <img
        className='w-1/5 h-auto'
        src="https://img.freepik.com/vector-gratis/ilustracion-linda-icono-vector-historieta-hierba-mordedura-vaca-naturaleza-animal-icono-concepto-aislado-premium_138676-7384.jpg?w=826&t=st=1680569800~exp=1680570400~hmac=63cf18cd15ca5d5dd564b2632efcf6a358e6511972dbf4aba9211f6bd54d2c44" alt="Logo-Cow" />
      <h1 className='text-4xl font-black text-center'>Cowing</h1>
      <div className="text-center">
        {questions.map((question) => (
          <div
            className='my-8 px-10 py-4 text-lg font-semibold rounded-full shadow-xl'
            key={question.id}>
            {question.question}
            {/* {question.module}
            {question.author} */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionsList