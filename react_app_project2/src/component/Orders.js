import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import "../App.css";
function Orders(){
    //let total = 0
    const state = useSelector((state) => {
        return {
          cart: state.ItemsReducer.Cart,
          order:state.ItemsReducer.Order,
          total:state.ItemsReducer.Total
        };
      });
      let orderNum = Math.floor(Math.random() * 1000) + 100;
      console.log(state.order);
      console.log(state.total);
      //state.total = 5
    return (
        <div>

        <h3>Order Number:{orderNum}</h3>
      <h3>Order Total:{state.total}</h3>
        </div>
    )
}
export default Orders