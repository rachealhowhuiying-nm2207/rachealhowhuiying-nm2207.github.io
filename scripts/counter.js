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
const modal3Btn = document.getElementById('modal3-btn');
const modal4Btn = document.getElementById('modal4-btn');
const modal5Btn = document.getElementById('modal5-btn');
const modal6Btn = document.getElementById('modal6-btn');
const modal7Btn = document.getElementById('modal7-btn');
const modal8Btn = document.getElementById('modal8-btn');

// Get the modal elements
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const modal5 = document.getElementById('modal5');
const modal6 = document.getElementById('modal6');
const modal7 = document.getElementById('modal7');
const modal8 = document.getElementById('modal8');

// Get the close button elements
const closeBtns = document.querySelectorAll('.close');

// Add event listeners to all button elements. 
//"Block" prevents HTML elements from being displayed on the sides of the modal boxes.
modal1Btn.addEventListener('click', () => {
  modal1.style.display = 'block';
});
modal2Btn.addEventListener('click', () => {
  modal2.style.display = 'block';
});
modal3Btn.addEventListener('click', () => {
  modal3.style.display = 'block';
});
modal4Btn.addEventListener('click', () => {
  modal4.style.display = 'block';
});
modal5Btn.addEventListener('click', () => {
  modal5.style.display = 'block';
});
modal6Btn.addEventListener('click', () => {
  modal6.style.display = 'block';
});
modal7Btn.addEventListener('click', () => {
  modal7.style.display = 'block';
});
modal8Btn.addEventListener('click', () => {
  modal8.style.display = 'block';
});

// Add event listeners to the close button elements
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Hide the modal when the close button is clicked
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';
    modal7.style.display = 'none';
    modal8.style.display = 'none';
  });
});

// When the user clicks anywhere outside of the modal, the modal box can be closed
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 ) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';
    modal7.style.display = 'none';
    modal8.style.display = 'none';
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
          max: 150}
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

//johto: umbreon
var umbreonChart = document.getElementById('johtoRadarChart').getContext('2d');
const umbreonData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Umbreon',
    data: [95,65,110,60,130,65],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(umbreonChart,
{
    type: "radar",
    data: umbreonData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Umbreon's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});

//hoenn: rayquaza
var rayquazaChart = document.getElementById('hoennRadarChart').getContext('2d');
const rayquazaData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Rayquaza',
    data: [105,150,90,150,90,95],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(rayquazaChart,
{
    type: "radar",
    data: rayquazaData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Rayquaza's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});

//sinnoh: lucario
var lucarioChart = document.getElementById('sinnohRadarChart').getContext('2d');
const lucarioData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Lucario',
    data: [70,110,70,115,70,90],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(lucarioChart,
{
    type: "radar",
    data: lucarioData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Lucario's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});

//unova: chandelure
var chandelureChart = document.getElementById('unovaRadarChart').getContext('2d');
const chandelureData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Chandelure',
    data: [60,55,90,145,90,80],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(chandelureChart,
{
    type: "radar",
    data: chandelureData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Chandelure's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});

//kalos: greninja
var greninjaChart = document.getElementById('kalosRadarChart').getContext('2d');
const greninjaData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Greninja',
    data: [72,95,67,103,71,122],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(greninjaChart,
{
    type: "radar",
    data: greninjaData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Greninja's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});

//alola: mimikyu
var mimikyuChart = document.getElementById('alolaRadarChart').getContext('2d');
const mimikyuData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Mimikyu',
    data: [55,90,80,50,105,96],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(mimikyuChart,
{
    type: "radar",
    data: mimikyuData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Mimikyu's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});

//galar: dragapult
var dragapultChart = document.getElementById('galarRadarChart').getContext('2d');
const dragapultData = {
  labels: ['HP','Attack','Defence','Sp. Atk','Sp. Def','Speed'],
  datasets: [{
    label: 'Dragapult',
    data: [88,120,75,100,75,142],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(dragapultChart,
{
    type: "radar",
    data: dragapultData,
    options: { 
      scale: {
        ticks: {
          beginAtZero: true,
          max: 150}
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text:"Dragapult's Base Stats",
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(100,20,0)',
        }
    }
});