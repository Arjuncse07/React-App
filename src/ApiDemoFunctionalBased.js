import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDemoFunctionalBased = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);


  const handleClick = () => setCounter(counter + 1);
  console.log('Button clicked', counter);

  const fetchData = () => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        setData(response.data.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    console.log('Inside useEffect');
  }, []);  //it will run only on first render

  return (
    <>
      <h1>........................This is functional Based component..............................</h1>

      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>API Demo (JSONPlaceholder)</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: '#dc3545' }}>Error: {error}</p>}
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {data.map((post) => (
            <li key={post.id} style={{ marginBottom: '12px' }}>
              <h3 style={{ fontWeight: 'bold' }}>{post.title}</h3>
              <p style={{ color: '#666' }}>{post.body}</p>
            </li>
          ))}
        </ul>
        <button
          onClick={fetchData}
          disabled={loading}
          style={{
            backgroundColor: loading ? '#6c757d' : '#28a745', // Gray when loading
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '16px'
          }}
          onMouseDown={e => (e.target.style.backgroundColor = '#ffc107')} // Yellow on click
          onMouseUp={e => (e.target.style.backgroundColor = loading ? '#6c757d' : '#28a745')}

          onMouseOver={e => (e.target.style.backgroundColor = loading ? '#6c757d' : '#218838')}
          onMouseOut={e => (e.target.style.backgroundColor = loading ? '#6c757d' : '#28a745')}
        >
          Refresh Data
        </button>

        <button style={{ marginTop: '50px' }} onClick={handleClick}> CounterButton </button>

        <div style={{ marginTop: '50px' }}> {counter} </div>



      </div>
    </>
  );
};

export default ApiDemoFunctionalBased;