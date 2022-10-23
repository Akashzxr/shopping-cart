import React from "react"
import { increment } from "../../redux/cartslice";
import { useDispatch } from "react-redux";

const ProductCard=(props)=>{
        const dispatch = useDispatch();
    return(
        <div className="productcard ">
            <img src={props.info.image} alt="demo" />
            <div className="info">
               <div className="font-extrabold title">{props.info.title}</div>
               <div className="font-extralight">${props.info.price}</div>
               <button onClick={()=>dispatch(increment())} className="add-btn hover:bg-sky-700 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md" >Add to cart</button>
            </div>
            
        </div>
    )
}

export default ProductCard;