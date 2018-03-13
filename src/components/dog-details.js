import React, { Component } from 'react';
import NavBar from './nav';
import { DogsAPI } from './dogs';

class DogDetails extends Component {
	render() {
		const dog = DogsAPI.get(this.props.match.params.name);
		console.log(DogsAPI.get);
		console.log(dog.qualities)
		return (
			<div className="container">
				<NavBar />
				<h1>{dog.name}</h1>				
				
				<h2>{dog.qualities}</h2>
							
			</div>
			)
		
	}
}

export default DogDetails;

// 






















// {
// 					dog.qualities.map(q => (
// 						<li>{q}</li>
// 						))
// 				}