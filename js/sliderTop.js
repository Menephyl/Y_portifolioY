const slides = Array.from(document.querySelectorAll('.slide'));
const buttons = Array.from(document.querySelectorAll('.manual-btn'));
let currentIndex = 0;
let autoplayTimer;

/**
 * Exibe slide e ativa botão correspondente
 */
function showSlide(idx) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
  buttons.forEach((btn, i) => btn.classList.toggle('active', i === idx));
  currentIndex = idx;
}

/**
 * Inicia autoplay de 4s, reiniciável
 */
function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }, 4000);
}

// Cliques manuais nos botões
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = parseInt(btn.dataset.index, 10);
    showSlide(idx);
    startAutoplay();
  });
});

// Inicialização
showSlide(0);
startAutoplay();
