import React, { useState } from 'react'

const Calculator = () => {
        const [first, setFirst] = useState();
        const [second, setSecond] = useState();
        const [result, setResult] = useState();

    const summation = ()=>{
        return setResult(first + second)
    }
    
  return (
    <div>
    <input type="number" onchange={setFirst == value}/>
    <input type="number"/>

    </div>
  )
}

export default Calculator