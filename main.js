button = document.getElementById("go-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;  // safari
  document.documentElement.scrollTop = 0; // chrome, opera etc.
} 