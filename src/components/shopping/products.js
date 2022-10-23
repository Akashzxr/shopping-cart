import Heading from "../Heading";
import Items from "./items";
import "./products.css"
const Products=()=>{
    return(
        <div className="products">
            <Heading color={"black"} icon={"black"} position={"relative"} />
            <Items/>
        </div>
    )
}

export default Products;