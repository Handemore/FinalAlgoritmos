new p5(function(app){
    var logica;

    app.setup = function() {
        logica = new Logica(app);
        
    }
    app.draw = function() {
        logica.pintar();
    }
   app.keyPressed = function(){
        logica.keyPressed();
    }
    app.keyReleased = function(){
        logica.keySoltado();
    }
    app.mousePressed = function(){
        logica.mousePressed();
    }

});