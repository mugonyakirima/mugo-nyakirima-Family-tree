document.getElementById("nyakirima-mugo").style.display = "none";
document.getElementById("nyakirima-images").style.display = "none";
document.getElementById("burial").style.display = "none";
document.getElementById("ndambi").style.display = "none";


function hideElement() {
  const elementHide = document.getElementById("nyakirima-images");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-mugo").style.display = "none";
  document.getElementById("burial").style.display = "none";
  document.getElementById("ndambi").style.display = "none";
}
  
function hideElement1() { 
  const elementHide = document.getElementById("nyakirima-mugo");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-images").style.display = "none";
  document.getElementById("burial").style.display = "none";
  document.getElementById("ndambi").style.display = "none";
}

function hideElement2() {
  const elementHide = document.getElementById("burial");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-images").style.display = "none";
  document.getElementById("nyakirima-mugo").style.display = "none";
  document.getElementById("ndambi").style.display = "none";
}

function hideElement3() {
  const elementHide = document.getElementById("ndambi");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-images").style.display = "none";
  document.getElementById("nyakirima-mugo").style.display = "none";
  document.getElementById("burial").style.display = "none";
}