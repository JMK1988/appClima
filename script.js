let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = '1301e23dd7122274c07f98e3b24e0254';
let difKelvin = 273.15;
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})


function fetchDatosClima(ciudad){

    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
.then( data => data.json())
.then( data => mostrarDatosClima(data))

}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';
    const ciudadNombre = data.name;
    const ciudadTemperatura = Math.round(data.main.temp-difKelvin) ;
    const ciudadDescripcion = data.weather[0].description;
    const iconoClima = data.weather[0].icon

    const Titulo = document.createElement('h2');
    Titulo.textContent = ciudadNombre;
    const temperatura = document.createElement('p');
    temperatura.textContent = `${ciudadTemperatura}°C`;
    const icono = document.createElement('img');
    icono.src = `http://openweathermap.org/img/wn/${iconoClima}@2x.png`;
    const description = document.createElement('p');
    description.textContent = ciudadDescripcion

    divDatosClima.appendChild(Titulo);
    divDatosClima.appendChild(temperatura);
    divDatosClima.appendChild(icono);
    divDatosClima.appendChild(description);
}
