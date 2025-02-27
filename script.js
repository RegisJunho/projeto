function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

    // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if(html.classList.contains('light')){
    // set tiver light toggleMode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      // set tiver sem light toggleMode, manter a imagem normal
      img.setAttribute("src","./assets/avatar.png")
  
  } 
}




 // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }