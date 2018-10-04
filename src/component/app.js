import React, { Component } from 'react';
import SearchBar from './search/search_bar';
import VideoList from './video_list/video_list';
import VideoDetail from './video_detail/video_detail';
import YoutubeSearch from 'youtube-api-search';
import _ from 'lodash';

// require('dotenv').config();
const API_KEY = 'AIzaSyBQuTbNj_QTHYCblz9ZJXNYMF8sF8fYcVk';
// const API_KEY = process.env.youtubeAPI;

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedVideo: null,
			videos: [],
		}
		this.videoSearch('hello');
	}

	videoSearch(term) {
		YoutubeSearch({ key: API_KEY, term: term }, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0],
				term: null
			}); 
			// console.log(this.state.videos)
		})
	}

	render() {
		const videoSearch = _.debounce( term => { this.videoSearch(term) }, 500);
		return (
			<div>
				<h1 className="title">React with Youtube API</h1>
				<SearchBar onSearchTermChange = { videoSearch }/>
				<div className="row">
					<VideoDetail video = {this.state.selectedVideo} />
					<VideoList 
						onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
						videos = {this.state.videos} 
						/>
				</div>
			</div>
		)
	}
}

