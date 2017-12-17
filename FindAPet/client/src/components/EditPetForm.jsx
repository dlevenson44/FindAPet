import React, { Component } from 'react'

import Auth from '../modules/Auth'

class EditPetForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			petStatus: '',
			// pet:{
			// 	name: this.props.myPets ? this.props.myPets.name : '',
			// 	post_type: this.props.myPets ? this.props.myPets.post_type : '',
			// 	animal: this.props.myPets ? this.props.myPets.animal : '',
			// 	breed: this.props.myPets ? this.props.myPets.breed : '',
			// 	age: this.props.myPets ? this.props.myPets.age : '',
			// 	picture: this.props.myPets ? this.props.myPets.picture : '',
			// 	description: this.props.myPets ? this.props.myPets.description : '',
			// 	foster_length: this.props.myPets ? this.props.myPets.foster_length : '',
			// 	id: this.props.myPets ? this.props.myPets.id : '',
			// }
		}
		console.log(this, 'this is from constructor in edit')
		this.handleUpdateChange = this.handleUpdateChange.bind(this)
		this.editPet = this.editPet.bind(this)
		this.deletePet = this.deletePet.bind(this)
		this.fetchPet = this.fetchPet.bind(this)
	}

	handleUpdateChange(e) {		
		e.preventDefault()
		const name = e.target.name
		const val = e.target.value
		console.log(this, 'this is this from updatechange')
		let peaches = this.state.pet
		this.setState((prevState, props) => {
			const updatedPet = Object.assign({}, prevState, peaches, {[name]: val})
			return {pet: updatedPet}
		})
		console.log(this, 'from end of handle')
	}

	// handleUpdateChange(e) {		
	// 	e.preventDefault()
	// 	console.log(this)
	// 	const name = e.target.name
	// 	const val = e.target.value
	// 	console.log(this, 'this is this from updatechange')
	// 	let peaches = this.state.pet
	// 	this.setState((prevState, props) => {
	// 		const updatedPet = Object.assign({}, peaches, {[name]: val})
	// 		return {pet: updatedPet}
	// 	})
	// 	console.log("handleupdatechange")

	componentDidMount() {
		this.fetchPet()
	}

	fetchPet() {
		let selectedId = this.props.match.params.id
		fetch(`/pets/${selectedId}`)
	      .then(res => res.json())
	      .then(res => {
	      	console.log(res, 'fetch in edit')
	        this.setState({
	          currentPet: res.pet,
	          petsLoaded: true,
	          currentStatus: 'show',
	          mountStarter: 'show'
	        })
	      }).catch(err => console.log(err))		
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
			this.props.getUserPets()
		}).catch(err => console.log(err))
	}

	deletePet(id) {
		console.log('post deleted')
		let deleteId =this.props.match.params.id
		fetch(`/pets/${deleteId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				token: Auth.getToken(),
				'Authorization': `Token ${Auth.getToken()}`,
			},
		})
		.then(res => {
			this.setState({
				petStatus: 'delete'
			})
			this.props.getUserPets()
		})
	}


	render() {
		console.log(this, 'this is from editpet render')
		return(
			<div className="pet-edit">
				{(this.state.currentPet) ?
				<div className="edit-form">
				<form onSubmit={(e) => this.editPet(e, this.state.pet)} >
					<input type="text" name={'name'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.name}  />
					<input type="text" name={'post_type'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="text" name={'animal'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="text" name={'breed'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="number" name={'age'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="text" name={'picture'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="text" name={'description'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="text" name={'foster_length'} onChange={(e) => this.handleUpdateChange(e)}  />
					<input type="submit" value="Edit Post" />						
				</form>
				<form className="delete-form" onSubmit={(e) => (e.preventDefault(), this.deletePet(this.props.match.params.id))}>
					<button>Delete Post</button>
				</form>
			</div> :
					<p> loading this stuff</p>}
			</div>
			)	
	}
}

export default EditPetForm;
