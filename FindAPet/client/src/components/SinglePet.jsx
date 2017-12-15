import React, { Component } from 'react'

class SinglePet extends Component {
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
	}

	componentDidMount() {
		
		fetch('/pets/:id')
		.then(res => res.json())
		.then(res => {
			console.log(res, 'this is res from singlepet')
			this.setState({
				pet: res
			})
		})
	}

	render() {
	console.log(this, 'this is this from singlepet')

	return(
		<h1>hello</h1>
		)
	}
}

export default SinglePet;