//Run the animation of images, referred from chatgpt: how to code javascript: loading one image after another
//When button below pokeball is clicked, function startLoop() will be looping several images to show the pokeball moving - this will act as an animation. The last image will show Togepi welcoming the user.

//set array of images
const imageUrls = ['pokeball_center.png', 'pokeball_tilt_left.png', 'pokeball_tilt_right.png', 'pokeball_semi_open.png', 'togepi_appearing.png', 'togepi_welcome.png','togepi_welcome.png'];
let currentIndex = 0;
const image = document.getElementById('image');
let intervalId;

//make a loop for welcome "animation"
function startLoop() {
  currentIndex = 0;
  intervalId = setInterval(() => {
    image.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
    if (currentIndex === imageUrls.length -1) {
      clearInterval(intervalId);
    }
  }, 1000);
}

window.onload = startLoop();

// Get the button elements
const modal1Btn = document.getElementById('modal1-btn');
const modal2Btn = document.getElementById('modal2-btn');

// Get the modal elements
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');

// Get the close button elements
const closeBtns = document.querySelectorAll('.close');

// Add event listeners to the button elements
modal1Btn.addEventListener('click', () => {
  modal1.style.display = 'block';
});

modal2Btn.addEventListener('click', () => {
  modal2.style.display = 'block';
});

// Add event listeners to the close button elements
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Hide the modal when the close button is clicked
    modal1.style.display = 'none';
    modal2.style.display = 'none';
  });
});
// var modal = document.getElementById("modal1");
// var modal2 = document.getElementById("modal2");
// // Get the button that opens the modal
// var btn = document.getElementById("modal1-btn");
// var btn2 = document.getElementById("modal2-btn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // var span2 = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// btn2.onclick = function() {
//   modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // span2.onclick = function() {
// //   modal2.style.display = "none";
// // }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 ) {
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
}

// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }