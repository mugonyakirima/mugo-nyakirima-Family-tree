document.getElementById("nyakirima-mugo").style.display = "none";
document.getElementById("nyakirima-images").style.display = "none";
document.getElementById("burial").style.display = "none";
document.getElementById("ndambi").style.display = "none";
document.getElementById("btn").style.display = "none";


function hideElement() {
  const elementHide = document.getElementById("nyakirima-images");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-mugo").style.display = "none";
  document.getElementById("burial").style.display = "none";
  document.getElementById("ndambi").style.display = "none";
  if (innerWidth < 810) {
    // document.getElementById("albums1").style.display = "none";
    document.getElementById("albums2").style.display = "none";
    document.getElementById("albums3").style.display = "none";
    document.getElementById("albums4").style.display = "none";
    document.getElementById("albums5").style.display = "none";
    document.getElementById("albums6").style.display = "none";
    document.getElementById("albums7").style.display = "none";
    document.getElementById("albums8").style.display = "none";
    document.getElementById("album-folder").style.height = "30vh"
    document.getElementById("btn").style.display = "block";
  }
}
  
function hideElement1() { 
  const elementHide = document.getElementById("nyakirima-mugo");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-images").style.display = "none";
  document.getElementById("burial").style.display = "none";
  document.getElementById("ndambi").style.display = "none";
  if (innerWidth < 810) {
    document.getElementById("albums1").style.display = "none";
    document.getElementById("albums2").style.display = "none";
    //document.getElementById("albums3").style.display = "none";
    document.getElementById("albums4").style.display = "none";
    document.getElementById("albums5").style.display = "none";
    document.getElementById("albums6").style.display = "none";
    document.getElementById("albums7").style.display = "none";
    document.getElementById("albums8").style.display = "none";
    document.getElementById("album-folder").style.height = "30vh";
    document.getElementById("btn").style.display = "block";
  }
}

function hideElement2() {
  const elementHide = document.getElementById("burial");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-images").style.display = "none";
  document.getElementById("nyakirima-mugo").style.display = "none";
  document.getElementById("ndambi").style.display = "none";
  if (innerWidth < 810) {
    document.getElementById("albums1").style.display = "none";
    //document.getElementById("albums2").style.display = "none";
    document.getElementById("albums3").style.display = "none";
    document.getElementById("albums4").style.display = "none";
    document.getElementById("albums5").style.display = "none";
    document.getElementById("albums6").style.display = "none";
    document.getElementById("albums7").style.display = "none";
    document.getElementById("albums8").style.display = "none";
    document.getElementById("album-folder").style.height = "30vh";
    document.getElementById("btn").style.display = "block";
  }
}

function hideElement3() {
  const elementHide = document.getElementById("ndambi");
  elementHide.style.display = "block";
  document.getElementById("nyakirima-images").style.display = "none";
  document.getElementById("nyakirima-mugo").style.display = "none";
  document.getElementById("burial").style.display = "none";
  if (innerWidth < 810) {
    document.getElementById("albums1").style.display = "none";
    document.getElementById("albums2").style.display = "none";
    document.getElementById("albums3").style.display = "none";
    //document.getElementById("albums4").style.display = "none";
    document.getElementById("albums5").style.display = "none";
    document.getElementById("albums6").style.display = "none";
    document.getElementById("albums7").style.display = "none";
    document.getElementById("albums8").style.display = "none";
    document.getElementById("album-folder").style.height = "30vh";
    document.getElementById("btn").style.display = "block";
  }
}

function hideOtherElements1() {
  if (innerWidth < 810) {
    document.getElementById("albums1").style.display = "none";
  }
}


function btnFunction() {
  window.location.reload();
}

document.getElementById("title").style.display = "block"
document.getElementById("title1").style.display = "none";

function titleFunction() {
  document.getElementById("title1").style.display = "block";
}

document.getElementsByTagName('a').style.textDecoration = 'none'