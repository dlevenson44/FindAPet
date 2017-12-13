import React, { Component } from 'react'

import Auth from '../modules/Auth'
import AddPetForm from './AddPetForm'

class Dashboard extends Component {
	constructor() {
		super()
		this.state = {
			myPets: null,
			petsLoaded: false,
		}
	}

	componentDidMount(){
		this.getUserPets()
	}

	getUserPets() {
		fetch('/profile', {
			method: 'GET',
			headers: {
				token: Auth.getToken(),
				'Authorization': `Token ${Auth.getToken()}`,
			}
		}).then(res => res.json())
		.then(res => {
			this.setState({
				myPets: res.pets,
				petsLoaded: true,
			})
		}).catch(err => console.log(err))
	}

	addPet(e, data) {
		fetch('/pets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				token: Auth.getToken(),
				'Authorization': `Token ${Auth.getToken()}`,
			},
			body: JSON.stringify({
				pet: data,
			}),
		}).then(res => res.json())
		.then(res => {
			console.log(res)
			this.getUserPets()
		}).catch(err => console.log(err))
	}

	render() {
		return(
			<div className="dash">
				<AddPetForm addPet={this.addPet} />
				{(this.state.petsLoaded) ?
				this.state.myPets.map(pet => {
					return <h1 key={pet.id}>{pet.name}</h1>
				}) : <p>Loading.....</p>}
			</div>
		)
	}
}

export default Dashboard;