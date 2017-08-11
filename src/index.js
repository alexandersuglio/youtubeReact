//Create a new component. This component should produce some HTML

//React, please take this component's generated HTML and put it on the page in the DOM 

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCKDNovzcP-FePzlpJ8iTHhexhT1NS9jNM';

class App extends Component {

constructor(props){
super(props);
this.state = {dogs: []};

 YTSearch({key: API_KEY, term: 'pug party'}, (dogs) => {
this.setState({dogs});
// console.log(dogs);
// YTSearch({key: API_KEY, term: 'pug party'}, (data) => {
// this.setState({videos: data});

});

}

render() {

return(

<div>
<SearchBar />
<VideoList videos={this.state.dogs} />
</div>
	);
}

}

ReactDOM.render(
	<App />
	, document.querySelector('#reactHere'));