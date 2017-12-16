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
import PetList from './components/PetList'
import EditPetForm from './components/EditPetForm'
import SinglePet from './components/SinglePet'



class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      petsLoaded: false,
      chosenPet: {},
      myPets: null,
      currentStatus: '',
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.getAllPets = this.getAllPets.bind(this)
    this.petListStatus = this.petListStatus.bind(this)
    console.log(this, 'this is from constructor in App.js')
    
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
        currentStatus: 'list'
      })
    }).catch(err => console.log(err))
  }

  petListStatus() {
    this.setState({
      currentStatus: 'list'
    })
  }

  renderSwitch() {
    switch(this.state.currentStatus) {
      case: 'list':
        return 
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">Dash</Link>
            <Link to="/pets">Pets</Link>
            <button onClick={this.handleLogout}>Logout</button>
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
          
          <Route exact path="/pets/:id" render={() => <SinglePet petList={this.state.pet} getAllPets={this.getAllPets} petList={this.state.petList}/>} />        
          

           

          
        </div>
      </Router>
    );
  }
}

export default App;
