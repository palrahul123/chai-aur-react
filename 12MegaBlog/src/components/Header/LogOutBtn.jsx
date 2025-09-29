import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth';

function LogOutBtn() {

    const dispatch = useDispatch();
    

    const handleSubmit=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        });
        
    }

  return (

    <div>
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={handleSubmit}>Log Out</button>
    </div>
  )
}

export default LogOutBtn