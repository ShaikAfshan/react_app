//import react libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//get a reference to div with id Root
const el = document.getElementById('root');

//take control of that element
const root=ReactDOM.createRoot(el);
//create  a component
function App(){

  let message ="Bye There!";
 
  return <input style={{border:'1px solid red'}}/>
}

// show the domponet on the screen
root.render(<App />);