import React, { Component } from 'react';
import NavBar from './nav';
// import { Link } from 'react-router-dom';

const snacks = [
	{name: "Chocolate", image: "http://www.publicdomainpictures.net/pictures/40000/velka/cupcake-clipart.jpg"},
	{name: "Nuts", image: "http://www.publicdomainpictures.net/pictures/40000/velka/cupcake-clipart.jpg"},
	{name: "Fruit", image: "http://www.publicdomainpictures.net/pictures/40000/velka/cupcake-clipart.jpg"},
	{name: "Toast", image: "http://www.publicdomainpictures.net/pictures/40000/velka/cupcake-clipart.jpg"},
]

const stylesForImg = {
	maxHeight: "50px"
}

class Snacks extends Component {
	render() {
		console.log(snacks);
		return (
			<div>
				<NavBar />
				<div className="container-fluid">
					<div className="card mt-5 col-md-6">
						<h4 className="card-header">Snacks</h4>
						<div className="card-block">
							
							<ul className="list-group">
								{
								snacks.map(snack => (
									<li className="list-group-item">
										<h4>{snack.name}</h4>
										<img src={snack.image} style={stylesForImg} className="float-right"></img>
									</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Snacks;