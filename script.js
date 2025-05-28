
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("Nombre").value.trim();
    const email = document.getElementById("Correo").value.trim();
    const message = document.getElementById("Mensaje").value.trim();

   
    if (!Nombre|| !Correo || !Mensaje) {
      document.getElementById("response").innerText = "Por favor, completa todos los campos.";
      return;
    }

    document.getElementById("response").innerText =
      `Gracias, ${name}. Hemos recibido tu mensaje: "${message}"`;

    document.getElementById("contactForm").reset();
  });
