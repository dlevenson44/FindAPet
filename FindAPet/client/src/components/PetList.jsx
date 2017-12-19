import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Pet from './Pet'
import SinglePet from './SinglePet'
import Auth from '../modules/Auth'

class PetList extends Component{
	constructor(props) {
		super(props)
		this.state = {
		}
		this.getAllPets = this.getAllPets.bind(this)
	}	

	componentDidMount() {
		this.getAllPets
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

	renderPets() {
		return this.props.petList.map(pet => {
			let petPath = `pets/${pet.id}`			
			return <Pet key={pet.id} pet={pet} />
		})
	}

	render() {
		return(
			<div className="pet-list">
				<h1 className="list-header">Available Pets</h1>
				{(this.props.petsLoaded)
				? this.renderPets() :
				<p>Loading Pets...</p>}
			</div>
		)
	}
}

export default PetList;
