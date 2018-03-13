import React, { Component } from 'react';
import Book from './book';
import BookForm from './form';
import NavBar from './nav';

const bookList = [
	{title: "Wild Swans", author: "Jung Chang", rating: 10}, 
	{title: "My Brilliant Friend", author: "Elena Ferrante", rating: 10}, 
	{title: "The Fountain Overflows", author: "Rebecca West", rating: 7}, 
	{title: "It", author: "Stephen King", rating: 9}, 
	{title: "The Power", author: "Naomi Alderman", rating: 6}, 
	{title: "We Have Always Lived in the Castle", author: "Shirley Jackson", rating: 8}, 
	{title: "Perdido Street Station", author: "China Mieville", rating: 10}, 
	{title: "The Unwelcome Guest", author: "Edward Gorey", rating: 10}
];

class BookList extends Component {
	constructor() {
		super();
		this.state = {
			hidden: true
		}
	}

	showForm() {
		console.log("clicked");
		this.setState({ hidden: !this.state.hidden })
	}

	renderBooks() {
		return bookList.map(book => (
			<Book title={book.title} author={book.author} />
			))
	}

	render () {
		return (
				<div>
					<NavBar />
					<div className="container">
						<h3>Books in no particular order:</h3>
						<button className="btn btn-primary"  onClick={this.showForm.bind(this)}>New Book</button>
						<div className="row">
							<div>
								{this.renderBooks()}
							</div>
						{!this.state.hidden && <BookForm />}
						</div>
					</div>	
				</div>
			)
	}
}

export default BookList;