function initContactForm() {
  // Inicializa com a Public Key
  emailjs.init("6DV6L3XBr5Q-If4ug"); // exemplo da sua conta

  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_4877c1c', 'template_xuder97', this)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      })
      .catch((error) => {
        alert('Erro ao enviar: ' + JSON.stringify(error));
      });
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
