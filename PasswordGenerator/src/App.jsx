import { useState,useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed,setNumberAllowed]=useState(false);
  const [isCharAllowed,setCharAllowed]=useState(false);
  const [password ,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumberAllowed) str+="1234567890"
    if (isCharAllowed) str+="#$%^&*"



  },[length,isNumberAllowed,isCharAllowed,setPassword]);



  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='flex-shadow rounded-lg overflow-hidden mb-4 space-x-2'>
        <input id='txtPassword' type="text" value={password} className='outline-no ne  py-1 px-3 bg-white w-80 rounded-lg' placeholder='password' readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 h-9 mr-2 rounded-lg'>Copy</button>
      </div>
      <div className='flex gap-x-2'>
      <div className='flex text-sm gap-x-2'>
        <input type="range" onChange={(e)=>{setLength(e.target.value)}}   min={6} max={100} value={length} className='cursor-pointer'/>
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"  id='numberInput' defaultChecked={isNumberAllowed} onChange={(e)=>{setNumberAllowed((val)=> !val); console.log(isNumberAllowed)}} />
        <label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"  id='charInput' defaultChecked={isCharAllowed} onChange={(e)=>{setCharAllowed((text)=> !text); console.log(isNumberAllowed)}} />
         <label>Character</label> 
      </div>
      </div>
    </div>
      
    </>
  )
}

export default App
