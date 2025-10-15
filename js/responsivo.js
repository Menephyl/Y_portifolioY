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
// Seleciona todos os botões e painéis
const toggles = document.querySelectorAll(
  ".btn-show-hide, .btn-show-hide2, .btn-show-hide3"
);

toggles.forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling; // pega o painel logo abaixo
    const icon = btn.querySelector("i");

    // Fecha se já estiver aberto
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      btn.classList.remove("active");
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      // Fecha todos os outros antes de abrir o atual
      document.querySelectorAll(".panel-body, .panel-body2, .panel-body3")
        .forEach(p => (p.style.display = "none"));
      document.querySelectorAll(
        ".btn-show-hide, .btn-show-hide2, .btn-show-hide3"
      ).forEach(b => {
        b.classList.remove("active");
        const ic = b.querySelector("i");
        ic.classList.remove("fa-minus");
        ic.classList.add("fa-plus");
      });

      // Abre o painel clicado
      panel.style.display = "flex";
      btn.classList.add("active");
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});
