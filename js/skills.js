const sr = ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1000,
  easing: "ease-in-out"
});

// Revela título e descrição
sr.reveal("#skills h2", { origin: "bottom", delay: 200 });
sr.reveal("#skills p", { origin: "bottom", delay: 400 });

// Revela as caixas de progresso
sr.reveal(".progress-box-1 p, .progress-box-1 div", { origin: "left", interval: 150 });
sr.reveal(".progress-box-2 p, .progress-box-2 div", { origin: "left", interval: 150 });

