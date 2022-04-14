import React, { useState } from 'react'

function UseState() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <h1>UseState Hook</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default UseState