'use strict';

const mouseBox = document.querySelector('.mouse-box');
const xText = document.querySelector('.x');
const yText = document.querySelector('.y');
const infoBox = document.querySelector('.info');
const clickStatus = document.querySelector('.click-status');
const scroll = document.querySelector('.scroll');

//mouse position
function getMousePosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const rect = mouseBox.getBoundingClientRect();
    xText.innerText = mouseX;
    yText.innerText = mouseY;
    infoBox.style.top = `${(mouseY - rect.top - 105)}px`;
    infoBox.style.left = `${(mouseX - rect.left - 10)}px`;
}
mouseBox.addEventListener('mousemove', getMousePosition);

//mouse click
let mouseIsClicked = false;
function updateClickStatus() {
    if (mouseIsClicked) {
        clickStatus.innerText = 'Clicked';
    } else {
        clickStatus.innerText = 'Not clicked';
    }
}
mouseBox.addEventListener('mousedown', () => {
    mouseIsClicked = true;
    updateClickStatus();
});
mouseBox.addEventListener('mouseup', () => {
    mouseIsClicked = false;
    updateClickStatus();
});

//scroll
function scrollEvent(event) {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
        scroll.innerText = 'down';
    }
    else if (deltaY < 0) {
        scroll.innerText = 'up';
    }
}
mouseBox.addEventListener('wheel', scrollEvent);