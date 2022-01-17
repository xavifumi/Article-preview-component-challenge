let bubble = document.getElementById('shareBubble');

window.onload = bubble.style.bottom = '135px';

function shareBtn(){

    bubble.style.opacity === "1"? bubble.style.opacity = '0':  bubble.style.opacity = '1';
    bubble.style.bottom === "135px"? bubble.style.bottom = '140px': bubble.style.bottom = '135px';
}