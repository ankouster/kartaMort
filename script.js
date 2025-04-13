function enviarDatos() {
  const nombre = document.getElementById("nombre").value || "Alma sin nombre";
  const fecha = new Date().toLocaleString();

  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      const ip = data.ip;
      const ciudad = data.city;
      const region = data.region;
      const pais = data.country_name;
      const isp = data.org;

      const mensajeMistico = `
        ✨ El velo ha sido rasgado...<br><br>
        🕯️ Has sido observado, <strong>${nombre}</strong>.<br>
        🌐 IP: <strong>${ip}</strong><br>
        📍 Ubicación: <strong>${ciudad}, ${region}, ${pais}</strong><br>
        🧠 Proveedor: <strong>${isp}</strong><br><br>
        🕰️ Registrado el <em>${fecha}</em><br><br>
        Tu destino ha quedado sellado... 🃏
      `;

      document.getElementById("respuesta").innerHTML = mensajeMistico;
    })
    .catch(err => {
      console.error("Error al obtener IP:", err);
      document.getElementById("respuesta").innerHTML = "🔮 No se pudo leer tu aura. Intenta de nuevo...";
    });
}
