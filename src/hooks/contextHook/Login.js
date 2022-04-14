import React, { useContext } from 'react'
import { AppContext } from './UseContext'

function Login() {
  const {setUserName} = useContext(AppContext)
  return (
    <div>
      <h1>Login</h1>
      <input type="text"
      onChange={(e)=>setUserName(e.target.value)}
      />
    </div>
  )
}

export default Login