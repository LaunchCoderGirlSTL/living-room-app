import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './nav';
import Dogs from './dogs';
import Books from './books';

class App extends Component {
	
	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<h1 className="">Welcome to my living room app.</h1>
					<div className="jumbotron">
						<h1 className="display-4">Hello, class!</h1>
  					<p className="lead">This is a simple app that lists out things I can see from where I am sitting.</p>
  					<hr className="my-4"></hr>
  					<p>This grey box you are looking at is a Bootstrap class called "jumbotron". It is used to call attention to important information in your app.</p>
  					<p className="lead">
  					  <a className="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.0/components/jumbotron/" target="_blank" role="button">Learn more</a>
  					</p>
					</div>
					<div className="row">
  					<div className="col-sm-4">
  					  <div className="card border-dark">
  					    <div className="card-body">
  					      <h5 className="card-title">Dogs</h5>
  					      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  					      <Link to={'/dogs'} className="btn btn-warning">Dogs</Link>
  					    </div>
  					  </div>
  					</div>
  					<div className="col-sm-4">
  					  <div className="card text-center border-dark">
  					    <div className="card-body">
  					      <h5 className="card-title">Books</h5>
  					      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  					      <Link to={'/books'} className="btn btn-danger">Books</Link>
  					    </div>
  					  </div>
  					</div>
  					<div className="col-sm-4">
  					  <div className="card text-right border-dark">
  					    <div className="card-body">
  					      <h5 className="card-title">Snacks</h5>
  					      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  					      <Link to={'/snacks'} className="btn btn-success">Books</Link>
  					    </div>
  					  </div>
  					</div>
					</div>
											
				</div>
			</div>
		);
	}
}



export default App;

