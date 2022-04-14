import React, { useEffect, useState } from 'react'
import axios from "axios"

function UseEffect() {
    const[data,setData]=useState("")
    const[count, setCount] = useState(0)

    useEffect(()=>{
        // console.log("Reander");
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            // console.log(res.data)
            setData(res.data[0].email)
            console.log("Api called")
        })
    },[])
    // - rerender every change same [data, count]
    // [] render one time

  return (
    <div>
        <h1>UseEffect</h1>
        <p>{data}</p>
        <p>{count}</p>
        <button onClick={()=>{
            setCount(count+1)
        }}>+</button>
    </div>
  )
}

export default UseEffect