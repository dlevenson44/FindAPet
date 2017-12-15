import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';

class PetList extends Component {
	constructor() {
		super()
		this.state = {
			petList: null,
			petListLoaded: false,
		}
	}	

	componentDidMount() {
		fetch('/pets')
		.then(res => res.json())
		.then(res => {
			console.log(res)
			this.setState({
				petList: res.pets,
				petListLoaded: true,
			})
		}).catch(err => console.log(err))
	}

	renderPets() {
		console.log(this, 'this value from renderPets')
		return this.state.petList.map(pet => {
			var petPath = `pets/${pet.id}`
			console.log(petPath)
			return (
				<div className="pet" key={pet.id}>
					<Link to={petPath} key={pet.id}>{pet.name}</Link>
					<p>{pet.description}</p>
				</div>
			)
		})
	}

	render() {
		return(
			<div className="pet-list">
				{(this.state.petListLoaded)
				? this.renderPets() :
				<p>Loading Pets...</p>}
			</div>
		)
	}
}

export default PetList;