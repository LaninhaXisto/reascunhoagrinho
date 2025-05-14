// Menu Responsivo (abre e fecha quando o botão é clicado)
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu');
  // Alterna a visibilidade do menu
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});


