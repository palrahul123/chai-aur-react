import { useState } from 'react'
import './App.css'
import Square from './Components/Square'

function App() {
  const [squares, setSquare] = useState(Array(9).fill(null))
  const [xIsNext,setXIsNext]=useState(true);
  const [playerMsg,setPlayerMsg]=useState(true);
  
  const handleClick=(index)=>{
    
    const nextSquare=squares.slice();
    if (squares[index] || calculateWinner(squares))
      return;


    if(xIsNext)
    {
      nextSquare[index]='X'
      
    }
    else{
      nextSquare[index]='O'
     
    }
    setSquare(nextSquare)
     setXIsNext(!xIsNext);

    const winner = calculateWinner(squares);
    
    if(winner)
    {
      setPlayerMsg('Winner :' + winner)
    }
    else{
      setPlayerMsg(`Next Palyer : ${xIsNext==true ?'X':'O'} `)
    }
  }

 

  return (
    <>
    <label>{playerMsg}</label>
    <div className='board-row'>
      <Square value={squares[0]} handleClick={()=> handleClick(0)}/>
      <Square value={squares[1]} handleClick={()=> handleClick(1)}/>
      <Square value={squares[2]} handleClick={()=> handleClick(2)}/>
    </div>
    <div className='board-row'>
      <Square value={squares[3]} handleClick={()=> handleClick(3)}/>
      <Square value={squares[4]} handleClick={()=> handleClick(4)}/>
      <Square value={squares[5]} handleClick={()=> handleClick(5)}/>
    </div>
    <div className='board-row'>
      <Square value={squares[6]} handleClick={()=>handleClick(6)}/>
      <Square value={squares[7]} handleClick={()=>handleClick(7)}/>
      <Square value={squares[8]} handleClick={()=>handleClick(8)}/>
    </div>
    </>
  )
}

function calculateWinner(squares){
  const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

  for (let i=0;i < lines.length ; i++){
    const [a,b,c]=lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c])
        return squares[a]
      return null
  }
}

export default App
