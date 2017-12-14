import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from '../modules/Auth'
import AddPetForm from './AddPetForm'
import EditPetForm from './EditPetForm'

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pet:{
				name: props.pet ? props.pet.name : '',
				post_type: props.pet ? props.pet.post_type : '',
				animal: props.pet ? props.pet.animal : '',
				breed: props.pet ? props.pet.breed : '',
				age: props.pet ? props.pet.age : '',
				picture: props.pet ? props.pet.picture : '',
				description: props.pet ? props.pet.description : '',
				foster_length: props.pet ? props.pet.foster_length : '',
				id: props.pet ? props.pet.id : '',
			},
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
					<Route exact path="/pets/:id/edit" render={(props) => <EditPetForm
						{...props}
					 pet={this.state.pet} state={this.state}/>} editPet={this.editPet}/>					
						}
				</div>
			</Router>
		)
	}
}

export default Dashboard;