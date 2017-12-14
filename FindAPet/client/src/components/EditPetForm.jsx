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
	}

	handleUpdateChange(e) {
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
				<form onSubmit={(e) => this.props.editPet(e, this.state.pet)} >
					<input type="text" name={'name'} onChange={(e => this.handleUpdateChange(e))} value={this.state.pet.name} />
					<input type="text" name={'post_type'} onChange={(e => this.handleUpdateChange(e))} value={this.state.post_type} />
					<input type="text" name={'animal'} onChange={(e => this.handleUpdateChange(e))} value={this.state.petanimal} />
					<input type="text" name={'breed'} onChange={(e => this.handleUpdateChange(e))} value={this.state.pet.breed} />
					<input type="number" name={'age'} onChange={(e => this.handleUpdateChange(e))} value={this.state.pet.age} />
					<input type="text" name={'picture'} onChange={(e => this.handleUpdateChange(e))} value={this.state.pet.picture} />
					<input type="text" name={'description'} onChange={(e => this.handleUpdateChange(e))} value={this.state.pet.description} />
					<input type="text" name={'foster_length'} onChange={(e => this.handleUpdateChange(e))} value={this.state.pet.foster_length} />
					<input type="submit" value="Edit Post" />						
				</form>
			</div>
			)
	}
}

export default EditPetForm;
