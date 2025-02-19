function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // O de Baixo tem o mesmo efeito

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem referente ao modo correto
  if (html.classList.contains("light")) {
    // se light mode, img liht
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Jovem, pardo, vestindo uma camisa azul escura, em frente a uma parede muito maneira")

  } else {
    // se dark mode
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Jovem, pardo, vestindo uma camisa azul escura, em frente a uma parede muito maneira")

  }

}