import React from 'react';
import bestBrandFor from '../../images/bestBrandFor.png'
import dripDrop from '../../images/dripDrop.png'
import foodiesOnFoot from '../../images/foodiesOnFoot.png'
import arusha from '../../images/arusha.png'
import memesSearch from '../../images/memesSearch.png'

//make images 700 x 500 px

function Projects() {
  return (
    <section className="project">
        <h2>Megan Summers' Projects</h2>
        <div className="project-container">
            <img className="project-img" src={arusha} alt="arusha"/>
            <section className="project-description">
                <h3>Arusha Consulting</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                    <li><i className="fab fa-node fa-2x"></i></li>
                </ul>
                <p className="project-element">I built this full-stack web application for Arusha Consulting. Arusha Consulting is a boutique consulting firm with a focus on promoting diversity within the workplace. This website allows Arusha Consulting to communicate with users via About, Blog, and Contact pages. I implemented a headless CMS to allow the client to manage their own content. The project also includes a crowd-sourced database that holds informative resources concerning numerous social justice issues.</p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/WadeMegan/arusha-consulting-client" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://www.arushainc.com/" target="_blank" rel="noopener noreferrer">Demo Project</a>
                </div>
            </section>
        </div>
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
                <p className="project-element">Best Brand For is a full-stack web application built for anybody that is on the market for a product, but is unsure which brand they should buy. I built it to make these purchase decisions easier and more informed with the help of real experience. Users can log in and make a request for products they are looking to purchase. Other users can then comment on the request to recommend their favorite brands for that product. </p>
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
                <p className="project-element">Drip Drop is a full-stack web application built for plant owners that can never remember when they need to water their plants. Users can select the plants they have from a 
                list of common houseplants and Drip Drop will remind the user to water them. Each day, Drip Drop will check to see if any of the user's plants need to be watered. If so, Drip Drop will send the user an SMS message as a reminder. I built this web app to help prevent houseplant deaths caused by over or under watering. </p>
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
                <p className="project-element">I built Foodies on Foot because I don't own a car, so I wanted a compiled list of restaurants close enough to walk to. Foodies on Foot is for any foodie that doesn't own a car or simply wants to minimize their environmental impact. Foodies on Foot allows users to search for up to 60 restaurants within walking distance from the user's given location, utilizing multiple Google Maps APIs. The app also shows the user how many grams of 
                carbon dioxide emissions they are saving by walking to the restaurant instead of driving. </p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/WadeMegan/foodies-on-foot" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://wademegan.github.io/foodies-on-foot/" target="_blank" rel="noopener noreferrer">Demo Project</a>
                </div>
            </section>
        </div>
        <div className="project-container">
            <img className="project-img" src={memesSearch} alt="foodies on foot"/>
            <section className="project-description">
                <h3>Memes Search & Creator</h3>
                <ul className = "languages project-element">
                    <li><i className="fab fa-html5 fa-2x"></i></li>
                    <li><i className="fab fa-css3-alt fa-2x"></i></li>
                    <li><i className="fab fa-js fa-2x"></i></li>
                </ul>
                <p className="project-element">The Memes Search & Creator tool allows users to search for a meme and then add text to the selected meme. I created this project for the Mintbean CareerHack hackathon on June 29th, 2020. The challenge was to build a web application using Algolia in four hours. The web app was awarded Best Design.</p>
                <div className="project-buttons-container project-element">
                    <a className="project-button" href="https://github.com/WadeMegan/memes-search-app" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="project-button demo" href="https://epic-noether-9f3a55.netlify.app/" target="_blank" rel="noopener noreferrer">Demo Project</a>
                </div>
            </section>
        </div>
    </section>
  );
}

export default Projects;