document.addEventListener('DOMContentLoaded', function() {

  var header_colors = ['#fa8334f0', '#aa4f12f0'];
  var current_color = 0;

  function changeColor() {
      document.querySelector('.header').style.backgroundColor = header_colors[current_color];
      current_color = (current_color + 1) % header_colors.length;
  }

  setInterval(changeColor, 1500);

});
