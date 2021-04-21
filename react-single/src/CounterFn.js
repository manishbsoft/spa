import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [counter, updateCounter] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        
        // Best place to call apis - componentDidMount - load only once before the page load.

    }, []);

    useEffect(() => {        
        //  compare props and update state/implement updation logic here - componentDidUpdate.
        // update userDetails
        
    }, [userDetails]);

    const handleChange = (type) => {
        updateCounter((oldCounter) => oldCounter + type);
    };
  
    return (
      <>
        <h1>Name: {props.name} Date: {props.date}</h1>
        <h3>Counter: {counter}</h3>
        <button onClick={() => handleChange(-1)}>Decrement</button>
        <button onClick={() => handleChange(+1)}>Increment</button>
      </>
    );
  };
  
  export default Counter;