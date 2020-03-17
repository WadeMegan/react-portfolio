import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import './RegisterPage.css'
import RequestApiService from '../../services/request-api-services'

export default class RegisterPage extends Component {
    
    state = {
        toLogin: false
    }

    // upon successful login ... 
    onRegistrationSuccess = () => {
        this.setState({ 
            toLogin:true, // set true for redirecting (see render method)
        }) 
    }

    handleSubmit = ev =>{
        ev.preventDefault()
        const { firstName, lastName, email, password } = ev.target
    
        RequestApiService.postNewUser(firstName.value,lastName.value,email.value,password.value)
            .then(()=>{
                this.onRegistrationSuccess()
            })
            .catch()
    
    }
    
    render(){
        // upon successful login, redirect to your plants page
        if(this.state.toLogin===true){
            return <Redirect to='/login'/>
        }
        return(
            <section className='loginSection' >
                <h1>Best Brand For</h1>
                <p>Get the advice you need for the products you want</p>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                <legend>Register</legend>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name='firstName' id='firstName' />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name='lastName' id='lastName' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <input className='form-register-button' type='submit' value='Sign In'/>
                </form>
                <p>Already have an account? <a>Login.</a></p>
            </section>
        )
    }
}