import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';


import Pet from './Pet'

const PetList = (props) => {
	return(
		<div className="pet-list">
			{props.myPets.map(pet => {
				return <Pet key={pet.id} pet={pet} />
			})}
		</div>
	)
}

export default PetList;
