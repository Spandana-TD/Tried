import React from 'react'

export default function Content({color,title}) {
  return (
    <div style={{backgroundColor:color?color:"purple",
        width:"100",
        height:"300px",
        display:'flex',
        justifyContent:'center',
        alignItems:"center"}}><h1>{title?title:"Content compnent"}</h1></div>
  )
}
