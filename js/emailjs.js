function sendEmail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_5zvlug9", "template_cluq6t6", parms).then(
    Swal.fire({
      title: "Sucesso!",
      text: "Sua mensagem foi enviada com sucesso!",
      icon: "success",
    })
  );
}
