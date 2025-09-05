import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [value,setValue]=useState(1);
  // const [multiplyValue,setMutiplyValue]=useState(1);
let  multiplyValue=value * 5;
  const multiplybyfive=()=>{
    // setMutiplyValue(value * 5);
    setValue(value + 1);
  }

  return (
    <>
     <h1>Main Value : {value}</h1>
     <button onClick={multiplybyfive}>Click to Multiply by 5</button>
     <h1>Multiplied Value  : {multiplyValue}</h1>
    </>
  )
}

export default App
