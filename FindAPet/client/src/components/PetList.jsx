import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Pet from './Pet'
import SinglePet from './SinglePet'
import Auth from '../modules/Auth'

class PetList extends Component{
	constructor(props) {
		super(props)
		this.state = {
		}
		this.getAllPets = this.getAllPets.bind(this)
	}

	//add an eventlistener which can be passed as a prop to collect the id that is being clicked

	componentDidMount() {
		this.getAllPets
	}

	getAllPets() {
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
          mountStarter: 'list'
        })
      }).catch(err => console.log(err))
  }

  //pass key/pet from petlist into pet, from pet into  
           
         

	renderPets() {
		console.log(this, 'this value from renderPets')
		return this.props.petList.map(pet => {
			let petPath = `pets/${pet.id}`
			console.log(petPath, 'this is petPath')
			console.log(pet, 'this is the pet')
			return <Pet key={pet.id} pet={pet} />
		})
	}

	renderPet() {
		console.log(this)
		return this.props.PetList.map(pet => {
			let petPath = `pets/${pet.id}`
			return <SinglePet key={pet.id} pet={pet} />
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
