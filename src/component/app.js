import React, { Component } from 'react';
import SearchBar from './search/search_bar';
import VideoList from './video_list/video_list';
import VideoDetail from './video_detail/video_detail';
import YoutubeSearch from 'youtube-api-search';

require('dotenv').config();
const API_KEY = 'AIzaSyBQuTbNj_QTHYCblz9ZJXNYMF8sF8fYcVk';
// const API_KEY = process.env.youtubeAPI;

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			videos: []
		}

		YoutubeSearch({ key: API_KEY, terms: 'react' }, videos => {

			// when key and the variables are the same
			this.setState({ videos }); 
			// === this.setState({ videos: videos }); 
			console.log(this.state.videos)
		})
	}

	render() {
		return (
			<div>
				<h1 className="center">React with Youtube API</h1>
				<SearchBar />
				<VideoDetail video = {this.state.videos[0]} />
				<VideoList videos = {this.state.videos} />
			</div>
		)
	}
}

