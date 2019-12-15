var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var middle = 250;
var position = middle;

function draw() {
    ctx.clearRect(0, 0, 500, 100);

    ctx.beginPath()
    ctx.moveTo(middle, 0);
    ctx.lineTo(middle, 100);
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = 'red';
    ctx.arc(position, 50, 5, 0, Math.PI * 2);
    ctx.fill()
}

draw()

function move(distance) {
    position = position + distance
    draw()
}

window.addEventListener('keydown', function (event) {
    event.preventDefault()

    if (event.key === 'ArrowRight') {
        move(10)
    }
    if (event.key === 'ArrowLeft') {
        move(-10)
    }
})

function checkWinner() {
    if (position > middle) {
        alert("Right Wins!");

    }
    if (position < middle) {
        alert("Left Wins!");
        
    }
    if (position === middle) {
        alert("It's a draw!");
  
    }
}

setTimeout(checkWinner, 10000)