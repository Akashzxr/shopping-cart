
const Contents=()=>{
    return(
        <div className="home-contents">

            <img src={require("../../images/main img.png")}
             alt="main" 
             className="home-main-img"/>
            
            <div className="home-qoute">
                <h2 className="qoute1">WE ARE</h2>
                <h2 className="qoute2">FASHION</h2>
            </div>

            <div className="home-middle">
                <button className="shop-button">SHOP NOW</button>
           
  
            <div className="home-footer">

               
                  <img src={require("../../images/wave.png")}
                  alt="footer img"
                  className="home-footer-img"/>  

                   <img src={require("../../images/sideimg.png")}
                alt="side img" className="home-side-img"/>
            </div>

            </div>

        </div>
    )
}

export default Contents;