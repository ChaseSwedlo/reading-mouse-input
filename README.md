## Reading mouse inputs using JavaScript
In this tutorial you will see how to read certain elements of the users mouse including position, scoll, and click. All three of these are done using ```EventListener``` in JS.

### Demo
Click [here](https://chaseswedlo.github.io/reading-mouse-input/) to see a demo of these 3 functions.

#### Cursor Position
```javascript
function getMousePosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    console.log(`X:${mouseX}`);
    console.log(`Y:${mouseY}`);
}
document.body.addEventListener('mousemove', getMousePosition);
```
This function uses the event ```'mousemove'``` to allow us to access ```clientX``` and ```clientY```. We then console log the X and Y coordinates if the mouse is moved on the page. In the [demo](https://chaseswedlo.github.io/reading-mouse-input/), it only tracks inside the center box which is done by replacing ```document.body``` with your container.

#### Mouse Click
To display if the mouse is clicked we need to use 2 ```EventListener``` and 1 function. First off we have our fucntion to output the status of the click.
```javascript
let mouseIsClicked = false;
function updateClickStatus() {
    if (mouseIsClicked) {
        console.log('Clicked');
    } else {
        console.log('Not clicked');
    }
}
```
Lastly we have our 2 EventListeners ```'mousedown'``` and ```'mouseup'``` which call ```updateClickStatus()``` and our toggle Boolean ```mouseIsClicked```.
```javascript
document.body.addEventListener('mousedown', () => {
    mouseIsClicked = true;
    updateClickStatus();
});
document.body.addEventListener('mouseup', () => {
    mouseIsClicked = false;
    updateClickStatus();
});
```
Replace ```console.log``` with your desired outputs to achive similar results as the [demo](https://chaseswedlo.github.io/reading-mouse-input/).

### Scroll
To get whether we are scrolling up/down we use a function to check if the change in the event ```'wheel'``` is positive or negative. In the function below, we get ```deltaY``` which returns to us the change in scroll with a +/- number. If we check if the number is > or < 0 we can tell if the user is scrolling up or down.
```javascript
function scrollEvent(event) {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
        console.log('down');
    } else if (deltaY < 0) {
        console.log('up');
    }
}
document.body.addEventListener('wheel', scrollEvent);
```