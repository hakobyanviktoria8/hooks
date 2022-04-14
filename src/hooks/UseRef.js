import React, { useRef } from 'react'

function UseRef() {
    const inputRef = useRef(null)

  return (
    <div>
        <h1>UseRef</h1>
        <input type='text' ref={inputRef}/>
        <button onClick={()=>{
            console.log(inputRef.current.value)
            inputRef.current.focus()
            inputRef.current.value=""
        }}>Focuse</button>
    </div>
  )
}

export default UseRef