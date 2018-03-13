import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './components/app';
import Dogs from './components/dogs';
import DogDetails from './components/dog-details';
import Books from './components/books';
import Snacks from './components/snacks';
import BookList from './components/book-list';


ReactDOM.render(
<BrowserRouter>
			<div>			
				<Switch>
					<Route path="/books2" component={BookList} />
					<Route path="/snacks" component={Snacks} />
					<Route path="/dogs/:name" component={DogDetails} />
					<Route path="/books" component={Books} />
					<Route path="/dogs" component={Dogs} />
					<Route path="/" component={App} />
				</Switch>
			</div>
		</BrowserRouter>, document.getElementById('root'));

