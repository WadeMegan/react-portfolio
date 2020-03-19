import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Error from '../../components/Error/Error'
import './RegisterPage.css'
import RequestApiService from '../../services/request-api-services'
import RequestListContext from '../../contexts/RequestListContext'

export default class RegisterPage extends Component {

    static contextType = RequestListContext

    state = {
        toLogin: false,
        error:null
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
                firstName.value = ''
                lastName.value = ''
                email.value = ''
                password.value = ''
                this.onRegistrationSuccess()
            })
            .catch(res=>{
                // if the error equals the validation errors possibly from the endpoint, setState to show error to user
                if(res.error === 'Password must contain one upper case, lower case, and number'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'There is already an account associated with this email'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must be longer than 8 characters'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must not start or end with empty spaces'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must be less than 72 characters'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must contain one upper case, lower case, number'){
                    this.setState({error:res.error})
                }
                // if other error, set context error to show error boundary
                else{
                    this.context.setError(res.error)
                }
            })
    
    }

    componentDidMount=()=>{
        this.context.clearError()
    }
    
    render(){
        const { error } = this.state
        // upon successful login, redirect to your plants page
        if(this.state.toLogin===true){
            return <Redirect to='/login'/>
        }
        return(
            <Error>
            <section className='loginSection' >
                <p>Get the advice you need for the products you want.</p>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                <legend>REGISTER</legend>
                <div role='alert' id='error'>
                        {error && <p>{error}</p>}
                    </div>
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
                <input type='submit' value='Submit' className='submitButton'/>
                </form>
                <p>Already have an account? <Link to='/login'>Login.</Link></p>
            </section>
            </Error>
        )
    }
}