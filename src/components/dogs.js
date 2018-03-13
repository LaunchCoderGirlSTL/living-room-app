import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav';


export const DogsAPI = {
	dogs: [
		{name: 'Dachshunds', qualities: ['intelligent', 'inquisitive', 'well-shaped', 'excellent badger hunters']}, 
		{name: 'All other dogs', qualities: ['im sure theyre all very good in their own (inferior) ways', 'i dont really believe dachshunds are a superior breed. i just grew up with them so they have a special place in my brain.']}
	], 
	all: function() { return this.dogs },
	get: function(name) {
    	const isDog = dog => name === dog.name
    	return this.dogs.find(isDog)
  	}
}

class Dogs extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<h2>This is a list of dogs in descending order of relevence in my life:</h2>
				<ul>
				{DogsAPI.all().map(dog => (
					<Link to={`dogs/${dog.name}`}><li className="list-group-item col-md-3">{dog.name}</li></Link>					
					))}
				</ul>

			</div>
			)
		
	}
}

export default Dogs;