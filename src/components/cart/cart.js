import Heading from "../Heading";
import { useSelector } from "react-redux";
import CartCard from "./cartcard";
import './cart.css'


const Cart=()=>{

const title = useSelector((state)=>state.cart.title) 
const count = useSelector((state)=>state.cart.count)   
const totalprice = useSelector((state)=>state.cart.totalprice);

    return(
        <div className="cart">
        <Heading color={"black"} icon={"black"} position={"relative"}/>

        {count>0 ?
        <div className="cart-card-section" >
            {title.map((info)=>{
                return(
                    <CartCard key={info.info.id} details={info.info} />
                )
            })}
        </div>
        :<div>no items here</div> }
       
       <div>TOTALPRICE:{totalprice}</div>
    </div>
    )
}

export default Cart;