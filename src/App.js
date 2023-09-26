import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './Detail';

function App() {

  let [shoes] = useState(data);
  

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Detail</Nav.Link>
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

<Routes>
  <Route path="/" element={
      <div>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {
            shoes.map(function(a, i){
                return (
                  <Card shoes={shoes[i]} i={i+1}></Card>
                )
            })
          }
        </div>
      </div>
    </div>
  } />
  <Route path="/detail" element={<div>{ <Detail></Detail> }</div>} />
  <Route path="/about" element={<div>어바웃페이지</div>} />
</Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
