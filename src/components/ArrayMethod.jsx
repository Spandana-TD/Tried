import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react'

export default function ArrayMethod() {
  let array=["apple","banana","mango"];
  let array2=["poojitha","nisarga","shivani","niveditha"];
  let object={name:"spa",age:20};
  let employeeinformation=[{name:"spa",mail:"spa@gmail.com",place:"koppa"},
    {name:"poojitha",mail:"poojitha@gmail.com",place:"ujire"},
    {name:"poojana",mail:"poojana@gmail.com",place:"goa"}
  ]
  const employees=[{
    id:1,
    name:"adya",
    mail:"adya@gmail.com",
    company:"amazon",
    department:"sales",
    designation:"manager"
  },
  {
    id:2,
    name:"poojitha",
    mail:"poojitha@gmail.com",
    company:"tcs",
    department:"it",
    designation:"softare developer"
  },
  {
    id:3,
    name:"nisarga",
    mail:"nisarga@gmail.com",
    company:"amazon",
    department:"sales",
    designation:"HR"
  },
  {
    id:4,
    name:"siri",
    mail:"siri@gmail.com",
    company:"tech",
    department:"it",
    designation:"engineer"
  },
  {
    id:4,
    name:"sihi",
    mail:"sihi@gmail.com",
    company:"tech",
    department:"sales",
    designation:"manager"
  }]
    return (
    <div>ArrayMethod<br/>
    {array.map((item)=>(
        <h2>{item}</h2>)
        )}<br></br>
        {array2.map((item1)=>{return(
        <li>{item1}</li>)
        })}
        <table border={1}  cellPadding={10} cellSpacing={10}>
            <tr>
            <th>sl.no</th>
            <th>fruit</th>
        
            </tr>
            {array.map((fruit,index)=>(<tr>
                <td>{index+1}

                </td>
                <td>{fruit}</td>
            </tr>))}
            </table>
            <table border={1}  cellPadding={10} cellSpacing={10}>
            <tr>
            <th>sl.no</th>
            <th>friends</th>
        
            </tr>
            {array2.map((friends,index)=>(<tr>
                <td>{index+1}

                </td>
                <td>{friends}</td>
            </tr>))}
            </table>
            <table border={1}  cellPadding={10} cellSpacing={10}>
            <tr>
                <th colSpan={10}>employees</th></tr>
                <tr>
            <th>sl.no</th>
            <th>name</th>
            <th>email</th>
            <th>company</th>
            <th>department</th>
            <th>designation</th>
            </tr>
            {employees.map((employee,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{employee.name}</td>
                    <td>{employee.mail}</td>
                    <td>{employee.company}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                </tr>
            ))}
        
            
            </table>
            <table border={1}  cellPadding={10} cellSpacing={10}>
            <tr>
                <th colSpan={10}>employeeinformation</th></tr>
                <tr>
            <th>sl.no</th>
            <th>name</th>
            <th>email</th>
            <th>place</th>
            </tr>
            {employeeinformation.map((employee,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{employee.name}</td>
                    <td>{employee.mail}</td>
                    <td>{employee.place}</td>
                </tr>
            ))}
        
            
            </table>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:"lightblue"}}>
            <TableCell>sl no</TableCell>
            <TableCell >name</TableCell>
            <TableCell >email</TableCell>
            <TableCell >company</TableCell>
            <TableCell >department</TableCell>
            <TableCell >designation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {employees.map((employee,index)=>(
                <TableRow>npm s
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.mail}</TableCell>
                    <TableCell>{employee.company}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.designation}</TableCell>
                </TableRow>
            ))}
          </TableBody></Table></TableContainer>
    </div>
  )
}
