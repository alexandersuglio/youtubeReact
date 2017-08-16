//Create a new component. This component should produce some HTML

//React, please take this component's generated HTML and put it on the page in the DOM 
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyCKDNovzcP-FePzlpJ8iTHhexhT1NS9jNM';

class App extends Component {

	constructor(props){
	super(props);
	this.state = {
		searchObject: [],
		selectedVideo: null
	};

	//  YTSearch({key: API_KEY, term: 'vaporwave'}, (dogs) => {
	// this.setState({
	// 	dogs: dogs,
	// 	selectedVideo: dogs[2]
	};
	// console.log(dogs);



	// YTSearch({key: API_KEY, term: 'pug party'}, (data) => {
	// this.setState({videos: data});

	videoSearch(term) {


	 YTSearch({key: API_KEY, term: term}, (responseData) => {
		this.setState({
			searchObject: responseData,
			selectedVideo: responseData[0]
			});
		});

	}

	render() {


const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

		return(
	 
			<div>
				<SearchBar onSearchTermChange = {videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />  
				<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	 			videos={this.state.searchObject} />

			</div>
		);
	}
}



ReactDOM.render(
	<App />
	, document.querySelector('#reactHere'));