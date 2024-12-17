import React from 'react'

export default function Destructure() {
    let fruits=["apple","banana","mango"];
    //new version of destructing an array
    const[a,bb]=fruits;
    let object={user:"adya",age:20};
    //new version of destructing an object
    const {user,age}=object;
    const employees={
        id:1,
        name:"adya",
        mail:"adya@gmail.com",
        company:"amazon",
        department:"sales",
        designation:"manager"
      }
      const {name,mail,company,department,designation}=employees;
  return <div>Destructure
    <br/>{fruits[0]}
    <br/>
    {object.user}<br/>
    {a}<br/>
    {bb}
    <br/>
    {user}<br/>
    {age}
    <br/>
    <p> I am {name} and mail id is {mail} and from the company {company} in the department of {department} as a {designation}</p>
  </div>
  
}
