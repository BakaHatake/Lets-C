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
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en`;


    try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
        document.getElementById("cityName").textContent = "Try another city";
        document.getElementById("temp").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("condition").textContent = "";
        return;
    }

    document.getElementById("cityName").textContent =
        data.location.name + " " +
        data.location.region + " " +
        data.location.country;

    document.getElementById("temp").textContent = data.current.temp_c + "°C";
    document.getElementById("humidity").textContent = data.current.humidity + "%";
    document.getElementById("condition").textContent = data.current.condition.text;

} catch (error) {
    console.log("API call tripped:", error);

    document.getElementById("cityName").textContent = "Try another city";
    document.getElementById("temp").textContent = "";
    document.getElementById("humidity").textContent = "";
    document.getElementById("condition").textContent = "";
}
}

let fromSelect = document.getElementById("fromCurr");
let toSelect = document.getElementById("toCurr");
let numInput = document.getElementById("currAmount");
let btn = document.getElementById("convertBtn");
let enter = document.getElementById("xyz");

async function curr(from, to, num) {
    if (isNaN(num) || num === "") {
        document.getElementById("convertedValue").innerHTML = "Invalid Number";
        return;
    }

    try {
        const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${num}&from=${from}&to=${to}`
        );
        const data = await res.json();
        console.log(data);

        if (!data.rates[to]) {
            document.getElementById("convertedValue").innerHTML = "Conversion unavailable";
            return;
        }

        document.getElementById("convertedValue").innerHTML = data.rates[to];

    } catch (err) {
        document.getElementById("convertedValue").innerHTML = "ERROR";
    }
}


btn.addEventListener("click", () => {
    let from = fromSelect.value;
    let to = toSelect.value;
    let num = numInput.value;

    curr(from, to, num);
});

enter.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === "=") {
        let from = fromSelect.value;
        let to = toSelect.value;
        let num = numInput.value;

        curr(from, to, num);
        console.log(e.key);
    }
});
