let lastModifiedDate = document.lastModified;
document.getElementById('lastModifiedSpan').innerHTML='Site was last modified at '+lastModifiedDate+' (MM/DD/YYYY)';

button = document.getElementById("go-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
    button.classList.add('animate__animated', 'animate__fadeInUp');
  } else {
    button.style.display = 'none';
  }
}

function goToTop() {
  document.body.scrollTop = 0;  // safari
  document.documentElement.scrollTop = 0; // chrome, opera etc.
} 