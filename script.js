
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'e32a26eaebd98a10eaf88cca5466aa3e'
let difKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
    
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
    
    })
    
    function fetchDatosClima(ciudad){

    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
.then(response => response.json())
.then(response => mostrarDatosclima(response))

    }

    function mostrarDatosclima(response){
const divDatosClima = document.getElementById('datosClima')
divDatosClima.innerHTML = ''
const ciudadNombre = response.name
const paisNombre = response.sys.country
const Temperatura   = response.main.temp - difKelvin
const humedad = response.main.humidity
const descripcion = response.weather[0].description
const icono=response.weather[0].icon

const fechaHora = new Date(response.dt * 1000)
const fechaFormateada = fechaHora.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
const horaFormateada = fechaHora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })

const ciudadTitulo = document.createElement('h2')
ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

const temperaturaInfo = document.createElement('p')
temperaturaInfo.textContent = `La Temperatura es : ${Math.floor(Temperatura)}°C`

const humedadInfo = document.createElement('p')
humedadInfo.textContent = `La humedad es :  ${humedad}%`

const iconoInfo = document.createElement('img')
iconoInfo.src = `http://openweathermap.org/img/wn/${icono}.png`

const descripcionInfo = document.createElement('p')
descripcionInfo.textContent = `La Descripcion Metereologica es : ${descripcion}`

const fechaHoraInfo = document.createElement('p')
fechaHoraInfo.textContent = `Fecha y Hora : ${fechaFormateada}, ${horaFormateada}`

divDatosClima.appendChild(fechaHoraInfo)
divDatosClima.appendChild(ciudadTitulo)
divDatosClima.appendChild(temperaturaInfo)
divDatosClima.appendChild(humedadInfo)
divDatosClima.appendChild(iconoInfo)
divDatosClima.appendChild(descripcionInfo)


    }


