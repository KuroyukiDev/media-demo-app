const displayContent = require('./display-content');
var action = require('./actions');
var music;
var video;
var intv;

window.onload = () => {
	var ap = displayContent.makeAP();
	var vp = displayContent.makeVP();
	document.querySelector('#audio-player').appendChild(ap);
	document.querySelector('#video-player').appendChild(vp);
	music = document.querySelector('#ap');
	video = document.querySelector('#vp');
	
	
	document.querySelector('#audioplay').addEventListener('click', function() {
		music.play();
		document.querySelector('#outAudioDuration').innerHTML = Math.round(music.duration);
		intv = setInterval(displayTime, 500);
	});
	
	document.querySelector('#audiopause').addEventListener('click', function() {
		music.pause();
	});
	
	document.querySelector('#audiostop').addEventListener('click', function() {
		music.pause();
		music.currentTime = 0;
	});
	
	document.querySelector('#audioreset').addEventListener('click', function() {
		music.pause();
		music.currentTime = 0;
		music.play();
	});
	
	$('#audioVol').on("slidestop", function() {
		var vol = document.querySelector('#audioVol').value;
		action.volCtrl(vol, music);
	});
	
	
	document.querySelector('#videoplay').addEventListener('click', function() {
		video.play();
	});
	
	document.querySelector('#videopause').addEventListener('click', function() {
		video.pause();
	});
	
	document.querySelector('#videostop').addEventListener('click', function() {
		video.pause();
		video.currentTime = 0;
	});
	
	document.querySelector('#videoreset').addEventListener('click', function() {
		video.pause();
		video.currentTime = 0;
		video.play();
	});
	
	$('#videoVol').on("slidestop", function() {
		var vol = document.querySelector('#videoVol').value;
		action.volCtrl(vol, video);
	});
}

var displayTime = function(e) {
	document.querySelector('#curAudioPos').innerHTML = Math.round(music.currentTime);
};