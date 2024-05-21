document.getElementById('date-form').addEventListener('submit', function(event) {
  const dateInput = document.getElementById('date-input');
  if (!dateInput.checkValidity()) {
      alert('Please enter a valid date.');
      event.preventDefault();
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("toggle");
  const toggleText = document.getElementById("toggle-text");

  function updateText() {
      if (toggle.checked) {
          toggleText.textContent = "Children between the ages of 1-4";
      } else {
          toggleText.textContent = "Adults, Teenagers and Children aged 5 and over";
      }
  }

  // Initialize the text based on the current state of the checkbox
  updateText();

  // Add event listener to the checkbox to change the text when toggled
  toggle.addEventListener("change", updateText);



//Tier 1 button functions
var lvlOne = 0,
    countOne = document.getElementById('first');

document.getElementById('plus1').addEventListener('click', function () {
  countOne.textContent = lvlOne+=1;
  colourChangeOne(lvlOne);
});
document.getElementById('minus1').addEventListener('click',function () {
    if(lvlOne > 0) {
      countOne.textContent = lvlOne-=1;
    }
  colourChangeOne(lvlOne);
});
function colourChangeOne(val) {
  var colourOne = "green";
  if(val > 0) {
    colourOne="red";
  } 
  countOne.style.backgroundColor = colourOne;
}

//Tier 2 buttons
var lvlTwo = 0;
var countTwo = document.getElementById('second');

document.getElementById('plus2').addEventListener('click', function () {
  countTwo.textContent = lvlTwo+=1;
  colourChangeTwo(lvlTwo);
});
document.getElementById('minus2').addEventListener('click',function () {
    if(lvlTwo > 0) {
      countTwo.textContent = lvlTwo-=1;
    }
  colourChangeTwo(lvlTwo);
});
function colourChangeTwo(val){
  var colourTwo = "orange";
  if (val == 1) {
    colourTwo = "green";
  } else if (val > 1) {
    colourTwo = "red";
  }
  countTwo.style.backgroundColor = colourTwo;
}

//Tier 3 buttons
var lvlThree = 0;
var countThree = document.getElementById('third');

document.getElementById('plus3').addEventListener('click', function () {
  countThree.textContent = lvlThree+=1;
  if (toggle.checked) {
    childColourChangeThree(lvlThree);
} else {
   colourChangeThree(lvlThree);
}
});
document.getElementById('minus3').addEventListener('click',function () {
    if(lvlThree > 0) {
      countThree.textContent = lvlThree-=1;
    }
    if (toggle.checked) {
      childColourChangeThree(lvlThree);
  } else {
     colourChangeThree(lvlThree);
  }
});
function colourChangeThree(val) {
  var colourThree = "orange";
  if(val == 2) {
    colourThree = "green";
  } else if (val > 2) {
    colourThree = "red";
  }
  countThree.style.backgroundColor = colourThree;
}
function childColourChangeThree(val) {
  var colourThree = "orange";
  if(val > 1 && val < 5) {
    colourThree = "green";
  } else if (val >= 5){
    colourThree = "red";
  }
  countThree.style.backgroundColor = colourThree;
}

//Teir 4 buttons
var lvlFour = 0;
var countFour = document.getElementById('fourth');

document.getElementById('plus4').addEventListener('click', function () {
  countFour.textContent = lvlFour+=1;
  if (toggle.checked) {
    childColourChangeFour(lvlFour);
} else {
   colourChangeFour(lvlFour);
}
});
document.getElementById('minus4').addEventListener('click',function () {
    if(lvlFour > 0) {
      countFour.textContent = lvlFour-=1;
    }
    if (toggle.checked) {
      childColourChangeFour(lvlFour);
  } else {
     colourChangeFour(lvlFour);
  }
});
function colourChangeFour(val){
  var colourFour = "orange";
  if (val == 3 || val == 5) {
    colourFour = "green";
  } else if(val>5){
    colourFour = "red"; 
  }
  countFour.style.backgroundColor = colourFour;
}
function childColourChangeFour(val){
  var colourFour = "orange";
  if (val == 3) {
    colourFour = "green";
  } else if(val>3){
    colourFour = "red"; 
  }
  countFour.style.backgroundColor = colourFour;
}

//Tier 5 buttons
var lvlFive = 0;
var countFive = document.getElementById('fifth');

document.getElementById('plus5').addEventListener('click', function () {
  countFive.textContent = lvlFive+=1;
  if (toggle.checked) {
    childColourChangeFive(lvlFive);
} else {
   colourChangeFive(lvlFive);
}
});
document.getElementById('minus5').addEventListener('click',function () {
    if(lvlFive > 0) {
      countFive.textContent = lvlFive-=1;
    }
    if (toggle.checked) {
      childColourChangeFive(lvlFive);
  } else {
     colourChangeFive(lvlFive);
  }
});
function colourChangeFive(val) {
  var colourFive = "orange";
  if (val >= 3 && val <= 7) {
    colourFive = "green";
  } else if (val > 7) {
    colourFive = "red";
  }
  countFive.style.backgroundColor = colourFive;
}
function childColourChangeFive(val) {
  var colourFive = "orange";
  if (val >= 3 && val <= 6) {
    colourFive = "green";
  } else if (val > 6) {
    colourFive = "red";
  }
  countFive.style.backgroundColor = colourFive;
}

//Tier 6
var lvlSix = 0;
var countSix = document.getElementById('sixth');

document.getElementById('plus6').addEventListener('click', function () {
  countSix.textContent = lvlSix+=1;
  if (toggle.checked) {
    childColourChangeSix(lvlSix);
} else {
   colourChangeSix(lvlSix);
}
});
document.getElementById('minus6').addEventListener('click',function () {
    if(lvlSix > 0) {
      countSix.textContent = lvlSix-=1;
    }
    if (toggle.checked) {
        childColourChangeSix(lvlSix);
    } else {
       colourChangeSix(lvlSix);
    }
});
function colourChangeSix(val) {
  var colourSix = "orange";
  if(val >= 5 && val <= 7){
    colourSix = "green";
  } else if(val > 7) {
    colourSix = "red";
  } 
  countSix.style.backgroundColor = colourSix;
}
function childColourChangeSix(val) {
  var colourSix = "orange";
  if(val >= 2 && val <= 5){
    colourSix = "green";
  } else if(val > 5) {
    colourSix = "red";
  } 
  countSix.style.backgroundColor = colourSix;
}
});