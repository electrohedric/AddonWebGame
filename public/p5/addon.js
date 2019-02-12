const DEV = false;

var socket;
var lastMouseX;
var lastMouseY;

// called once when the script is loaded
function setup() {
    createCanvas(780, 480);
    background(250); // off white
    
    if(DEV) {
        socket = io.connect("http://localhost:8000");
    } else {
        socket = io.connect("https://addonwebgame.herokuapp.com/");
    }
    if(socket != null) {
        socket.on('otherMouse', drawOther);
        console.log("connected to server successfully");
    }
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}

function segment(x1, y1, x2, y2, color) {
    stroke(color);
    strokeWeight(4);
    line(x1, y1, x2, y2)
}

function drawOther(data) {
    segment(data.x, data.y, data.lx, data.ly, 60);
}

// called whenever the mouse is dragged (mouse button is down)
function mouseDragged() {
    segment(mouseX, mouseY, lastMouseX, lastMouseY, 50);
    socket.emit('mouseUpdate', {x: mouseX, y: mouseY, lx: lastMouseX, ly: lastMouseY}); // send the mouse data to the server
}

// called every frame
function draw() {
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}