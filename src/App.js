import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[{name:'Photoshop', price:'$99.90'},
  {name:'Illustrator', price:'$90.90'},
  {name:'PDF Reader', price:'$69.90'}]
  const productNames=products.map(product=>product.name)
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Person name="Rubel" nayika="Moushumi"></Person>
        <Person name="joshim" nayika="Moushumi"> </Person>
        <Person name="Bappa" nayika="Moushumi"> </Person>
        <Person name="Ilias" nayika="Moushumi"> </Person>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done.<code>src/App.js</code> and save to reload.
        </p>
        <p>My first react app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
     <ul>
       {
         users.map(user=><li>{user.name}</li>)
       }
     </ul>
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease=()=>{
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '400px',
    width: '400px',
    float:'left'
  }
  return(
    <div style={productStyle}>
    <h2>{props.name}</h2>
    <h3>{props.price}</h3>
    <button>Buy Now</button>
  </div>
  )
  
}

function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h2>Name:{props.name}  </h2>
      <h3>Nayika:{props.nayika}</h3>
    </div>
  )
}

export default App;
