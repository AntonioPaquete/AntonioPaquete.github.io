document.addEventListener('DOMContentLoaded', function() {

  var header_colors = ['#fcb241', 'rgba(255, 191, 0, 1)', '#f96d00'];
  var current_color = 0;

  function changeColor() {
      document.querySelector('.header').style.backgroundColor = header_colors[current_color];
      current_color = (current_color + 1) % header_colors.length;
  }

  setInterval(changeColor, 2000);
});