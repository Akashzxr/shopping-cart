import Contents from "./content";
import './home.css'
import Heading from "../Heading";
const Home=()=>{
   return(
      <div className="home">
         <Heading color={"white"} icon={"black"}/>
         <Contents/>
      </div>
   )
}

export default Home;