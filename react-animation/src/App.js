import React, { useState } from "react";
// import CounterApp from "./CounterApp";
import "./App.css";
import ProductList from "./components/ProductList";
import Todo from "./Todo";
 
const dummyData=['product1','product2','product3']

function App() {

  return (
    <div className="app">
      {/* <CounterApp /> */}
      {/* <h1>React Concepts with Examples</h1> */}
      {/* passing data from parent to child component */}
      {/* <ProductList data={dummyData} name='Aishwarya' city='Pune'/>  */}
      <Todo/>
   
    </div>
  );
}

export default App;
