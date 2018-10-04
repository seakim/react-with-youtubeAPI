import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const VideoItems = props.videos.map( video => {
		return <VideoListItem key = {video.etag} video = {video} />
	});
	
	return (
		<div className="row">
			<ul className="col s4">
				{VideoItems}
			</ul>
		</div>
	)
}

export default VideoList;