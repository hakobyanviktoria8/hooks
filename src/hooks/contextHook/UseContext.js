import React,{createContext, useState} from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)

function UseContext() {
const[userName, setUserName]=useState("")

  return (
    <AppContext.Provider value={{userName, setUserName}}>
        <h1>UseContext</h1>
        <Login/>
        <User/>  
    </AppContext.Provider>
  )
}

export default UseContext