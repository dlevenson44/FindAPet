import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from '../modules/Auth'
import AddPetForm from './AddPetForm'
import EditPetForm from './EditPetForm'

class Dashboard extends Component {
	constructor() {
		super()
		this.state = {
			myPets: null,
			petsLoaded: false,
			editPath: ''
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
		console.log('pet added')
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
			console.log(res, 'this is the res from addPet')
			this.getUserPets()
		}).catch(err => console.log(err))
	}

	editPet(e, data) {
		e.preventDefault()
		console.log('pet edited')
		fetch(`/pets/${data.id}`, {
			method: 'PUT',
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
			console.log(res, 'this is the res from editPet')
			this.getUserPets()
		}).catch(err => console.log(err))
	}

	render() {
		return(
			<Router>
				<div className="dash">
					<AddPetForm addPet={this.addPet} />
					<h1>click on pet name to edit</h1>		
					{(this.state.petsLoaded) 
						? this.state.myPets.map(pet => {
							var editPath=`/pets/${pet.id}/edit`
						return (
							 
								<Link to={editPath} key={pet.id}>{pet.name}</Link>
							)
					}) 
						: <p>Loading.....</p>
					}						
					<Route exact path="/pets/:id/edit" render={() => <EditPetForm />} />					
				</div>
			</Router>
		)
	}
}

export default Dashboard;