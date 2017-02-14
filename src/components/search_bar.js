import React, { Component } from 'react';

class SearchBar extends Component {

	handleInputChange(e){
			console.log(e.target.value);
		}

	render(){

		return (
			<input onChange={this.handleInputChange.bind(this)} />
			);
	}

}

export default SearchBar;