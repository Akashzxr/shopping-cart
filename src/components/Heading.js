
const Heading=(props)=>{
    return(
        <div className="heading flex justify-between">
           <div style={{color: `${props.color}`}} className="main-text" >NEW FASHION</div>
           <div className="heading-icons flex gap-10" style={{color: `${props.icon}`}}>
              <div className="home-btn 
              transition ease-in-out delay-150 hover:-translate-y-1
               hover:scale-110 duration-300 ...">HOME</div>
              <div className="products-btn 
              transition ease-in-out delay-150 hover:-translate-y-1
               hover:scale-110 duration-300 ...">PRODUCTS</div>
              <div className="cart-btn 
              transition ease-in-out delay-150 hover:-translate-y-1 
              hover:scale-110 duration-300 ..." al>CART</div>
           </div>
        </div>
    )
}

export default Heading;