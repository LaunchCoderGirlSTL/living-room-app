import React, { Component } from 'react';
import NavBar from './nav';
import { DogsAPI } from './dogs';

class DogDetails extends Component {
	render() {
		const dog = DogsAPI.get(this.props.match.params.name);
		console.log(DogsAPI.get);
		console.log(dog.qualities)
		return (
			<div>
				<NavBar />
				<div className="container">				
					<h1>{dog.name}</h1>				
					
					{
						dog.qualities.map(q => (
							<li>{q}</li>
							))
					}
								
				</div>
			</div>
			)
	}
}

export default DogDetails;
























