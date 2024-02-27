let chartConfig = {
    gui: {
      // Remove the "Powered by ZingChart" logo and text
      footer: {
        text: '',
      },
      contextMenu: {
        backgroundColor: '#306EAA',
        button: {
          backgroundColor: '#2D66A4',
          lineColor: '#2D66A4',
          visible: false,
        },
        docked: false,
        gear: {
          alpha: 1,
          backgroundColor: '#2D66A4',
        },
        item: {
          backgroundColor: '#000',
          borderColor: '#306EAA',
          borderWidth: '0px',
          color: '#fff',
          fontFamily: 'Lato',
        },
        position: 'center',
      },
    },
    graphset: [
      {
        type: 'ring',
        backgroundColor: 'transparent',
        title: {
          // Remove the title and subtitle
          text: '',
          fontColor: '#1E5D9E',
          fontFamily: 'Lato',
          fontSize: '14px',
          padding: '15px',
          visible: false,
        },
        subtitle: {
          text: '',
          fontColor: '#000',
          fontFamily: 'Lato',
          fontSize: '12px',
          padding: '5px',
          visible: false,
        },
        legend: {
          // Remove the legend section
          visible: false,
        },
        plot: {
          tooltip: {
            text: '',
            anchor: 'c',
            backgroundColor: 'none',
            borderWidth: '0px',
            fontSize: '16px',
            visible: false,
            mediaRules: [
              {
                maxWidth: '500px',
                y: '54%',
              },
            ],
            sticky: false,
            thousandsSeparator: ',',
            x: '50%',
            y: '50%',
          },
          valueBox: [
            {
              type: 'all',
              text: '%npv%',
              placement: 'out',
              fontSize: '10px',
            },
            {
              type: 'all',
              text: '',
              placement: 'in',
            },
          ],
          animation: {
            effect: 'ANIMATION_EXPAND_VERTICAL',
            sequence: 'ANIMATION_BY_PLOT_AND_NODE',
          },
          backgroundColor: '#FBFCFE',
          borderWidth: '0px',
          hoverState: {
            cursor: 'hand',
          },
          slice: '60%',
        },
        plotarea: {
          // Remove the plotarea background color
          backgroundColor: 'transparent',
          margin: '70px 10px 10px 0px',
          borderRadius: '10px',
          borderWidth: '0px',
        },
        scaleR: {
          refAngle: 360,
        },
        series: [
          {
            text: 'Docs',
            values: [10497],
            backgroundColor: '#FF325E ',
            lineColor: '#00BAF2',
            lineWidth: '1px',
            marker: {
              backgroundColor: '#00BAF2',
            },
          },
          {
            text: '0.99',
            values: [4554],
            backgroundColor: '#7FC2F9',
            lineColor: '#E80C60',
            lineWidth: '1px',
            marker: {
              backgroundColor: '#E80C60',
            },
          },
          {
            text: 'Index',
            values: [1306],
            backgroundColor: '#079FCE',
            lineColor: '#9B26AF',
            lineWidth: '1px',
            marker: {
              backgroundColor: '#9B26AF',
            },
          },
          {
            text: '0.1',
            values: [189],
            backgroundColor: '#4EE2C0',
            lineColor: '#FFD700',
            lineWidth: '1px',
            marker: {
              backgroundColor: '#FFD700',
            },
          },
          {
            text: '1.55',
            values: [1763],
            backgroundColor: '#EF32FF',
            lineColor: '#32CD32',
            lineWidth: '1px',
            marker: {
              backgroundColor: '#32CD32',
            },
          },
          {
            text: 'courses',
            values: [75],
            backgroundColor: '#DCB337',
            lineColor: '#FF6347',
            lineWidth: '1px',
            marker: {
              backgroundColor: '#FF6347',
            },
            
          },
          
        ],
        noData: {
          text: 'No Selection',
          alpha: 0.6,
          backgroundColor: '#20b2db',
          bold: true,
          fontSize: '18px',
          textAlpha: 0.9,
        },
      },
    ],
  };
  
 
  // First instance of the chart
zingchart.render({
  id: 'myChart1',
  data: chartConfig,
  height: '100%',
  width: '100%',
});

// Second instance of the chart
zingchart.render({
  id: 'myChart2',
  data: chartConfig, // You can use the same or different configuration
  height: '100%',
  width: '100%',
});
  
// charts end
// fade left and right links section 
AOS.init();



//  popups design 

  var activePopupId = null;

function showDiv(popupId) {
  // Hide the active popup if there is one
  if (activePopupId) {
    hideDiv(activePopupId);
  }

  // Show the targeted popup
  var div = document.getElementById(popupId);
  if (div) {
    div.style.display = 'block';
    activePopupId = popupId;
  }
}

// Function to hide the popup
function hideDiv(popupId) {
  var div = document.getElementById(popupId);
  if (div) {
    div.style.display = 'none';
    activePopupId = null;
  }
}

//  // Function to show the popup
//  function showDiv(popupId) {
//   // Hide all popups
//   hideAllPopups();
  
//   // Show the targeted popup
//   var div = document.getElementById(popupId);
//   div.style.display = 'block';
// }

// // Function to hide the popup
// function hideDiv(popupId) {
//   var div = document.getElementById(popupId);
//   div.style.display = 'none';
// }

// // Function to hide all popups
// function hideAllPopups() {
//   var popups = document.querySelectorAll('.popup-inner');
//   popups.forEach(function(popup) {
//     popup.style.display = 'none';
//   });
// }


// landing popup 
{
// Function to show the landing popup
function showbox(popupboxId) {
  var div = document.getElementById(popupboxId);

  // Check the current display property
  var isHidden = window.getComputedStyle(div).display === 'none';

  // Toggle the display property based on the current state
  div.style.display = isHidden ? 'block' : 'none';
}

// function showbox(popupboxId) {
//   // Show the targeted popup
//   var div = document.getElementById(popupboxId);
//   div.style.display = 'block';
// }

function hidebox() {
  var popups = document.querySelectorAll('.landing-popup');
  popups.forEach(function(popupbox) {
    popupbox.style.display = 'none';
  });
}

function hideAllPopups() {
  var popups = document.querySelectorAll('.landing-popup');
  popups.forEach(function(popupbox) {
    popupbox.style.display = 'none';
  });
}
}


// popup container 
// function toggleContainer(containerId) {
//   var container = document.getElementById(containerId);
//   var allContainers = document.querySelectorAll('.showitem');

//   allContainers.forEach(function (otherContainer) {
//     if (otherContainer !== container) {
//       otherContainer.style.display = 'none';
//     }
//   });

//   if (container.style.display === 'block') {
//     container.style.display = 'none';
//   } else {
//     container.style.display = 'block';
//   }
// }

function toggleContainer(containerId) {
  var container = document.getElementById(containerId);
  var allContainers = document.querySelectorAll('.showitem');
  var mainBox = document.querySelector('.landing-popup');
  // var mainBox2 = document.querySelector('.popup-pink');
  // var mainBox3 = document.querySelector ('.popup-purple');

  allContainers.forEach(function (otherContainer) {
    if (otherContainer !== container) {
      otherContainer.style.display = 'none';
    }
  });

  if (container.style.display === 'block') {
    container.style.display = 'none';
    // Reset the width to its original value when hiding the container
    mainBox.style.width = 'auto';
  } else {
    container.style.display = 'block';
    
    // Check if it's the fourth container
    if (containerId === 'container1-4') {
      // Set the width to 760px when showing the fourth container
      mainBox.style.width = '760px';
    } 
    // else if (containerId === 'container2-4') {
    //   // Set the width to 760px when showing the fourth container
    //   mainBox2.style.width = '760px';
    // }
    // else if (containerId === 'container3-4'){
    //   mainBox3.style.width = '760px';
    // }
    else {
      // For other containers, set the width to its original value
      mainBox.style.width = 'auto';
      // mainBox2.style.width = 'auto';
      // mainBox3.style.width = 'auto';
    }
  }
}


// top performer view 
function showDiv1(divId) {
  var div = document.getElementById(divId);
  div.style.display = 'block';
}
function showDiv2(divId) {
  var div = document.getElementById(divId);
  div.style.display = 'block';
}

function showDiv3(divId) {
  var div = document.getElementById(divId);
  div.style.display = 'block';
}
function showDiv4(divId) {
  var div = document.getElementById(divId);
  div.style.display = 'block';
}
function showDiv5(divId) {
  var div = document.getElementById(divId);
  div.style.display = 'block';
}




// number div animation array 
document.addEventListener('DOMContentLoaded', function () {
  const targetDiv = document.getElementById('numberDiv');
  const finalNumber = 12322;
  const duration = 2000; // 2 seconds

  function updateNumber(currentNumber, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const newNumber = Math.floor(progress * finalNumber);
      targetDiv.textContent = newNumber;
      requestAnimationFrame(() => updateNumber(newNumber, startTime));
    } else {
      targetDiv.textContent = finalNumber;
    }
  }

  const startTime = Date.now();
  updateNumber(0, startTime);
});

// second number js 
document.addEventListener('DOMContentLoaded', function () {
  const targetDiv = document.getElementById('numberDiv1');
  const finalNumber = 55;
  const duration = 2000; // 2 seconds

  function updateNumber(currentNumber, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const newNumber = Math.floor(progress * finalNumber);
      targetDiv.textContent = newNumber;
      requestAnimationFrame(() => updateNumber(newNumber, startTime));
    } else {
      targetDiv.textContent = finalNumber;
    }
  }

  const startTime = Date.now();
  updateNumber(0, startTime);
});



// third number 
document.addEventListener('DOMContentLoaded', function () {
  const targetDiv = document.getElementById('numberDiv2');
  const finalNumber = 35;
  const duration = 2000; // 2 seconds

  function updateNumber(currentNumber, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const newNumber = Math.floor(progress * finalNumber);
      targetDiv.textContent = newNumber;
      requestAnimationFrame(() => updateNumber(newNumber, startTime));
    } else {
      targetDiv.textContent = finalNumber;
    }
  }

  const startTime = Date.now();
  updateNumber(0, startTime);
});

// end 

// fourthbox
// second number js 
document.addEventListener('DOMContentLoaded', function () {
  const targetDiv = document.getElementById('numberDiv4');
  const finalNumber = 55;
  const duration = 2000; // 2 seconds

  function updateNumber(currentNumber, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const newNumber = Math.floor(progress * finalNumber);
      targetDiv.textContent = newNumber;
      requestAnimationFrame(() => updateNumber(newNumber, startTime));
    } else {
      targetDiv.textContent = finalNumber;
    }
  }

  const startTime = Date.now();
  updateNumber(0, startTime);
});

// fifthbox 
// third number 
document.addEventListener('DOMContentLoaded', function () {
  const targetDiv = document.getElementById('numberDiv5');
  const finalNumber = 35;
  const duration = 2000; // 2 seconds

  function updateNumber(currentNumber, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const newNumber = Math.floor(progress * finalNumber);
      targetDiv.textContent = newNumber;
      requestAnimationFrame(() => updateNumber(newNumber, startTime));
    } else {
      targetDiv.textContent = finalNumber;
    }
  }

  const startTime = Date.now();
  updateNumber(0, startTime);
});


// sixbox 
// number div animation array 
document.addEventListener('DOMContentLoaded', function () {
  const targetDiv = document.getElementById('numberDiv6');
  const finalNumber = 12322;
  const duration = 2000; // 2 seconds

  function updateNumber(currentNumber, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const newNumber = Math.floor(progress * finalNumber);
      targetDiv.textContent = newNumber;
      requestAnimationFrame(() => updateNumber(newNumber, startTime));
    } else {
      targetDiv.textContent = finalNumber;
    }
  }

  const startTime = Date.now();
  updateNumber(0, startTime);
});



// wifi addmore popup links section 
function showElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.style.display = 'block';

    // Add the 'visible' class with a slight delay to trigger the transition
    setTimeout(() => {
      element.classList.add('visible');
    }, 50);
  }
}

function hideElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    // Removing the 'visible' class triggers the CSS transition
    element.classList.remove('visible');
    // After the transition ends, set display to 'none'
    setTimeout(() => {
      element.style.display = 'none';
    }, 1000); // Adjust the timeout to match the transition duration
  }
}

// prograss bar width animatio function 

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "progress-bar"
  const boxes = document.querySelectorAll(".progress-bar");

  // Apply the initial styles to start the transition
  boxes.forEach((box, index) => {
    // Get the computed width of the box
    const computedWidth = getComputedStyle(box).width;

    // Set the initial width to 0
    box.style.width = "0";
    box.style.cssText = "width: 0 !important;";

    // Use setTimeout to delay setting the actual width
    setTimeout(() => {
      // Set the width to the computed value
      box.style.width = computedWidth;


    }, 2000);
  });
});

// progress-box design
  // Function to toggle the popup
  // function togglePopup(popupId) {
  //   var div = document.getElementById(popupId);
    

  //   // Toggle the visibility and height
  //   if (div.style.maxHeight === "0px" || div.style.maxHeight === "") {
  //     // If the popup is currently hidden, show it
  //     div.style.maxHeight = div.scrollHeight + "px";

  //   } else {
  //     // If the popup is currently visible, hide it
  //     div.style.maxHeight = "0px";

  //   }
  // }
  // Function to toggle the popup and rotate arrow icon
  function togglePopup(popupId) {
    var div = document.querySelector(`.${popupId}`);
    var arrowIcons = document.querySelectorAll(`[id^=${popupId}-arrow]`);
  
    // Toggle the visibility and height
    if (div.style.maxHeight === "0px" || div.style.maxHeight === "") {
      // If the popup is currently hidden, show it
      div.style.maxHeight = div.scrollHeight + "px";
      arrowIcons.forEach(icon => icon.classList.add('arrow-up'));
    } else {
      // If the popup is currently visible, hide it
      div.style.maxHeight = "0px";
      arrowIcons.forEach(icon => icon.classList.remove('arrow-up'));
    }
  }
  




// clinder styling 

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Flatpickr for elements with the class "datepicker"
  flatpickr(".datepicker", {
      inline: true,
      onOpen: function(selectedDates, dateStr, instance) {
          // Add the "open" class to trigger the rolling animation
          instance.element.classList.add('open');
      },
      onClose: function(selectedDates, dateStr, instance) {
          // Remove the "open" class to reset the animation
          instance.element.classList.remove('open');
      },
  });
});

// scroll buttons 
function scrollPage(offset) {
  window.scrollBy({
      top: offset,
      behavior: 'smooth'
  });
}

// responsive navbar 
// middle navbar toggle 
document.getElementById('toggleButton').addEventListener('click', function() {
  var middlenavbar = document.getElementById('middlenavbar');
  middlenavbar.style.display = (middlenavbar.style.display === 'none' || middlenavbar.style.display === '') ? 'block' : 'none';
});

// rightnavbar toggle 
document.getElementById('toggleButton2').addEventListener('click', function() {
  var rightnavbar = document.getElementById('rightnavbar');
  rightnavbar.style.display = (rightnavbar.style.display === 'none' || rightnavbar.style.display === '') ? 'block' : 'none';
});

// toogle boxes  box1
function toggleDivs() {
  var boxdiv1 = document.getElementById('boxdiv1');
  var boxdiv2 = document.getElementById('boxdiv2');
  boxdiv1.style.display = 'none';
  boxdiv2.style.display = 'block';
}
function toggleDivs2() {
  var boxdiv1 = document.getElementById('boxdiv1');
  var boxdiv2 = document.getElementById('boxdiv2');
  boxdiv1.style.display = 'flex';
  boxdiv2.style.display = 'none';
}
// box2 

function toggleDivs3() {
  var boxdiv3 = document.getElementById('boxdiv3');
  var boxdiv4 = document.getElementById('boxdiv4');
  boxdiv3.style.display = 'none';
  boxdiv4.style.display = 'block';
}
function toggleDivs4() {
  var boxdiv3 = document.getElementById('boxdiv3');
  var boxdiv4 = document.getElementById('boxdiv4');
  boxdiv3.style.display = 'flex';
  boxdiv4.style.display = 'none';
}

// box3 
function toggleDivs5() {
  var boxdiv5 = document.getElementById('boxdiv5');
  var boxdiv6= document.getElementById('boxdiv6');
  boxdiv5.style.display = 'none';
  boxdiv6.style.display = 'block';
}
function toggleDivs6() {
  var boxdiv5 = document.getElementById('boxdiv5');
  var boxdiv6 = document.getElementById('boxdiv6');
  boxdiv5.style.display = 'flex';
  boxdiv6.style.display = 'none';
}

// box4 
function toggleDivs7() {
  var boxdiv7 = document.getElementById('boxdiv7');
  var boxdiv8= document.getElementById('boxdiv8');
  boxdiv7.style.display = 'none';
  boxdiv8.style.display = 'block';
}
function toggleDivs8() {
  var boxdiv7 = document.getElementById('boxdiv7');
  var boxdiv8 = document.getElementById('boxdiv8');
  boxdiv7.style.display = 'flex';
  boxdiv8.style.display = 'none';
}


// box5 
function toggleDivs9() {
  var boxdiv9 = document.getElementById('boxdiv9');
  var boxdiv10= document.getElementById('boxdiv10');
  boxdiv9.style.display = 'none';
  boxdiv10.style.display = 'block';
}
function toggleDivs10() {
  var boxdiv9 = document.getElementById('boxdiv9');
  var boxdiv10 = document.getElementById('boxdiv10');
  boxdiv9.style.display = 'flex';
  boxdiv10.style.display = 'none';
}

// arrow function chats right 
function toggleDivs11() {
  var boxdiv12 = document.getElementById('boxdiv12');
  var rotatebutton = document.getElementById('rotateButton');

  // Toggle the display state of boxdiv12
  boxdiv12.style.display = boxdiv12.style.display === 'block' ? 'none' : 'block';

  // Toggle the Font Awesome class for rotation on rotatebutton
  rotatebutton.classList.toggle('fa-rotate-180');
}


// arrow function wifi link 
function toggleDivs13() {
  var boxdiv14 = document.getElementById('boxdiv14');
  var rotatebutton = document.getElementById('rotateButton1');

  // Toggle the display state of boxdiv12
  boxdiv14.style.display = boxdiv14.style.display === 'block' ? 'none' : 'block';

  // Toggle the Font Awesome class for rotation on rotatebutton
  rotatebutton.classList.toggle('fa-rotate-180');
}

// links function fades 

function toggleDivs15() {
  var boxdiv16 = document.getElementById('boxdiv16');
  var rotatebutton = document.getElementById('rotateButton2');

  // Toggle the display state of boxdiv12
  boxdiv16.style.display = boxdiv16.style.display === 'block' ? 'none' : 'block';

  // Toggle the Font Awesome class for rotation on rotatebutton
  rotatebutton.classList.toggle('fa-rotate-180');
}


function showsugDiv2() {
  // Set the entire style attribute to 'display: block !important;'
  document.getElementById("suggestion").style.cssText = 'display: block !important;';
}

function hidesugDiv2() {
  // Set the entire style attribute to 'display: none !important;'
  document.getElementById("suggestion").style.cssText = 'display: none !important;';
}





