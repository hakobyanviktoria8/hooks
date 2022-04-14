import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "+":
            return {count:state.count + 1, show: state.show}
        case "-":
            return {count:state.count - 1, show: state.show}
        case "toggleText":
            return {count:state.count, show: !state.show}
        default:
            return state
    }
}

function UseReducer() {
    const[state,dispatch]=useReducer(reducer,
        {
            count:0,
            show:true
        })

  return (
    <div>
        <h1>UseReducer Hook</h1>
        <p>{state.count}</p>
        <button onClick={()=>{
            dispatch({type:"+"})
            dispatch({type:"toggleText"})
        }}>+</button>
        <button onClick={()=>{
            dispatch({type:"-"})
        }}>-</button>
         {state.show && <p>Show some text</p>}
    </div>
  )
}

export default UseReducer