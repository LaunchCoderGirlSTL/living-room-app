import React, { Component } from 'react';

const stylesForImg = {
	maxHeight: "50px",
	marginBottom: "10px" 
}

const stylesForTitle = {
	marginLeft: "5px"
}


class Book extends Component {

	render() {
		return (
			<div>
			<li className="list-group-item">				
				<div style={stylesForTitle}>
					<h4 className="list-group-item-header">{this.props.title}</h4>
					<p className="list-group-item-text">{this.props.author}</p>
				</div>							
				<span className=""><img className="" src="../book2.png" style={stylesForImg}></img></span>
			</li>
			</div>			
			)
	}
}

export default Book;