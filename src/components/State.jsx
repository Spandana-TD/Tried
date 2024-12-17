import React from 'react'
import { useState } from 'react';
import Table from "./MUI/Table";
import { Button, TextField } from '@mui/material';
export default function State() {
    //const name="adya";
    const[name,setName]=useState("adya");
    const [darkmode,setDarkMode]=useState(false);
    const [count,setCount]=useState(parseInt(localStorage.getItem("counterValue")||0));
    const [userName,setUserName]=useState("");
    const [userEmail,setEmailName]=useState("");
    const [userContact,setUserContact]=useState("");
    const [userInfo,setUserInfo]=useState([]);

    const increment=()=>{
        let number=count+1;
        setCount(number);
        localStorage.setItem("counterValue",number)
    };
    const decrement=()=>{
        let number=count-1;
        setCount(number);
        localStorage.setItem("counterValue",number)
    };
    const reset=()=>{
        setCount(0);
    };
    let inputStyle={
        width:"100px",
        padding:"10px"

    }
    const changeUserName=(event)=>{
        setUserName(event.target.value);};
    // };
    // const changeUserEmail=(event)=>{
    //     setEmailName(event.target.value);
    // };
    // const changeUserC=(event)=>{
    //     setUserName(event.target.value);
    // };
    console.log(userName);
    console.log(userEmail);
    console.log(userContact);
    const save=()=>{
        const formatteddata={
            name:userName,
            email:userEmail,
            contact:userContact};
        setUserInfo([...userInfo,formatteddata]);
        
    };
    console.log(userInfo);
    
  return (
    <div style={{backgroundColor:darkmode==true?"black":"white",
    color:darkmode==true?"white":"black",
    height:"100vh"}}>State
        <br/>
        My name is {name} 
        <button onClick={()=>setName("Spandana")}>change name</button>
        <br/>
        <button onClick={()=>setDarkMode(true)}>Dark Mode</button><br/>
        <button onClick={()=>setDarkMode(false)}>light Mode</button><br/>
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>count</button> */}
        <button onClick={()=>increment()}>+</button><br/>
        <button onClick={()=>decrement()}>-</button><br/>
        <button onClick={()=>reset()}>reset</button><br/><hr/>

<div
 style={{display:"flex",justifyContent:"center",
    alignItems:"center",flexDirection:"column",
    backgroundColor:"lightgray",padding:"20px"}}>

< TextField style={inputStyle} 
type="text"  
placeholder='enter your name'
 onChange={changeUserName}
 /><br/>
< TextField type="text" placeholder='enter your email ID' onChange={(event)=>setEmailName(event.target.value)} 
style={{backgroundColor:"lightpink"}} /><br/>
<TextField type="tel" placeholder='enter your contact number' onChange={(event)=>setUserContact(event.target.value)}
style={{backgroundColor:"lightpink"}} /><br/>
< Button style={{backgroundColor:"lightpink"}} onClick={save} >save</Button>
</div>
<hr/>
<div >
    <table border={2} cellPadding={10} cellSpacing={5} width={"100%"}>
        <tr>
        <th>sl no</th>
        <th>name</th>
        <th>email</th>
        <th>number</th>
        </tr>
        {userInfo.length>0?
        userInfo.map((user,index,contact,email)=>(
        <tr>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>

        </tr>  )):(
            <tr>
                <td colSpan={4} align='center'>no data found</td>
            </tr>
        )}
    </table>
   
    
  
    
</div>


    </div>
  )
    }
