import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import AllRequestsPage from '../../routes/AllRequestsPage/AllRequestsPage'
import IndividualRequestPage from '../../routes/IndividualRequestPage/IndividualRequestPage'
import NewRequestPage from '../../routes/NewRequestPage/NewRequestPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import UsersRequestsPage from '../../routes/UsersRequestsPage/UsersRequestsPage'
import './App.css'
import Nav from '../Nav/Nav'

class App extends Component {

  state = {
    isLoggedIn: false //will be passed to Nav component to render different links based on logged in or not
  }

  // will be passed to LoginPage as props
  // upon successful login, will set state isLoggedIn to true
  // necessary for rendering different links in Nav
  handleLogin=()=>{
    this.setState({
      isLoggedIn:true
    })
  }

  render(){
    return (
      <>
      <Nav isLoggedIn={this.state.isLoggedIn}/>
      <main className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingPage}/>
          <Route path={'/login'} render={()=> <LoginPage onLogin={this.handleLogin}/>}/>
          <Route path={'/register'} component={RegisterPage}/>
          <Route exact path={'/requests/all'} component={AllRequestsPage}/>
          <Route exact path={'/requests/users'} component={UsersRequestsPage}/>
          <Route path={'/requests/:id'} render={(props)=> <IndividualRequestPage {...props} />}/>
          <Route path={'/newrequest'} component={NewRequestPage}/>
        </Switch>
      </main>
      <footer>Footer</footer>
      </>
    )
  }
  
}

export default App;