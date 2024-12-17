import React, {useState} from 'react'
import { useEffect } from 'react'
export default function Effect() {
    useEffect(()=>{
        console.log("this is from  userEffect")
    },[])
    const ArrowFunction=()=>{
        console.log("This is from arrow function")
    }
    const [count,setCount]=useState(0)
    const [square,setSquare]=useState(0)
useEffect(()=>{
    setSquare(count*count)
    console.log("useEffect have been triggered")
},[count])
  return (
    <div>Effect<br/>
    <h1>Value of count-{count}</h1>
    <h1>Square of count-{square}</h1>
    <button onClick={()=>setCount(count+1)}>add</button>
    {/* <button onClick={()=>setCount(count+1)}>add</button> */}
    </div>
  )
}
