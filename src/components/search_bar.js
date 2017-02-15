import React, { Component } from 'react';

class SearchBar extends Component {

	
	constructor(props) {
		super(props);
		this.state = {term: ''};
	}

	handleInputChange(e){
			this.setState({term: e.target.value});
		}

	render(){

		return (
			<div>
				<input onChange={this.handleInputChange.bind(this)} />

			</div>
			);
	}

}

export default SearchBar;