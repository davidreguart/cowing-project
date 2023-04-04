import { useState } from 'react'

const names = [
  'Alba Greciano',
  'Albert García',
  'Alex Garrido',
  'Ana Gutiérrez',
  'Ander Zulaika',
  'Anna Soriano',
  'Carlos Lopez',
  'Daniel Romero',
  'David Reguart',
  'Edu Gamboa',
  'Erica Sanchez',
  'Feliciano Ojeda',
  'Ignacio Lorente',
  'Javier Moreno',
  'Javier Gonzalez',
  'Jose María Ortega',
  'Leandro Pereyra',
  'Luis Escribano',
  'Paloma Gladiné',
  'Sergio Catalá',
  'Silvia Edreira',
  'Sofía Jiménez',
  'Víctor López'
]

function generateRandomIndex() {
  return Math.floor(Math.random() * names.length);
}

function RandomName() {

  const [randomName, setRandomName] = useState('Waiting for...');

  return (
    <div className="mt-28">
      <button
        onClick={() => setRandomName(names[generateRandomIndex(names.length)])}
        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-2xl shadow-inner group mb-10">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-500 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-500 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-800 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Nueva víctima</span>
      </button>

      <p className='font-black text-5xl animate-pulse text-green-800'>{randomName}</p>

    </div>
  )
}

export default RandomName;