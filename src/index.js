import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBwRtMv0WN-3VJyCbzBd2AAtK-t3HBxJ10';


class App extends Component {	

	constructor(props) {
		super(props);
		
		this.state = { videos : [] };

		YTSearch({key: API_KEY, term: 'perth travel'}, (videos) => {
			this.setState({videos});
		});
	}


	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));