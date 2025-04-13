function enviarDatos() {
  const nombre = document.getElementById("nombre").value;
  const fecha = new Date().toISOString();

  console.log("Nombre:", nombre, "Fecha:", fecha);

  // Puedes usar EmailJS, Google Sheets o backend más adelante
  document.getElementById("respuesta").innerText = `Tu destino ha sido registrado, ${nombre}...`;
}
