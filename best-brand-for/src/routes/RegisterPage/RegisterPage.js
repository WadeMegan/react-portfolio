import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <p>Get the advice you need for the products you want.</p>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                <legend>REGISTER</legend>
                <div>
                    <label htmlFor="firstName">First Name *</label>
                    <input className='formInput' type="text" name='firstName' id='firstName' required='require' />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name *</label>
                    <input className='formInput' type="text" name='lastName' id='lastName' required='require'/>
                </div>
                <div>
                    <label htmlFor="email">Email *</label>
                    <input className='formInput' type="text" name='email' id='email' required='require'/>
                </div>
                <div>
                    <label htmlFor="password">Password *</label>
                    <input className='formInput' type="password" name='password' id='password' required='require'/>
                </div>
                <input className='form-register-button' type='submit' value='Submit' className='submitButton'/>
                </form>
                <p>Already have an account? <Link to='/login'>Login.</Link></p>
            </section>
        )
    }
}