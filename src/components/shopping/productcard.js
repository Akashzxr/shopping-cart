import React,{useState} from "react"
import { increment,details } from "../../redux/cartslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductCard=(props)=>{
        const title=useSelector((state)=>state.cart.title);
        const dispatch = useDispatch();
        const [count,setcount]=useState(0);

        const click=()=>{
            setcount(count+=1);
            if(count==0){
                dispatch(details(props));
                dispatch(increment())
                console.log(title)
            }
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