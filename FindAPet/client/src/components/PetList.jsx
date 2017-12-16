import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';


class PetList extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}	

	setSelectedPetId(petId) {
		this.setState({
			chosenPet: petId,
		})
		this.setSelectedPet(petId)
	}

	setSelectedPet(pet) {
		const petId = this.state.petList.find(pet => {
			return pet.id === petId 
		}) || {}
		this.setState({
			selected: pet
		})
	}
	

	renderPets() {
		console.log(this, 'this value from renderPets')
		return this.props.petList.map(pet => {
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

	renderSinglePet() {
		console.log(this, 'this is the velue from renderSinglePet')
		// return this.state.
	}

	render() {
		return(
			<div className="pet-list">
				{(this.props.petsLoaded)
				? this.renderPets() :
				<p>Loading Pets...</p>}
			</div>
		)
	}
}

export default PetList;
