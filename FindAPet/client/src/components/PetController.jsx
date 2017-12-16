import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import PetList from './PetList'
import SinglePet from './SinglePet'

class PetController extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: props.currentPage,
			currentId: props.currentId || null,
			petsLoaded: false,
			myPets: null,
			currentPet: null,
			fireRedirect: false,
			redirectPath: null,
			currentStatus: ''
		}
	}

	componentDidMount() {
		if (this.state.mountStarter === '') {
		    fetch('/pets', {
		      method: 'GET',
		      headers: {
		        token: Auth.getToken(),
		        'Authorization': `Token ${Auth.getToken()}`,
		      }
		    }).then(res => res.json())
		    .then(res => {
		      this.setState({
		        petList: res.pets,
		        petsLoaded: true,
		        currentStatus: 'list',
		      })
		    }).catch(err => console.log(err)			
		}
	}

	renderDecider() {
		switch(this.state.currentStatus) {
			case 'list':
				return <PetList myPets={this.state.myPets} />
				break;
			default:
				return <Redirect push to="/" />
				break;
		}
	}

	render() {
		return(
			<div className="container">
				{(this.state.petsLoaded) ? this.decideWhichToRender() :
					<p>loading.......</p>}
			)
	}

}