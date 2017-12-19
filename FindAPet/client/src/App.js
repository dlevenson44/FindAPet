//import React and styling
import React, { Component } from 'react';
import './App.css';

//import from react router
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';

//import module and components
import Auth from './modules/Auth'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import PetList from './components/PetList'
import SinglePet from './components/SinglePet'
import Footer from './components/Footer'



class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      currentId: null,
      currentStatus: '',
      mountStarter: '',
      petsLoaded: false,
      petList: null,
      currentPet: null,
      fireRedirect: false,
      redirectPath: null,
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.getAllPets = this.getAllPets.bind(this)
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        user: data,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      console.log('new user created')
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => { console.log(err) })
  }

  handleLoginSubmit(e, data) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      console.log('user logged in')
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err=> console.log(err))
  }


  handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => {
      Auth.deauthenticateToken()
      console.log('user logged out')
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err=> console.log(err))
  }

  componentDidMount(){
    this.getAllPets()
  }

  getAllPets() {
      fetch('/pets', {
        method: 'GET',
        headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`,
        }
      }).then(res => res.json())
      .then(res => {
        this.setState({
          petList: res.pets,
          petsLoaded: true,
          currentStatus: 'list',
          mountStarter: 'list'
        })
      }).catch(err => console.log(err))
  }




  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="nav">
              <Link className="nav-link" to="/pets">Pets</Link>
          {(this.state.auth) ? 
            (<div className="auth-nav">
              <Link className="nav-link" to="/profile">View Profile</Link>
              <Link className="nav-link" to="/ "onClick={this.handleLogout}>Logout</Link>
             </div>             
              ) : (
              <div className="auth-nav">
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
              </div>
            )}
          </div>
          <Route exact path="/register" render={() => (this.state.auth) ?
              <Redirect to="/profile" />  :
              <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit} /> 
            } />
          <Route exact path="/login" render={() => (this.state.auth) ? 
            <Redirect to="/profile" /> :
            <LoginForm handleLoginSubmit={this.handleLoginSubmit} /> 
            } />
          <Route exact path="/profile" render={() => <Dashboard />} />          
          <Route exact path="/pets" render={() => <PetList getAllPets={this.getAllPets} petList={this.state.petList} petListStatus={this.petListStatus} petsLoaded={this.state.petsLoaded} />} />                
          <Route exact path="/pets/:id" component={SinglePet} />          
          <Footer />
        </div>        
      </Router>
    );
  }
}

export default App;
