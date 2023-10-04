// Adding Event Listners to the boxes
const boxes = document.querySelectorAll(".color-box");

function changeBackgroundColor(event) {
     const boxColor = window.getComputedStyle(event.target).backgroundColor; // Extracting background color 
     document.body.style.backgroundColor = boxColor;
}
// After DOM is loaded
function colorChage() {
      boxes.forEach(function (box) {
          box.addEventListener("click",changeBackgroundColor);  
      });
}
window.addEventListener("DOMContentLoaded",colorChage);