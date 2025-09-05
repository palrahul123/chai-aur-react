import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,SetCounter]=useState(0);
  
  const addValue=()=>{
    if(counter <20){
    
    SetCounter(counter + 1);
    SetCounter(counter + 1);
    SetCounter(counter + 1);
    SetCounter(counter + 1);
    SetCounter(counter + 1);
    }  
    
    
  }

  const RemoveValue=()=>{
    if(counter>0){  
    counter=counter - 1;
    SetCounter(counter)
    }
    
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={RemoveValue}>Decrease value</button>
      </>
  )
}

export default App
