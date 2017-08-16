import React from 'react';

const VideoDetail = ({video}) => {

if (!video) {

//filler
	return <div>
	</div>;
}

else {
const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;

var divStyle = {
	backgroundColor: 'rgba(255, 89, 89, 0.6)',
	padding: "50px"
};

return(

	<div className="video-detail col-md-8" style={divStyle}>
	<h2> Video Viewer </h2>
	<div>TITLE: {video.snippet.title}</div>

	<div className="embed-responsive embed-responsive-16by9">
	<iframe className="embed-responsive-item" src={url} ></iframe>
	</div>
	<div classNamec='details'>

	<div><i>VIDEO DESCRIPTION: {video.snippet.description}</i></div>
</div>
</div>

	)
}
};

export default VideoDetail;