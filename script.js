
  document.getElementById('coworkingForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const interes = document.querySelector('input[name="interes"]:checked');
    const personas = document.querySelector('input[name="personas"]:checked');

    if (!nombre || !email || !telefono || !interes || !personas) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    alert('¡Formulario enviado correctamente!\n\nGracias por tu interés.');
    document.getElementById('coworkingForm').reset();
  });  