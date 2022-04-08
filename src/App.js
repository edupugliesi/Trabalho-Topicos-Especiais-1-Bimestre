
import React from 'react';
import './App.css';

import Desafio from './components/Desafio'
import Numero from './components/Numero'
import Propriedades from './components/Propriedades'
import Recesso from './components/Recesso'
import Sorteio from './components/Sorteio'

function App() {

  return (
    <div className='App'>

      <h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>
      <h1>Eduardo Pugliesi Assis Lima</h1>

      <div className= 'linha' >
        
        <Desafio></Desafio>
        <Numero></Numero>
        <Propriedades titulo= 'Qual a sua nota?' aluno= 'Eduardo Pugliesi' ></Propriedades>
        <Sorteio></Sorteio>
        <Recesso></Recesso>

      </div>

    </div>
  )
}

export default App;

