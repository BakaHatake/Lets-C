let api =document.getElementById("fetch");
let cityName =document.getElementById("cityName");

api.addEventListener('click', () => {
        let city = cityName.value;
        console.log("city");
        apicall(city);
 });

 cityName.addEventListener('keydown', e => {
    let city = cityInput.value;

    if (e.key === "=" || e.key === "Enter") {
        console.log(e.key);
        apicall(city);
    }
});

async function apicall(city) {
    if(!city){
        console.log("city is not found");
        return;
    }
const apiKey = "2ffb4b8d71d9477183a95955252411";
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en`;

try{
    const res=await fetch(url)
    const data= await res.json();

    if(data.error){
        document.getElementById("city").textContent="try another city";

        document.getElementById("temp").textContent="";
        document.getElementById("humidity").textContent="";
        document.getElementById("condition").textContent="";
        return
    }
    document.getElementById("city").textContent=
    data.location.name+" "+
    data.location.region+" "+
    data.location.countary;

    document.getElementById("temp").textContent = data.current.temp_c + "°C";
    document.getElementById("humidity").textContent = data.current.humidity + "%";
    document.getElementById("condition").textContent = data.current.condition.text;
} 
catch(error) {
    console.log("something happen to api",error)

      document.getElementById("city").textContent="try another city";

      document.getElementById("temp").textContent="";
      document.getElementById("humidity").textContent="";
      document.getElementById("condition").textContent="";
}
}