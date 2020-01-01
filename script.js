var index = 0;
show_slide(index);

function change_slide(n) {
  index += n;
  show_slide(index);
}

function show_slide(n) {
  var slides = document.getElementsByClassName("slides");
  
  index = (n + slides.length) % slides.length;

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
}