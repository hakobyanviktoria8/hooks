import React, { useState } from 'react'

function UseState() {
    const[count, setCount] = useState(0)

    const[show, setShow] = useState(true)
  return (
    <div>
        <h1>UseState Hook</h1>
        <p>{count}</p>
        <button onClick={()=>{
            setCount(count+1)
            setShow(!show)
        }}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        {show && <p>Show some text</p>}
    </div>
  )
}

export default UseState