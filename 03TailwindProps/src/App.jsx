import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  let myObj={
    userName : "Rahul Pal",
    addres:"Vapi"
  }

  return (
  <div><Card userName="Rahul Pal"/>
  <br/>
  <Card /></div>
    
    
  )
}

export default App
