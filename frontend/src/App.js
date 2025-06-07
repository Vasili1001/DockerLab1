import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [fact, setFact] = useState('');

  const fetchQuote = () => {
    fetch('http://localhost:5001/api/quote')
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
  };

  const fetchFact = () => {
    fetch('http://localhost:5001/api/fact')
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  };

  useEffect(() => {
    fetchQuote();
    fetchFact();
  }, []);

  return (
    <div className="container">
      <h1>Quotes & Facts</h1>

      <div className="card">
        <h2>Random Quote</h2>
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>

      <div className="card">
        <h2>Interesting Fact</h2>
        <p>{fact}</p>
        <button onClick={fetchFact}>New Fact</button>
      </div>

      <Counter />
    </div>
  );
};

export default App;
