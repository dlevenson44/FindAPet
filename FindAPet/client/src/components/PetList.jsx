import React, { Component } from 'react'

class PetList extends Component {
	constructor() {
		super()
		this.state = {
			petList: null,
			petListLoaded: false,
		}
	}	

	componentDidMount() {
		fetch('/pets')
		.then(res => res.json())
		.then(res => {
			console.log(res)
			this.setState({
				petList: res.pets,
				petListLoaded: true,
			})
		}).catch(err => console.log(err))
	}

	renderPets() {
		return this.state.petList.map(pet => {
			return (
				<div className="pet" key={pet.id}>
					<h2>{pet.name}</h2>
					<p>{pet.description}</p>
				</div>
			)
		})
	}

	render() {
		return(
			<div className="pet-list">
				{(this.state.petListLoaded)
				? this.renderPets() :
				<p>Loading Pets...</p>}
			</div>
		)
	}
}

export default PetList;