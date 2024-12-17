import React from 'react'

export default function Ternary() {
    const checkfunction=(value)=>{
        //alert("Hello")
        console.log(value);
        /*if(value==true){
            alert("value is true");

        }else{
            alert("value is not true");
        }*/
       value==true?  
       alert("value is true")
       :
       //value==false?
       alert("value is FALSE")
       //:alert(" INVALID" value);
    };
    let theme="Dark";
  return (
    <div style={{backgroundColor:theme=="Light"?"black":"gray"}}>Ternary
         <br/>
         <button onClick={()=>checkfunction(true)}>check</button>
    </div>
   
  )
}

