// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
      this.game.stage.backgroundColor = '#999999';
      this.game.load.image('assets/tp.png');
      this.game.load.image('assets/ramos.png');
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game    
    },
    
    update: function() {
		// Function called 60 times per second
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 
