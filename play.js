var play_state = {
    tileSize:32,
    colors: [0xAABBCC, 0x440011, 0xFFEA00],
    preload: function() {
        this.game.stage.backgroundColor = '#333333';
    },
    
    create: function(){
        this.generateBackground(384,480);
        //this.game.state.start('menu');
    },
    
    generateBackground: function(width, height){
        var tilesHorizontal = Math.floor(width/this.tileSize);
        var tilesVertical = Math.floor(height/this.tileSize);
        console.log(tilesHorizontal);
        console.log(tilesVertical);
        for(var i=0;i<tilesVertical;i++){
            for(var j=0;j<tilesHorizontal;j++){
                if (Phaser.Math.randomSign() > 0){
                    this.drawTile(j*this.tileSize,i*this.tileSize);
                }
            }
        }
    },
    drawTile: function(x,y){
        //Get a random color
        color = Phaser.Math.getRandom(this.colors);
        var shape = this.game.add.graphics(x,y);
        shape.lineStyle(1, 0x444444, 1);
        shape.beginFill(color, 1);
        shape.drawRect(0,0,32,32);
    }
    //Hola, hay alguien leyendo?
    
};