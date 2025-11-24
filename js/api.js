let api = document.getElementById("fetchBtn");
let cityInput = document.getElementById("cityInput");

api.addEventListener('click', () => {
    let city = cityInput.value;
    console.log(city);
    apicall(city);
});

cityInput.addEventListener('keydown', e => {
    let city = cityInput.value;

    if (e.key === "=" || e.key === "Enter") {
        console.log(e.key);
        apicall(city);
    }
});

async function apicall(city) {
    if (!city) {
        console.log("no city daaa");
        return;
    }

    const apiKey = "2ffb4b8d71d9477183a95955252411";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        document.getElementById("cityName").textContent =
            data.location.name + " " +
            data.location.region + " " +
            data.location.country;

        document.getElementById("temp").textContent = data.current.temp_c + "°C";
        document.getElementById("humidity").textContent = data.current.humidity + "%";
        document.getElementById("condition").textContent = data.current.condition.text;

    } catch (error) {
        console.log("API call tripped:", error);
    }
}
