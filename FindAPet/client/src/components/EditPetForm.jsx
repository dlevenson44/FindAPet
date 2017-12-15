import React, { Component } from 'react'

import Auth from '../modules/Auth'

class EditPetForm extends Component {
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
		}
		this.handleUpdateChange = this.handleUpdateChange.bind(this)
		this.editPet = this.editPet.bind(this)
	}

	editPet(e, data) {
		e.preventDefault()
		console.log(data, 'this is data')
		const id = this.props.match.params.id;
		console.log(this, 'this is this')
		fetch(`/pets/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				token: Auth.getToken(),
				'Authorization': `Token ${Auth.getToken()}`,
			},
			body: JSON.stringify({
				name: data.name,
				post_type: data.post_type,
				animal: data.animal,
				breed: data.breed,
				age: data.age,
				picture: data.picture,
				description: data.description,
				foster_length: data.foster_length,
			}),
		}).then(res => res.json())
		.then(res => {
			console.log(res, 'this is the res from editPet')
			this.setState({
				pet: res.data
			})
			this.getUserPets()
		}).catch(err => console.log(err))
	}

	deletePet(id) {
		console.log('post deleted')
		let id =this.props.match.params.id
		fetch(`/pets/${id}`, {
			method: 'DELETE',
		}).then(res => res.json())
		.then(res => {
			this.getUserPets()
		})
	}

	handleUpdateChange(e) {
		e.preventDefault()
		const name = e.target.name
		const val = e.target.value
		console.log(this, 'this is this from updatechange')
		let peaches = this.props.state.myPets
		this.setState((prevState, props) => {
			const updatedPet = Object.assign({}, peaches, {[name]: val})
			return {pet: updatedPet}
		})
		console.log("handleupdatechange")
	}

	render() {
		{var newId = this
		console.log(newId)}
		return(
			<div className="edit-form">
				<form onSubmit={(e) => this.editPet(e, this.state.pet)} >
					<input type="text" name={'name'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.name} />
					<input type="text" name={'post_type'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.post_type} />
					<input type="text" name={'animal'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.animal} />
					<input type="text" name={'breed'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.breed} />
					<input type="number" name={'age'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.age} />
					<input type="text" name={'picture'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.picture} />
					<input type="text" name={'description'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.description} />
					<input type="text" name={'foster_length'} onChange={(e => this.handleUpdateChange(e))} value={this.props.state.myPets.foster_length} />
					<input type="submit" value="Edit Post" />						
				</form>
			</div>
			)
	}
}

export default EditPetForm;
