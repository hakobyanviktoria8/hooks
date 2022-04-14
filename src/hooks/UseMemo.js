import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

function UseMemo() {
const[comments, setComments]=useState("")
const[toggle, setToggle]=useState(false)

useEffect(()=>{
    axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            // console.log(res.data);
            setComments(res.data)
        })
},[])


// console.log(comments)
const findLongName = (comments)=>{
    if(!comments) return;
    let longName = ""
    comments.map(x=>{
        if(x.name.length > longName.length){
            longName=x.name
        }
    })
    console.log("findLongName");
    return longName
}

const getLongestName = useMemo(()=>findLongName(comments),[comments])

  return (
    <div>
        <h1>UseMemo</h1>
        <p>{getLongestName}</p>

        <button onClick={()=>setToggle(!toggle)}>Click</button>
        <h2>{toggle && "Toggle item"}</h2>

    </div>
  )
}

export default UseMemo