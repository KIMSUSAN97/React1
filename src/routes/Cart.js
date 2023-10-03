import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, changeName, increase } from '../store';
import { cart } from '../store';


function Cart(){

    let state = useSelector((state) => state )
    let dispatch = useDispatch()
    


    return (
    <div> 
    <h6>{state.user.name} {state.user.age}의 장바구니</h6>
    <button onClick={() => {dispatch(increase(1))}}>버튼</button>
    <Table>
    <thead>
      <tr>
        <th>상품명</th>
        <th>수량</th>
        <th>변경하기</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        state.cart.map((a, i) => {
          return (
            <tr>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button onClick={()=>{
                  dispatch(addCount(i))
                }}>+</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
    </Table> 
    </div>
    )
  }

export default Cart;