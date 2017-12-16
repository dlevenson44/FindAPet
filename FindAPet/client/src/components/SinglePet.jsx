import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const SinglePet = (props) => {
	return(
		<div className="pet-single">
			<div className="inner">
				<div className="img">
					<img src={props.pet.picture} alt={props.pet.name} />
				</div>
				<div className="info">
					<h4>{props.pet.name}</h4>
					<h2>{props.pet.post_type}</h2>
					<p>{props.foster_length}</p>
					<h1>{props.pet.animal}</h1>
					<h1>{props.pet.breed}</h1>
					<h1>{props.pet.age}</h1>
					<p>{props.pet.description}</p>
				</div>
			</div>
		</div>
		)
}


export default SinglePet;