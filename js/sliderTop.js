// slider.js

const slides   = Array.from(document.querySelectorAll('.slide'));
const buttons  = Array.from(document.querySelectorAll('.manual-btn'));
let   currentIndex;
let   autoplayTimer;

// Injeta keyframes e classe .text-slide-up
;(function injectTextSlideUpAnimation() {
  const css = `
    @keyframes textSlideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .text-slide-up {
      animation: textSlideUp 1.6s ease forwards;
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();

/**
 * Exibe slide e anima apenas o container de texto (.slide-content)
 */
function showSlide(idx) {
  // 1) alterna classe .active no slide e no botão
  slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
  buttons.forEach((btn,   i) => btn.classList.toggle('active', i === idx));
  currentIndex = idx;

  // 2) seleciona o .slide-content do slide ativo
  const textContainer = slides[idx].querySelector('.slide-content');
  if (!textContainer) return;

  // 3) remove e reaplica a classe pra disparar a animação
  textContainer.classList.remove('text-slide-up');
  void textContainer.offsetWidth; // force reflow
  textContainer.classList.add('text-slide-up');

  // 4) limpa a classe ao final da animação
  textContainer.addEventListener('animationend', () => {
    textContainer.classList.remove('text-slide-up');
  }, { once: true });
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
