// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
      this.game.stage.backgroundColor = '#999999';
      this.game.load.image('tp','assets/tp.png');
        this.game.load.audio('hit','assets/Hit_Hurt5.wav');

    },

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.tpGroup = this.game.add.group();
        this.hitSound = this.game.add.audio('hit');
        for(var i = 0; i < 30; i++)
        {
            var tp = genRandomTp();
            this.game.physics.arcade.enableBody(tp);
            tp.body.velocity.x = this.game.rnd.integerInRange(-100,100);
            tp.body.velocity.y = this.game.rnd.integerInRange(-100,100);
            tp.body.collideWorldBounds = true;
            tp.body.bounce.x = 1;
            tp.body.bounce.y = 1;
            tp.body.minBounceVelocity = 0;
            tp.inputEnabled = true;
            tp.input.useHandCursor = true;
            this.tpGroup.add(tp);
            

        }
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.tpGroup);
        var that = this;
        this.tpGroup.forEach(function(sprite){
            if (sprite.input.pointerDown(that.game.input.activePointer.id)){
                //that.game.stage.backgroundColor = '#ACBACC';
                that.hitSound.play();
                sprite.kill();
            } 
        });
        for (var i = 0; i < this.tpGroup.size; i++){
            
        }

    },
}

var genRandomTp = function(){
    var x = this.game.rnd.integerInRange(100,400);
    var y = Math.random()*490;
    var ret = this.game.add.sprite(x,y,'tp');
    return ret;
}

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main');
