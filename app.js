var stopButton = document.getElementById("stopButton");
var readyButton = document.getElementById("readyButton");
var goButton = document.getElementById("goButton");

function Stop() {
    resetLights();
    document.getElementById('stopButton').classList.add('active');
}


function ReadyToGo() {
    resetLights();
    document.getElementById('readyButton').classList.add('active');
}

function Go() {
    resetLights();
    document.getElementById('goButton').classList.add('active');
}

function resetLights() {
    document.getElementById('stopButton').classList.remove('active');
    document.getElementById('readyButton').classList.remove('active');
    document.getElementById('goButton').classList.remove('active');
}



