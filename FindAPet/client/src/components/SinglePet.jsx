import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SinglePet extends Component  {
	constructor(props) {
		super(props)
		this.state = {
			petsLoaded: true,
		}
		this.fetchPet = this.fetchPet.bind(this)
	}

	componentDidMount() {
		this.fetchPet()
	}

	fetchPet() {
		let selectedId = this.props.match.params.id
		console.log(selectedId)
		console.log(this, 'this is from fetch pet')
		fetch(`/pets/${selectedId}`)
	      .then(res => res.json())
	      .then(res => {
	      	console.log(res, 'this is the res from fetch pet')
	        this.setState({
	          currentPet: res.pet,
	          petsLoaded: true,
	          currentStatus: 'show',
	          mountStarter: 'show'
	        })
	      }).catch(err => console.log(err))
	}

	// renderData() {
	// 	console.log(this, 'this is the this for singlepet')
	// 	return this.props.petList.map(pet => {
	// 		if(pet.id === pet.id) {
	// 		return(
	// 			<p className={pet.id}> hi </p>
	// 			)
	// 	}})			
	// }
	
	render(props) {		

		return(
			<div className="pet-single">
				{(this.state.petsLoaded) ?
					<p>data loaded</p> :
					<p> loading this stuff</p>}
			</div>
		)
	}
}



export default SinglePet;

