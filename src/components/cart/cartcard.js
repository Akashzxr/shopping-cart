import React,{useState} from "react"
import { increment,details } from "../../redux/cartslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartCard=(props)=>{
        const title=useSelector((state)=>state.cart.title);
        const dispatch = useDispatch();
        
    return(
        <div className="productcard ">
            <img src={props.details.image} alt="demo" />
            <div className="info">
               <div className="font-extrabold title">{props.details.title}</div>
               <div className="font-extralight">${props.details.price}</div>
               <div>quantity: {props.details.quantity}</div>
            </div>
        </div>
    )
}

export default CartCard;