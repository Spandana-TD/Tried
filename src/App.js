import logo from './logo.svg';
import './App.css';
import nature from "./image.JPG";
import Home from "./home.jsx";
import Arrow from "./components/Arrow.jsx";
import ArrayMethod from './components/ArrayMethod.jsx';
import Destructure from './components/Destructure.jsx';
import SpreadOperator from './components/SpreadOperator.jsx';
import Ternary from './components/Ternary.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Properties from './components/Properties.jsx';
import State from './components/State.jsx';
import Effect from './components/Effect.jsx';
import MUIHome from './components/MUIHome.jsx';
import Card from './components/MUI/Card.jsx';


function App() {
  const mystyle={
    color:"purple",
    backgroundColor:"lightblue"
  };
  let name="spandana";
  return (
    <div >
      {/* <h1 style={{color:"red",backgroundColor:"rgb(113,134,145)"}}>heading</h1>
      <h2 style={mystyle}>interna</h2>
      <h3 className="heading">external</h3>
      <img src={nature} style={{height:200}}></img>
      <div>{name}</div>
      <Home/>
      <Arrow/>
      <ArrayMethod />
      <Destructure/>
     <SpreadOperator />
     <Ternary/> */}
     {/* <State/> */}
     {/* <Effect/> */}
     {/* <MUIHome/> */}
     
  
     <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/arrow" element={<Arrow/>}/>
      <Route exact path="/array" element={<ArrayMethod/>}/>
      <Route exact path="/destructure" element={<Destructure/>}/>
      <Route exact path="/spreadoperator" element={<SpreadOperator/>}/>
      <Route exact path="/ternary" element={<Ternary/>}/>
       <Route exact path="/props" element={<Properties Propname={name}/>}/> 
       <Route exact path="/state" element={<State/>}/>
       <Route exact path="/effect" element={<Effect/>}/>
       <Route exact path="/MUIHome" element={<MUIHome/>}/>
       
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
