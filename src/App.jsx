import { useState } from 'react';
import './App.css'

function App() {
  const[url,seturl]=useState('');

  return (
    <>
     <div className="url-page">
      <h3> URL Shortener</h3>
      <label> Enter URL:</label>
      <input type ="text" placeholder="Enter url"> </input>
      <button>Submit </button>

      </div> 
    </>
  )
}

export default App
