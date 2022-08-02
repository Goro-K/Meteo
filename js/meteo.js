const APIKEY = "8ee06f01a06337e720ae8d029dfdcc5c"

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector(".city").innerHTML = `<i class="fa-solid fa-city"></i>${data.name}`;
                document.querySelector(".weather").innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${data.main.temp} °`;
                document.querySelector(".humidity").innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity} %`;
                document.querySelector(".wind").innerHTML = `<i class="fa-solid fa-wind"></i> ${data.wind.speed} km/h`;
            })
        )
};

document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;

    apiCall(ville)
});

apiCall("Meyzieu")






/* Async Function inutilisable car elle ne peut pas rentrer dans une fonction normale
async function fetchMeteo() {
    // On utilise la méthode fetch pour recup la key
    const response = await fetch(url)
    const data = await response.json()
    return data

}

const meteo = await fetchMeteo();
console.log(meteo)


document.querySelector(".city").innerHTML = `<i class="fa-solid fa-city"></i>${meteo.name}`;
document.querySelector(".weather").innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${meteo.main.temp} °`;
document.querySelector(".humidity").innerHTML = `<i class="fa-solid fa-droplet"></i> ${meteo.main.humidity} %`;
document.querySelector(".wind").innerHTML = `<i class="fa-solid fa-wind"></i> ${meteo.wind.speed} km/h`;

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('#inputCity').value;

})

*/