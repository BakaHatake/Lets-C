document.getElementById("submit").addEventListener("click",()=>{

    const data={
        image:document.getElementById("imageURL").value,
        message:document.getElementById("message").value,
        views:document.getElementById("views").value,
        date:document.getElementById("date").value,
        intro:document.getElementById("intro").value,
    };
    localStorage.setItem("cardData", JSON.stringify(data));

    window.location.href = "c2.html";
});