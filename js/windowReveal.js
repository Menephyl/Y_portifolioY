


// Animação das cards de serviço em cascata

document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({ reset: false });

  sr.reveal('.about-me', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.2,
    reset: false
  });

  sr.reveal('.principal', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 200,
    viewFactor: 0.2,
    reset: false
  });

  sr.reveal('#services > div:nth-child(1)', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    delay: 0
  });

  sr.reveal('#services > div:nth-child(2)', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    delay: 200
  });

  sr.reveal('#services > div:nth-child(3), #services > div:nth-child(4)', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    delay: 400,
    interval: 200
  });

  sr.reveal('#hire', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out'
  });


    sr.reveal('#expertise-title', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out'
  });

  sr.reveal('#expertise-subtitle', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 200
  });
  
  sr.reveal('#desc > span', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200
  });

  sr.reveal('#education > .tileCourse', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200
  });

  // works
  const directions = ['right', 'left', 'right', 'top', 'top'];

  document.querySelectorAll('#experience .timeline-entry').forEach((entry, idx) => {
    sr.reveal(entry, {
      origin: directions[idx],
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      delay: 400 + idx * 200
    });
  });
});


//debaixo pra cima
window.revelar = ScrollReveal({ reset: false })

revelar.reveal('.fadeToUpFunc', {
    duration: 2000,
    distance: "50px",

})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToUp-delay', {
    duration: 2000,
    distance: "80px",
    delay: 500
})


window.revelar = ScrollReveal({ reset: true })
// topo do projeto
revelar.reveal('.fadeToUp-delay2', {
    duration: 2000,
    distance: "90px",
    delay: 600
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToUp-delay3', {
    duration: 2000,
    distance: "90px",
    delay: 700
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToUp-delay4', {
    duration: 2000,
    distance: "90px",
    delay: 800
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToUp-delay5', {
    duration: 2000,
    distance: "90px",
    delay: 900
})
window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToUp-delay6', {
    duration: 2000,
    distance: "90px",
    delay: 1000
})

// fade to right a
window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToRight', {
    duration: 2000,
    distance: "90px",
    // delay:500,
    origin: "left"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToRight-2', {
    duration: 2000,
    distance: "90px",
    delay: 700,
    origin: "left"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToRight-3', {
    duration: 2000,
    distance: "90px",
    delay: 900,
    origin: "left"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToRight-4', {
    duration: 2000,
    distance: "90px",
    delay: 1100,
    origin: "left"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToRight-5', {
    duration: 2000,
    distance: "90px",
    delay: 1200,
    origin: "left"
})

// fade to left


window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToLeft', {
    duration: 2000,
    distance: "90px",
    delay: 500,
    origin: "right"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToLeft-2', {
    duration: 2000,
    distance: "90px",
    delay: 400,
    origin: "right"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToLeft-3', {
    duration: 2000,
    distance: "90px",
    delay: 1000,
    origin: "right"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToLeft-4', {
    duration: 2000,
    distance: "90px",
    delay: 1200,
    origin: "right"
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.fadeToLeft-5', {
    duration: 2000,
    distance: "90px",
    delay: 1500,
    origin: "right"
})
