import React,{useCallback, useState} from 'react'

import Child from "./ChildCallback"
function UseCallback() {
    const[comment, setComment]=useState("Here is coment!")
    const[toggle, setToggle]=useState(false)

    const returnComment = useCallback((name)=>{
        return comment + name
    },[comment])

    return (
        <div>
            <h1>UseCallback</h1>
            {/* same as useMemo */}
            {/* 
                useMemo => value
            useCallback => function 
            */}
            <Child returnComment={returnComment}/>

            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Toggle me</p>}
        </div>
    )
}

export default UseCallback