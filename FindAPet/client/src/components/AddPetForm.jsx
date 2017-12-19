import React, { Component } from 'react'

import Auth from '../modules/Auth'

class AddPetForm extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			post_type: '',
			animal: '',
			breed: '',
			age: '',
			description: '',
			foster_length: '',
		}
		this.handleChange = this.handleChange.bind(this)		
	}

	handleChange(e) {
		const name = e.target.name
		const val = e.target.value
		this.setState({
			[name]: val,
		})
	}



// <input type="file" name="picture" placeholder="Picture" value={this.state.picture} onChange={this.handleChange} />

	// <input type="text" name="picture" placeholder="Picture" value={this.state.picture} onChange={this.handleChange} />

	render() {
		return(
			<div className="add-form">
				<form onSubmit={(e) => this.props.addPet(e, this.state)} >
					<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
					<input type="text" name="post_type" placeholder="Adoption or Foster?" value={this.state.post_type} onChange={this.handleChange} />
					<input type="text" name="animal" placeholder="Animal" value={this.state.animal} onChange={this.handleChange} />
					<input type="text" name="breed" placeholder="Breed" value={this.state.breed} onChange={this.handleChange} />
					<input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
					<input type="file" name="picture" placeholder="Picture" value={this.state.picture} onChange={this.handleChange} />
					<input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
					<input type="text" name="foster_length" placeholder="Foster Length (if applicable)" value={this.state.foster_length} onChange={this.handleChange} />
					<input type="submit" value="Create Post" />
				</form>


			</div>
			)
	}
}

export default AddPetForm;