document.addEventListener('DOMContentLoaded', () => {
  const aside     = document.getElementById('aside');
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn  = document.getElementById('menu-close');
  const body      = document.body;

  if (aside && toggleBtn && closeBtn) {
    closeBtn.style.display = 'none';

    toggleBtn.addEventListener('click', () => {
      aside.classList.add('menu-open');
      body.classList.add('menu-open');
      toggleBtn.style.display = 'none';
      closeBtn.style.display  = 'block';
    });

    closeBtn.addEventListener('click', () => {
      aside.classList.remove('menu-open');
      body.classList.remove('menu-open');
      closeBtn.style.display  = 'none';
      toggleBtn.style.display = 'block';
    });
  }
});
