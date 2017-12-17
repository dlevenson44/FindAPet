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

	componentWillMount() {
		this.renderData()
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

	renderData() {
		
		console.log(this.state.currentPet, 'this from renderData in singlepet')
		return(
			<div className="pet-info">
				<p>{this.state.currentPet.id}</p>
			</div>
		)
	}
	
	render(props) {		

		return(
			<div className="pet-single">
				{(this.state.petsLoaded) ?
					this.renderData() :
					<p> loading this stuff</p>}
			</div>
		)
	}
}



export default SinglePet;

