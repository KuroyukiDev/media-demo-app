//let vars = require('./vars');

var play = function(player) {
	player.play();
};

var pause = function(player) {
	player.pause();
};

var reset = function(player) {
	player.pause();
	player.currentTime = 0;
};

var volControl = function(vol, player) {
	console.log(vol);
	player.volume = vol;
};

module.exports = {
	play: play,
	pause: pause,
	reset: reset,
	volCtrl: volControl
};