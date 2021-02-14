import React from 'react'
import "./Home.css"
//import {sylvain} from "./images/sylvain.JPG"



function Home() {   
    return (
        <div className = "home">
          <img className = "author-image" src = {require("./images/sylvain.JPG").default}
           alt = "Sylvain Yabre"/>
          <div className = "author-info">
             <div className = "english-intro" >
                <p>
                    Hi there, I am Sylvain and this is my personal website. 
                    You can explore my projects and get to know more about me.
                </p>
             </div>
             <div className = "french-intro">
              <p>
                  Salut, je suis Sylvain et ceci est ma plateforme personnelle sur laquelle vous pouvez
                  explorer mes projets de programmation.
              </p>
             </div>
          </div>
        </div>
    )
}

export default Home;
