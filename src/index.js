//Create a new component. This component should produce some HTML

//React, please take this component's generated HTML and put it on the page in the DOM 

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyCKDNovzcP-FePzlpJ8iTHhexhT1NS9jNM';


const App = () => {
	return (<div> 


<SearchBar />

	</div>);

}

ReactDOM.render(
	<App />
	, document.getElementById('reactHere'));