const displayContent = require('./display-content');
var action = require('./actions');

window.onload = () => {
	var ap = displayContent.makeAP();
	var vp = displayContent.makeVP();
	document.querySelector('#audio-player').appendChild(ap);
	document.querySelector('#video-player').appendChild(vp);
	var music = document.querySelector('#ap');
	var video = document.querySelector('#vp');
	
	document.querySelector('#audioplay').addEventListener('click', function() {
		music.play();
	});
	
	document.querySelector('#audiopause').addEventListener('click', function() {
		music.pause();
	});
	
	document.querySelector('#audioreset').addEventListener('click', function() {
		music.pause();
		music.currentTime = 0;
		music.play();
	});
	
	$('#audioVol').on("change", function() {
		var vol = document.querySelector('#audioVol').value;
		action.volCtrl(vol, music);
	});
	
	
	document.querySelector('#videoplay').addEventListener('click', function() {
		video.play();
	});
	
	document.querySelector('#videopause').addEventListener('click', function() {
		video.pause();
	});
	
	document.querySelector('#videoreset').addEventListener('click', function() {
		video.pause();
		video.currentTime = 0;
		video.play();
	});
	
	$('#videoVol').on("change", function() {
		var vol = document.querySelector('#videoVol').value;
		action.volCtrl(vol, video);
	});
}

