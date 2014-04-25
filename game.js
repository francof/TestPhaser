// Initialize Phaser
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

var score = 0;

game.state.add('play', play_state);  

game.state.start('play');