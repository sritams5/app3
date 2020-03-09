import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData'
import './App.css';

function App() {

  /*const jokeComponents = jokesData.map((joke)=>{
    return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
  })*/
  const jokeComponents = jokesData.map((joke)=> <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
  return (
    <div>
      {jokeComponents}
    </div>
  )
  /*return (
    <div>
      <Joke punchLine="aaa"/>
      <Joke question="BBB" punchLine="bbb"/>
      <Joke question="CCC" punchLine="ccc"/>
      <Joke question="DDD"/>
    </div>
  );*/
}

export default App;
