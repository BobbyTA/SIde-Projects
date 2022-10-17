const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,

};

window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = 384;
    canvasEl.height = 224;

    ;

context.strokeStyle = "yellow";
context.moveTo(0, 0);
context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
context.moveTo(GameViewport.WIDTH, 0);
context.lineTo(0,GameViewport.HEIGHT);
context.stroke();
    console.log(context);
}