import React, { useEffect } from 'react'

function ChildCallback({returnComment}) {
    useEffect(()=>{
        console.log("ChildCallback");
    },[returnComment])
  return (
    <div>ChildCallback {returnComment("Viktorya")}</div>
  )
}

export default ChildCallback