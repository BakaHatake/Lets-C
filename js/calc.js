window.onload = () => {};

function isAlpha(ch) {
    return /^[A-Za-z]$/.test(ch);
}

function isOperator(ch) {
    return ["+", "-", "*", "/"].includes(ch);
}

{
    const buttons = document.querySelectorAll("button");
    const msg = document.querySelector(".display");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            let value = btn.innerText;
            let lastChar = msg.value.slice(-1);

            
            if (value === "C") {
                msg.value = "";
            }

            
            else if (value === "=") {
                try {
                    msg.value = eval(msg.value);
                } catch {
                    msg.value = "error";
                }
            }

            
            else if (value === "DEL") {
                if (isAlpha(lastChar)) {
                    msg.value = "";     
                } else {
                    msg.value = msg.value.slice(0, -1); 
                }
            }

            else if (isOperator(lastChar) && isOperator(value)) {
                msg.value = msg.value.slice(0, -1) + value;
            }

            else {
                msg.value += value;
            }

        });
    });
}
function getRandomcolor(){
    let val1=Math.ceil(0+ Math.random()*255);
    let val2=Math.ceil(0+ Math.random()*255);
    let val3=Math.ceil(0+ Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
setInterval(() => {
    document.querySelector(".display").style.background=getRandomcolor();
}, 1500);
// setInterval(() => {
//     document.querySelectorAll(".operator").forEach((e) => {
//         e.style.background=getRandomcolor();
//     });
// }, 1000);
setInterval(() => {
document.querySelectorAll("button").forEach((ee) => {
        ee.style.background=getRandomcolor();
    });
}, 1500);
