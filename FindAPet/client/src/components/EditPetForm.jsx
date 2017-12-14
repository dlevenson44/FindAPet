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
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		e.preventDefault()
		const name = e.target.name
		const val = e.target.value
		this.setState({
			[name] : val,
		})
	}

	render() {
		return(
			<div className="edit-form">
				<form onSubmit={(e) => this.props.editPet(e, this.state)} >
					<input type="text" name="name" placeholder="Name" value={this.state.name}
						onChange={this.handleChange} />
					<input type="text" name="post_type" placeholder="Adoption or Foster?" value={this.state.post_type} onChange={this.handleChange} />
					<input type="text" name="animal" placeholder="Animal" value={this.state.animal} onChange={this.handleChange} />
					<input type="text" name="breed" placeholder="Breed" value={this.state.breed} onChange={this.handleChange} />
					<input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
					<input type="text" name="picture" placeholder="Picture" value={this.state.picture} onChange={this.handleChange} />
					<input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
					<input type="text" name="foster_length" placeholder="Foster Length (if applicable)" value={this.state.foster_length} onChange={this.handleChange} />
					<input type="submit" value="Edit Post" />						
				</form>
			</div>
			)
	}
}

export default EditPetForm;