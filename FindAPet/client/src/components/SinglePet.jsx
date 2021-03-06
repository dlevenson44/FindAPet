import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SinglePet extends Component  {
	constructor(props) {
		super(props)
		this.state = {
			petsLoaded: true,
		}
		this.fetchPet = this.fetchPet.bind(this)
		this.renderData = this.renderData.bind(this)
	}

	componentDidMount() {
		this.fetchPet()
	}

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

// <img src={require("./home/priyanka/Finalproject/src/components/3.jpg")} alt="cannot display"/>
// <img src={this.state.currentPet.picture} alt={this.state.currentPet.name} />

	renderData() {
	
		console.log(this.state.currentPet, 'this from renderData in singlepet')
		return(
			<div>
			<div className="pet-basics">
				<h1 className="pet-name">{this.state.currentPet.name}</h1>
				<h2 className="pet-type">{this.state.currentPet.post_type}</h2>
				<p className="pet-length">{this.state.currentPet.foster_length}</p>
				<h3 className="pet-details">{this.state.currentPet.animal}</h3>
				<h3 className="pet-details">{this.state.currentPet.breed}</h3>
				<h3 className="pet-details">{this.state.currentPet.age}</h3>
			</div>
			<div>
				
				<p className="pet-description">{this.state.currentPet.description}</p>
			</div>
			</div>
		)
	}
	
	render(props) {		
		console.log(this)
		return(
			<div className="pet-single">
				{(this.state.currentPet) ?
					this.renderData()  :
					<p> loading this stuff</p>}
			</div>
		)
	}
}



export default SinglePet;

