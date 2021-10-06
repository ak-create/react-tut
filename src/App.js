import React,{useRef} from 'react'; 
import {useState} from 'react'; //ye ek hook hai
import './App.css';
import Student from './Student';
import react from 'react';
import Profile from './Profile';
import User from './User';
function App(){
 
  const [data,setData]=useState(0);

  useEffect(() => {
    console.warn("useeffect")
  })
 
  return (
    <div className="App">
    <h1>{data}</h1>

     <button onClick={()=>{setData(data+1)}}>Toggle</button>
     <button onClick={()=>{this.setState({so:!this.state.so})}}>Toggle2</button>
    </div>
  );
  
}

export default App;
