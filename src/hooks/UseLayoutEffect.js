import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
const inputRef= useRef(null)

useEffect(()=>{
    console.log("useEffect");
    inputRef.current.value="Ann"
},[])

useLayoutEffect(()=>{
    console.log("useLayoutEffect")
    console.log(inputRef.current.value)
},[])

  return (
    <div>
        <h1>UseLayoutEffect</h1>
        <input type="text" ref={inputRef} value="Bob"/>
    </div>
  )
}

export default UseLayoutEffect