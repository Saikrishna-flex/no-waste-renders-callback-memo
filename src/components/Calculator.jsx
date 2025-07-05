import React, { useMemo, useState, useCallback } from 'react'

const Calculator = () => {

    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    const badSum = () =>{
        console.log('Calculating sum...');
        return a + b;
    }

    const goodSum = useMemo(()=>{
        console.log('Memoized calculation...');
        return a + b;
    },[]);

    
  return (
    <div>
        <button onClick={() => setA(a+1)}>A: {a}</button>
        <button onClick={() => setB(b+1)}>B: {b}</button>
        <p> Bad Sum: {badSum()}</p>
        <p> Good Sum: {goodSum}</p>
    </div>
  )
}

export default Calculator