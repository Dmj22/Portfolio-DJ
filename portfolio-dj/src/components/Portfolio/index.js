import React from 'react';
import datingApp from "../../assets/images/photo3.png";
import newgen22marketing from "../../assets/images/photo1.png";
import chatApp from "../../assets/images/phot4.png";
import budgetApp from "../../assets/images/photo2.png";


function Portfolio() {
    return (
      <section>
        <h1 data-testid="h1tag">Portfolio</h1>
   
        <a href="https://dmj22.github.io/newgen22marketing/">
            <img
                src={newgen22marketing}
                alt="marketing-website"
                className="screenshot"
            />
        </a>
        <a href="https://github.com/Dmj22/Mula">
            <img
                src={Mula}
                alt="budgetApp"
                className="screenshot"
            />
        </a>
        <a href="https://peaceful-beach-75980.herokuapp.com/">
            <img
                src={datingApp}
                alt="i++"
                className="screenshot"
            />
        </a>
        <a href="https://github.com/Dmj22/Chatty-Patty-">
            <img
                src={chatApp}
                alt="app"
                className="screenshot"
            />
        </a>
      </section>
    );
  }

export default Portfolio;