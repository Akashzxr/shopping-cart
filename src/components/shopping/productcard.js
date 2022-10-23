import React from "react"

const ProductCard=(props)=>{
    return(
        <div className="productcard ">
            <img src={props.info.image} />
            <div className="info">
               <div className="font-extrabold">{props.info.title}</div>
               <div className="font-extralight">${props.info.price}</div>
               <button className="add-btn hover:bg-sky-700 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md" >Add to cart</button>
            </div>
            
        </div>
    )
}

export default ProductCard;