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
			petList: null,
			currentPet: null,
			fireRedirect: false,
			redirectPath: null,
			currentStatus: ''
		}
		this.getAllPets = this.getAllPets.bind(this)
	}

	renderDecider() {
		switch(this.state.currentStatus) {
			case 'list':
				return <PetList petList={this.state.petList} getAllPets={this.getAllPets} state={this.state}/>
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
			</div>
			)
	}

}