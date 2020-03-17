import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './LoginPage.css'
import RequestListContext from '../../contexts/RequestListContext'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import UserService from '../../services/user-service'
import RequestApiService from '../../services/request-api-services'

export default class LoginPage extends Component {
    static contextType = RequestListContext

    state = {
        toRequests: false
    }

    // upon successful login ... 
    onLoginSuccess = (e, user) => {
        this.setState({ 
            toRequests:true, // set true for redirecting (see render method)
        },()=>{this.props.onLogin()}) // call this.props.onLogin which will set the App component isLoggedIn state to true
    }

    // when user submits signin form ...
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        
        /*this.setState({
            error: null
        })*/

        const {email,password} = ev.target

        // makes POST request to Drip Drop API's auth endpoint 
        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            // if login info is correct save the user's auth token and id to sessionStorage and call this.onLoginSuccess()
            .then(res=>{
                email.value=''
                password.value=''
                TokenService.saveAuthToken(res.authToken)
                //save user id in local storage for refresh
                UserService.saveUserToken(res.id)
                UserService.saveFNameToken(res.user.first_name)
                UserService.saveLNameToken(res.user.last_name)
                
                RequestApiService.getAllRequests()
                    .then(res=>{
                        this.context.setRequestList(res)
                        RequestApiService.getRequestsByUserId(UserService.getUserToken())
                            .then(this.context.setUsersList)
                            .catch()
                    })
                    .catch()
                
                    this.onLoginSuccess(res.user)      
            })
            .catch(res=>{
                // if the error equals the validation error possibly from the endpoint, setState to show error to user
                if(res.error === 'Incorrect email or password'){
                    this.setState({error:res.error})
                }
                // if other error, set context error to show error boundary
                /*else {
                    this.context.setError(res.error)
                }*/        
            })
    }   
    
    
    
    render(){
        // upon successful login, redirect to your plants page
        if(this.state.toRequests===true){
            return <Redirect to='/requests/all'/>
        }
        return(
            <section className='loginSection'>
                <h1>Best Brand For</h1>
                <p>Get the advice you need for the products you want</p>
                <form className='loginForm' onSubmit={this.handleSubmitJwtAuth}>
                <legend>Login</legend>
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
                <p>New to Best Brand For? <a>Register.</a></p>
            </section>
        )
    }
}