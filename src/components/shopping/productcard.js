import React,{useState} from "react"
import { increment,details } from "../../redux/cartslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { totalprice } from "../../redux/cartslice";

const ProductCard=(props)=>{
        const title=useSelector((state)=>state.cart.title);
         //props.info['quantity']=1;
         Object.defineProperties(props.info,{
            quantity:{
                value: 1,
                writable: true
            }
         })
        const dispatch = useDispatch();

        const click=()=>{
                dispatch(details(props));
                dispatch(totalprice(props));
        }
        
    return(
        <div className="productcard ">
            <img src={props.info.image} alt="demo" />
            <div className="info">
               <div className="font-extrabold title">{props.info.title}</div>
               <div className="font-extralight">${props.info.price}</div>
               <button onClick={click} className="add-btn hover:bg-sky-700 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md" >Add to cart</button>
            </div>
            
        </div>
    )
}

export default ProductCard;