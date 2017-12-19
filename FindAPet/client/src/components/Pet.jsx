import React from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';

const Pet = (props) => {
	return(
		<div className="pet-inlist">
			<h3 className="link-header">{props.pet.name}</h3>
			
			<Link className="list-link" to={`/pets/${props.pet.id}`}>See More</Link>
		</div>
	)
}

export default Pet