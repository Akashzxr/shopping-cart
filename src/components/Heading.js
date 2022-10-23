import { Link } from "react-router-dom";
const Heading=(props)=>{
    return(
        <div className="heading flex justify-between" style={{position: `${props.position}`}} >
           <div style={{color: `${props.color}`}} className="main-text" >NEW FASHION</div>
           <div className="heading-icons flex gap-10" style={{color: `${props.icon}`}}>
              <div className="home-btn 
              transition ease-in-out delay-150 hover:-translate-y-1
               hover:scale-110 duration-300 ..."><Link to="/home">HOME</Link></div>
              <div className="products-btn 
              transition ease-in-out delay-150 hover:-translate-y-1
               hover:scale-110 duration-300 ..."><Link to="/products">PRODUCTS</Link></div>
              <div className="cart-btn 
              transition ease-in-out delay-150 hover:-translate-y-1 
              hover:scale-110 duration-300 ..." ><Link >CART</Link></div>
           </div>
        </div>
    )
}

export default Heading;