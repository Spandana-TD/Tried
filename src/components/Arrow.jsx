import React from 'react'

export default function Arrow() {
    function TraditionalFunction(){
        console.log("this is from traditional function");
        alert("clicked");

    }
    const ArrowFunction=()=>
        console.log("this is from arrow function");
        //alert("clicked");
    //};
    const calculate=(a,b)=>{
        alert(a+b);
    }
  return (
    <div>this is your arrow component<br/>
    <button onClick={TraditionalFunction}>Traditional</button>
    <button onClick={ArrowFunction}>Arrow</button>
    <button onClick={()=>calculate(10,20)}>sum</button></div>
  )
}
