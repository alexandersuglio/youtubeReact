import React from 'react';

// const VideoListItem = (props) => {
// const video = props.video;
// return <li>Video</li>

// };

const VideoListItem = ({video, onVideoSelect}) => {
	// console.log(video);
	// const video = props.video;
	// const onVideoSelect = props.onVideoSelect;

	const imageURL = video.snippet.thumbnails.default.url;
const title = video.snippet.title;
return( 
	<li onClick={() => onVideoSelect(video)} className="list-group-item"> 

		<div className="video-list media">

			<div className="media-body">
				<div className="media-heading">
				{title}
				</div>

			</div>
			
			<div className="media-left">

				<img className="media-object" src={imageURL} />
			</div>

		</div>
	</li>
);
};

export default VideoListItem; 