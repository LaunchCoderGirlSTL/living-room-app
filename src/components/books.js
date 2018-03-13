import React, { Component } from 'react';
import NavBar from './nav';
import BookForm from './form';

const books = [
	{title: "Wild Swans", author: "Jung Chang", rating: 10}, 
	{title: "My Brilliant Friend", author: "Elena Ferrante", rating: 10}, 
	{title: "The Fountain Overflows", author: "Rebecca West", rating: 7}, 
	{title: "It", author: "Stephen King", rating: 9}, 
	{title: "The Power", author: "Naomi Alderman", rating: 6}, 
	{title: "We Have Always Lived in the Castle", author: "Shirley Jackson", rating: 8}, 
	{title: "Perdido Street Station", author: "China Mieville", rating: 10}, 
	{title: "The Unwelcome Guest", author: "Edward Gorey", rating: 10}
]

const stylesForImg = {
	maxHeight: "50px",
	marginBottom: "10px" 
}

const stylesForTitle = {
	marginLeft: "5px"
}


class Books extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			hidden: true
		}
	}

	handleClick() {
		console.log("clicked");
		this.setState({ hidden: !this.state.hidden })
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<h3>Books in no particular order:</h3>
					<button className="btn btn-primary"  onClick={this.handleClick.bind(this)}>New Book</button>
					
					<div className="row">
						<div>
						{books.map(book => (
							<li className="list-group-item">
								
									<div style={stylesForTitle}>
										<h4 className="list-group-item-header">{book.title}</h4>
										<p className="list-group-item-text">{book.author}</p>
									</div>							
										<span className=""><img className="" src="../book2.png" style={stylesForImg}></img></span>
										
															
							</li>	
						))}
						</div>
					{!this.state.hidden && <BookForm />}
					</div>
				</div>	
			</div>
			)
			
		
	}
}

export default Books;