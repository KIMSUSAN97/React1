import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './routes/data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './routes/Cart';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate(); //페이지 이동 도와 줌

  

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} href="#pricing">Detail</Nav.Link>
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
  <Route path="/detail/:id" element={<div>{ <Detail shoes={shoes}></Detail> }</div>} />
  
  <Route path="/about" element={<About />}>
    <Route path="member" element={<div>멤버임</div>} />
    <Route path="location" element={<div>위치정보임</div>} />
  </Route> 
  <Route path="/event" element={ <EventPage />}>
    <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
    <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
  </Route>
  <Route path="/cart" element={< Cart />} />
  </Routes>
  {/* Nested Routes 문법 */}  
  </div>
  );
}

function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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
