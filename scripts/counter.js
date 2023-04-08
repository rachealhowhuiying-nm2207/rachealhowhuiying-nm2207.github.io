//Run the animation of images, referred from chatgpt: how to code javascript: loading one image after another
//When button below pokeball is clicked, function startLoop() will be looping several images to show the pokeball moving - this will act as an animation. The last image will show Togepi welcoming the user.

//set array of images
const imageUrls = ['pokeball_semi_open.png', 'togepi_appearing.png', 'togepi_welcome.png','togepi_welcome.png'];
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

//make a modal box for each region image

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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 ) {
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
}

//Use chartjs to make a radar chart for each pokemon, 
//referred from: https://www.chartjs.org/docs/latest/charts/radar.html and week 9 class work

//kanto: charizard
var charizardChart = document.getElementById('kantoRadarChart').getContext('2d');
const charizardData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Charizard',
    data: [78,84,78,109,85,100],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(charizardChart,
{
    type: "radar",
    data: charizardData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 110}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Charizard's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});