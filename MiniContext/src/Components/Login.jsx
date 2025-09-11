import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../Context/UserContext'




function Login() {

const router = useRouter();    
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const {setUser}=useContext(userContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName,password});
        router.push("/Profile");
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder='User name' />
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' />

        <button onClick={handleSubmit} >Submit</button>
    </div>

  )
}

export default Login