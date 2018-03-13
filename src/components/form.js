import React, { Component } from 'react';

class BookForm extends Component {
	handleSubmit(event) {
		event.preventDefault();
		console.log("submitted");
		console.log(this.title.value);
	}


	render() {
		return (
			<div>
				<form className="offset-md-1" onSubmit={this.handleSubmit.bind(this)}>
				  <div className="form-group">
				    <label>Title</label>
				    <input type="text" className="form-control" placeholder="Enter Boook Title"></input>
				  </div>
				  <div className="form-group">
				    <label>Author</label>
				    <input type="text" className="form-control" placeholder="Enter Author Name"></input>
				  </div>
				  <div className="form-check">
				    <input type="checkbox" className="form-check-input"></input>
				    <label className="form-check-label">Checkbox. It does nothing. This whole form does nothing, actually.</label>
				  </div>
				  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default BookForm;