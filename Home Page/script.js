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

// Home-Button Feature
     // Adding an Event Listner to the Home-Button

const homeButton = document.getElementById("home-button");

function getToDefault() {
      document.body.style.backgroundColor = "white";
}
homeButton.addEventListener("click",getToDefault);

// About Button Functionality
const aboutButton = document.getElementById("about-button");

window.addEventListener("DOMContentLoaded",function() {
        aboutButton.addEventListener("click",function() {
              window.location.href = "../About Page/about.html" ;
        });
});