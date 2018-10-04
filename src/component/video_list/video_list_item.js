import React from 'react';

const VideoListItem = (props) => {
	
	// console.log(props.video)
	const imgURL = props.video.snippet.thumbnails.default.url;
	const title = props.video.snippet.title;

	return (
		<li>
			<div className="video-list media">
				<div className="media-left">
					<img src={imgURL} alt="alt" />
				</div>
				<div className="media-body">
					{title}
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;