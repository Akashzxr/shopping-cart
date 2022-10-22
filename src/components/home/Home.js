import Heading from "../Heading";
import Contents from "./content";
import './home.css'
const Home=()=>{
   return(
      <div className="home">
         <Heading color={"white"} icon={"black"} />
         <Contents/>
      </div>
   )
}

export default Home;