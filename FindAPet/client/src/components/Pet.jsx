import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';

// <img src={props.pet.picture} />

const Pet = (props) => {
	return(
		<div className="pet-inlist">
			<h3>{props.pet.name}</h3>
			
			<Link to={`/pets/${props.pet.id}`}>See More</Link>
		</div>
	)
}

export default Pet