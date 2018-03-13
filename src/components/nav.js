import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
	background: '#d4edf7'
}

class NavBar extends Component {
	render() {
		return (
			<div>
			<nav className="navbar navbar-default" style={styles}>
				<ul className="nav">
				<Link className="navbar-brand" to="/">Home</Link>
				  <li className="nav-item">
				    <Link className="nav-link" to="/dogs">Dogs</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link" to="/books">Books</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link" to="/snacks">Snacks</Link>
				  </li>
				</ul>
				</nav>
			</div>
			)
	}
}

export default NavBar;