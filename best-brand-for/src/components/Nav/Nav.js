import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import UserService from '../../services/user-service'
import TokenService from '../../services/token-service'
import RequestListContext from '../../contexts/RequestListContext'


export default class Nav extends Component {
  static contextType = RequestListContext
  
  state={
    loggedIn: null
  }
  
  // Nav component receives isLoggedIn App component state as a prop
    // if isLoggedIn is true, meaning a user has logged in, setState loggedIn to true
    componentWillReceiveProps(nextProps){
      if(nextProps.isLoggedIn){
          this.setState({
              loggedIn: true
          })
      }
  }
  
  // when user clicks logout link, clear the auth token and user token and set loggedIn to false
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    UserService.clearUserToken()
    UserService.clearFNameToken()
    UserService.clearLNameToken()
    this.setState({
        loggedIn:false
    })
  }

  renderLoginLinks(){
    return(
      <ul>
        <li><Link to='/login' className='loginButton'>Log In</Link></li>
      </ul>
    )
  }

  renderLogoutLinks(){

    let fName = UserService.getFNameToken().charAt(0).toUpperCase()
    let lName = UserService.getLNameToken().charAt(0).toUpperCase()

    return(<>

      <div className = 'dropdown'>
          <button className='dropdownButton'>MENU</button>
          <div className='dropdownContent'> 
            <Link to='/requests/all'>All Requests</Link> 
            <Link to='/requests/users'>Your Requests</Link>
            <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
          </div>
      </div>
      </>
    )
  }

  /*<p className='userIcon'>{fName}{lName}</p>*/

  componentDidMount=()=>{
    //console.log(this.context.user)
  }

  render(){
        return(
            <nav>
                <h1>BEST BRAND FOR</h1>
                
                
                {TokenService.hasAuthToken()
                ? this.renderLogoutLinks()
                : this.renderLoginLinks()}
            </nav>
        )
    }
}


