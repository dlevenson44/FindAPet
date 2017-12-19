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
			picture: null,
			description: '',
			foster_length: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleImageSubmit = this.handleImageSubmit.bind(this)
		this.handleImageChange = this.handleImageChange.bind(this)
	}

	handleChange(e) {
		const name = e.target.name
		const val = e.target.value
		this.setState({
			[name]: val,
		})
	}

	handleImageSubmit(e, data) {
		e.preventDefault()
		console.log('image added')
		fetch('/pets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				token: Auth.getToken(),
				'Authorization': `Token ${Auth.getToken()}`
			},
			//e.target.result should represent the content of the file being uploaded
			body: e.target.result,
			//if response is a JSON object
		}).then(res => res.json())
		//handle success response object
		.then(success => console.log(success))
		//handle the error response
		.catch(err => console.log(err))
	}

	handleImageChange(e) {
		e.preventDefault()
		let reader = new FileReader()
		let file = e.target.files[0]

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			})
		}
		reader.readAsDataURL(file)
	}

// <input type="file" name="picture" placeholder="Picture" value={this.state.picture} onChange={this.handleChange} />

	// <input type="text" name="picture" placeholder="Picture" value={this.state.picture} onChange={this.handleChange} />

	render() {
		console.log(this, 'this is from the add form')
		let imagePreviewUrl = this.state.picture
		let $imagePreview = null
		if(imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />)
		}
		else {
			$imagePreview = (<div className="previewText">Please select an image to upload</div>)
		}
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
				<form onSubmit={(e) => this.handleImageSubmit(e)}>
					<input className="file-input" type="file" onChange={(e) => this.handleImageChange(e)} />
					<button className="submit-button" type="submit" onClick={(e) => this.handleImageSubmit(e)}>Upload Image</button>
				</form>
				<div className="image-preview">
					{$imagePreview}
				</div>

			</div>
			)
	}
}

export default AddPetForm;