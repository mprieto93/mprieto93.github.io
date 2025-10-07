function turnOn(){
    document.getElementById('myImage').src='./images/pic_bulbon.gif';
    document.querySelector('#myMessage').innerHTML='The light is turn On';
    document.querySelector('.myMessage').innerHTML='The light is turn On - CLASS';
}

function turnOff(){
    document.getElementById('myImage').src='./images/pic_bulboff.gif';
    document.getElementById('myMessage').innerHTML='The light is turn off';
    document.querySelector('.myMessage').innerHTML='The light is turn off - CLASS';
}