import React, { Component } from 'react'

import Auth from '../modules/Auth'

class EditPetForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			petStatus: '',
			picture: '',
		}
		this.handleUpdateChange = this.handleUpdateChange.bind(this)
		this.editPet = this.editPet.bind(this)
		this.deletePet = this.deletePet.bind(this)
		this.fetchPet = this.fetchPet.bind(this)
		this.handleImageSubmit = this.handleImageSubmit.bind(this)
		this.handleImageChange = this.handleImageChange.bind(this)
	}


	// componentWillMount() {
	// 	this.fetchPet()
	// }



	componentDidMount() {
		this.fetchPet()
	}

	componentWillReceiveProps() {
		this.fetchPet()
	}

	// componentDidUpdate() {
	// 	this.fetchPet()
	// }

	fetchPet() {
		let selectedId = this.props.match.params.id
		fetch(`/pets/${selectedId}`)
	      .then(res => res.json())
	      .then(res => {
	        this.setState({
	          currentPet: res.pet,
	          petsLoaded: true,
	          currentStatus: 'show',
	          mountStarter: 'show'
	        })
	      }).catch(err => console.log(err))		
	}

	handleImageSubmit(e, data) {
		e.preventDefault()
		const newId = this.props.match.params.id
		console.log('image added')
		console.log(this, 'this is form the handleImageSubmit')
		fetch(`/pets/${newId}`, {
			method: 'PUT',
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
		console.log(this, 'this is from handleImageChange')
		let reader = new FileReader()
		let file = e.target.files[0]

		reader.onloadend = () => {
			this.setState({
				//the line referencing picture to file var triggers 404 error
				picture: file,
				imagePreviewUrl: reader.result,
			})
		}
		reader.readAsDataURL(file)
	}

	handleUpdateChange(e) {		
		e.preventDefault()
		const name = e.target.name
		const val = e.target.value
		// console.log(this, 'this is this from updatechange')
		let peaches = this.state.pet
		this.setState((prevState, props) => {
			const updatedPet = Object.assign({}, prevState, peaches, {[name]: val})
			return {pet: updatedPet}
		})
		console.log(this, 'from end of handle')
	}

	editPet(e, data) {
		e.preventDefault()
		// console.log(data, 'this is data')
		const id = this.props.match.params.id;
		// console.log(this, 'this is this')
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
			// this.fetchPet()
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

// <input type="text" name={'picture'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.picture} />

//some function in render is setting state, causing render issue

	render() {
		console.log(this, 'this is from the edit form in render')
		let imagePreviewUrl = this.state.imagePreviewUrl
		let $imagePreview = null
		if(imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} style={{width: 300, height: 300}} />)
		}
		else {
			$imagePreview = (<div className="previewText">Please select an image to upload</div>)
		}		
		return(
			<div className="pet-edit">
				{(this.state.currentPet) ?
				<div className="edit-form">
				<form onSubmit={(e) => this.editPet(e, this.state.pet)} >
					<input type="text" name={'name'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.name}  />
					<input type="text" name={'post_type'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.post_type} />
					<input type="text" name={'animal'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.animal} />
					<input type="text" name={'breed'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.breed} />
					<input type="number" name={'age'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.age} />

					<input type="text" name={'description'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.description} />
					<input type="text" name={'foster_length'} onChange={(e) => this.handleUpdateChange(e)} placeholder={this.state.currentPet.foster_length} />
					<input type="submit" value="Edit Post" />						
				</form>
				<form className="delete-form" onSubmit={(e) => (e.preventDefault(), this.deletePet(this.props.match.params.id))}>
					<button>Delete Post</button>
				</form>
			</div> :
					<p> loading this stuff</p>}
						
			<div className="image-upload-container">
				<form onSubmit={(e) => this.handleImageSubmit(e)}>
					<input className="file-input" type="file" onChange={(e) => this.handleImageChange(e)} />
					<button className="submit-button" type="submit" onClick={(e) => this.handleImageSubmit(e)}>Upload Image</button>
				</form>

			</div>
			<div className="preview-container">
          		{($imagePreview) ?
          			<div className="img-preview">
          				{$imagePreview}
          			</div> :
          				<p>loading image preview</p>}
        	</div>
			</div>	
		)
	}
}

export default EditPetForm;
