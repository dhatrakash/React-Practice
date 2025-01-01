import React, { useState } from 'react'

const CounterApp = () => {

    const[count,setCount]=useState(1);
    const[evenIncrement,setEvenIncrement]=useState(2);
    const[oddDecrement,setOddDecrement]=useState(1);

    const increment=()=>{
        setCount(count*evenIncrement);
        // 1*2=2*4=8*6=48*8=384
        setEvenIncrement(evenIncrement+2);
    //  2+2=4+2=6+2=8+2=10
       
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-oddDecrement);
        }
    }
  return (
    <div style={{textAlign:'center'}} >
    <h1>Counter App</h1>
    <div >
      <button onClick={decrement} >-</button>
      <span >{count}</span>
      <button onClick={increment}>+</button>
    </div>
  </div>
  )
}

export default CounterApp
