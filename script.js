var carrusel = document.getElementById("carouselExampleInterval"); // Reemplaza "carouselExampleInterval" con el ID de tu carrusel.

carrusel.addEventListener("slide.bs.carousel", function(event) {
  var indiceDiapositiva = event.to;
  var textoLoremIpsum = generateLoremIpsum(); // Función para generar "lorem ipsum".
  var diapositivas = carrusel.querySelectorAll(".carousel-item");
  diapositivas[indiceDiapositiva].querySelector("a").textContent = textoLoremIpsum;
});

function generateLoremIpsum() {
  // Puedes generar el "lorem ipsum" de forma aleatoria o utilizar un texto predefinido.
  // En este caso, usaremos una versión abreviada del "lorem ipsum".
  var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return loremIpsum;
}

