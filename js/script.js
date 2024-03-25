let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'e071237edee73c3b7e73f23230b9ea8f'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value
  if (ciudad) {
    fetchDatosClima(ciudad)
  }
})
function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
  console.log(data)
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML = ''

  const ciudadNombre = data.name
  const temperatura = data.main.temp
  const descripcion = data.weather[0].description

  const ciudadTitulo = document.createElement('h2');
  ciudadTitulo.textContent = ciudadNombre;

  const temperaturaInfo = document.createElement('p');
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`;

  const descripcionInfo = document.createElement('p')
  descripcionInfo.textContent =`La descripción meteorológica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(descripcionInfo)

}


