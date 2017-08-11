import React, {Component} from 'react';

class SearchBar extends Component{

constructor(props){
super(props);

this.state = {term: " "};
}



render() {
return (
<div>
<h1> Enter a value below! </h1>

<input 
value={this.state.term}
onChange={event => this.setState({term: event.target.value})} 
/>

</div>
	);
}

}

export default SearchBar;