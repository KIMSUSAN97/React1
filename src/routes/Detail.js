import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Detail(props){

    let [count, setCount] = useState(0);
    let {id} = useParams();
    let [alert, setAlert] = useState(true)
    let [탭, 탭변경] = useState(0)


    return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>

      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={()=>{ 탭변경(0)}} >버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => { 탭변경(1)}} eventKey="link-1">버튼2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(2)}} eventKey="disabled" disabled>
          버튼3
        </Nav.Link>
      </Nav.Item>
    </Nav>      
    <TabContent 탭={탭}/>
    </div>
  </div> 
    )
  }

  function TabContent({ 탭 }) {

      let [fade,setFade] = useState('')

      useEffect(()=>{
      setTimeout(() => { }, 100)
      setFade('end')
      return ()=> {
        setFade('')
      }
      },[탭])

      return (<div className={'start' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
        </div>)
    }
  



export default Detail;