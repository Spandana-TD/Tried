import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  let navigate=useNavigate();
  const nav=()=>{
    navigate("/arrow");
    // navigate("/array");
    // navigate("/destructure");
    // navigate("/spreadoperator");
    // navigate("/ternary");
  };
  return (
    <div>this is from home component<br/>
      <Link to={'/arrow'}>arrow</Link><br/>
      <Link to={'/array'}>arraymethod</Link><br/>
      <Link to={'/destructure'}>destructure</Link><br/>
      <Link to={'/spreadoperator'}>spreadoperator</Link><br/>
      <Link to={'/ternary'}>ternary</Link><br/>
      <Link to={'/props'}>property</Link><br/>
      <Link to={'/State'}>state</Link><br/>
      <Link to={'/Effect'}>effect</Link><br/>
      <Link to={'/MUIHome'}>MUIHome</Link><br/>
      <button onClick={nav}>navigate to arrow</button><br/>
      {/* <button onClick={nav}>navigate to array</button><br/>
      <button onClick={nav}>navigate to destructure</button><br/>
      <button onClick={nav}>navigate to spreadoperator</button><br/>
      <button onClick={nav}>navigate to ternary</button> */}
      
    </div>
  )
}
