function initContactForm() {
  // Inicializa com a Public Key
  emailjs.init({
    publicKey: "6DV6L3XBr5Q-If4ug"
  });

  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_d6171km', 'template_xuder97', this)
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
