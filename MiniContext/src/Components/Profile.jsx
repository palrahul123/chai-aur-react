import React, { useEffect, useState } from 'react'
import userContext from '../Context/UserContext'
import { useContext } from 'react'

function Profile() {

    const {user}=useContext(userContext);

  return (
    <div>
        <h1>Profile</h1>
        <label>UserName : {user.userName} </label>
        <label>Password : {user.password}</label>
    </div>
  )
}

export default Profile