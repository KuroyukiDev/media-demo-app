console.log('display-content.js ran successfully.');

var vars = require('./vars');

var createPlayerTitle = function(title) {
	var pt = document.createElement('h3');
	pt.setAttribute('class', 'text-center');
	pt.textContent = title;
	return(pt);
};

var createAudioPlayer = function() {
	var apdiv = document.createElement('div');
	var ap = document.createElement('audio');
	var apsrc = document.createElement('source');
	
//	ap.setAttribute('controls', 'controls');
	ap.setAttribute('id', 'ap');
	apsrc.setAttribute('src', vars.media.music.url);
	ap.appendChild(apsrc);
	
	apdiv.appendChild(createPlayerTitle(vars.media.music.title));
	apdiv.appendChild(ap);
	
	return(apdiv);
};

var createVideoPlayer = function() {
	var vpdiv = document.createElement('div');
	var vp = document.createElement('video');
	var vpsrc = document.createElement('source');
	
	vp.setAttribute('height', '245px');
	vp.setAttribute('width', '95%');
	vp.setAttribute('id', 'vp');
	vpsrc.setAttribute('src', vars.media.vid.url);
	vp.appendChild(vpsrc);
	vpdiv.appendChild(createPlayerTitle(vars.media.vid.title));
	vpdiv.appendChild(vp);
	return(vp);
};

module.exports = {
	makeAP: createAudioPlayer,
	makeVP: createVideoPlayer
}