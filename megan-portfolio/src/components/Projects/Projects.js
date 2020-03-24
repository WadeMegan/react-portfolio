import React from 'react';
import bestBrandFor from '../../images/bestBrandFor.png'
import dripDrop from '../../images/dripDrop.png'
import foodiesOnFoot from '../../images/foodiesOnFoot.png'

function Projects() {
  return (
    <section className="project">
        <h2>Megan Wade's Portfolio</h2>
        <div className="project-container">
            <img className="project-img" src={bestBrandFor} alt="best brand for"/>
            <section className="project-description">
                <h3>Best Brand For</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                    <li><i className="fab fa-node fa-2x"></i></li>
                </ul>
                <p className="project-element">Best Brand For is a full-stack web application that allows users to make requests for products they are 
                looking to purchase. Other users can then comment on the request to recommend their favorite brands for that product. The goal of Best Brand For is to assist users in making better buying decisions with the help of real experience. </p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/WadeMegan/Best-Brand-For-Client" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://best-brand-for.wademegan.now.sh/" target="_blank" rel="noopener noreferrer">Demo Project</a>
                </div>
            </section>
        </div>
        <div className="project-container">
            <img className="project-img" src={dripDrop} alt="drip drop"/>
            <section className="project-description">
                <h3>Drip Drop</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                    <li><i className="fab fa-node fa-2x"></i></li>
                </ul>
                <p className="project-element">Drip Drop is a full-stack web application that reminds users to water their houseplants. Users can select the plants they have from a 
                list of common houseplants. Each day, Drip Drop will check to see if any of the user's plants will need to be watered. If so, Drip Drop will send the user an SMS message as a reminder.  </p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/WadeMegan/drip-drop" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://drip-drop.now.sh/" target="_blank" rel="noopener noreferrer">Demo Project</a>
                </div>
            </section>
        </div>
        <div className="project-container">
            <img className="project-img" src={foodiesOnFoot} alt="foodies on foot"/>
            <section className="project-description">
                <h3>Foodies on Foot</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                </ul>
                <p className="project-element">Foodies on Foot allows users to search for up to 60 restaurants within walking distance from the user's given location, utilizing multiple Google Maps APIs. The app also shows the user how many grams of 
                carbon dioxide emissions they are saving by walking to the restaurant instead of driving. </p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/WadeMegan/foodies-on-foot" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://wademegan.github.io/foodies-on-foot/" target="_blank" rel="noopener noreferrer">Demo Project</a>
                </div>
            </section>
        </div>
    </section>
  );
}

export default Projects;