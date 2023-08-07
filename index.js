$(document).ready(function() {
  // Adicionar classe com base na quantidade de imagens em cada curso
  $('.curso-grid').each(function() {
    var fotos = $(this).find('img').length;
    $(this).addClass('fotos-' + fotos);
  });
});

function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector('.header').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Evento de clique para os itens do menu de navegação
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-list li a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
    });
  });
});

