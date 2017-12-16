import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Pet from './Pet'

class PetList extends Component{
	constructor(props) {
		super(props)
		this.state = {
		}

		console.log(this, 'this is from constructor on petlist')
	}

	renderPets() {
		console.log(this, 'this value from renderPets')
		return this.props.petList.map(pet => {
			var petPath = `pets/${pet.id}`
			console.log(petPath)
			return <Pet key={pet.id} pet={pet} />
		})
	}	

	render() {
		return(
			<div className="pet-list">
				{(this.props.petsLoaded)
				? this.renderPets() :
				<p>Loading Pets...</p>}
			</div>
		)
	}
}

//<Link to={petPath} key={pet.id}>{pet.name}</Link>
					//<p>{pet.description}</p>

// const PetList = (props) => {
// 	console.log(this, 'this is this from petlist')
// 	return(
// 		<div className="pet-list">
// 			{this.props.myPets.map(pet => {
// 				return <Pet key={pet.id} pet={pet} />
// 			})}
// 		</div>
// 	)
// }

export default PetList;
