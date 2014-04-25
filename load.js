var load_state = {
    preload: function() {
        this.game.stage.backgroundColor = '#333333';
    },
    
    create: function(){
        this.game.state.start('menu');
    }
};