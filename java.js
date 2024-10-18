

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } 
    else{
      entry.target.classList.remove('show')
    }
  })
} )

const elements = document.querySelectorAll('.hidden')


elements.forEach((element) => myObserver.observe(element) )





document.querySelector('a[href="#sobre-mim"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector('#sobre-mim');
  const headerHeight = document.querySelector('header').offsetHeight; // Tamanho do cabeçalho ou valor que está bloqueando

  // Obter a posição do elemento em relação ao topo da página
  const elementPosition = target.getBoundingClientRect().top + window.scrollY;

  // Rolagem ajustada com o tamanho do cabeçalho
  const offsetPosition = elementPosition - headerHeight - 10;

  // Realizar rolagem suave até a posição calculada
  window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
  });
});



const hamburger = document.querySelector('.hamburger');
const listaHeader = document.querySelector('.lista_header');

hamburger.addEventListener('click', () => {
  listaHeader.classList.toggle('show');
});