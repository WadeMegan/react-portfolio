import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
    render(){
        return(
            <>
            <section className='landingPage'>
                <div className='hero'>
                <h2>ADVICE YOU NEED</h2>
                <p>Looking to make a purchase, but all of your options are giving you serious decision fatigue? Best Brand For is here to help you make better buying choices with the experience of real people.</p>
                <Link to='/register'>Get started now</Link>
                </div>
                <div className='noAccountContainer'>
                <h3>NO ACCOUNT? NO WORRIES.</h3>
                <p>Someone may have already made a request for the product you're looking for. Anyone can see all existing requests without logging in.</p>
                <Link to='/requests/all'>See existing requests</Link>
                </div>
                <div className='shortContainer'>
                <div className='indivShort'>
                    <h4>EASY PROCESS</h4>
                    <p>Simply log in and make a request for whatever product you're looking to buy.</p>
                </div>
                <div className='indivShort'>
                    <h4>REAL PEOPLE</h4>
                    <p>Other users, aka real people, will advise you on their favorite, tried-and-true brands.</p>      
                </div>
                <div className='indivShort'>
                    <h4>LESS REGRET</h4>
                    <p>You'll get help narrowing down the best brands, so you're less likely to experience buyer's remorse.</p>
                </div>
                </div>
            </section>
            </>
        )
    }
}