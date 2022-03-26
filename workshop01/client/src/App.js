import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:5001/')
      .then((res) => {
        console.log('hoseh la');
        setText(res.data);
        console.log(`Returned text is ${text}`);
      })
      .catch((err) => {
        console.log(err);
        console.log('Error from retrieving text');
      });
  }, []);

  return (
    <div className="App">
      <img className="img" src="quote.jpg" alt="quote" />
      <h1>Today Quotes</h1>
      <h2 className="quote">{text} </h2>
      <h3>
        <span>Repository : </span>
        <a href="https://github.com/jhsee11/nus_iss">
          https://github.com/jhsee11/nus_iss
        </a>
      </h3>
    </div>
  );
}

export default App;
