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

            else if (isOperator(lastChar)) {
                msg.value = msg.value.slice(0, -1) + value;
            }

            else {
                msg.value += value;
            }

        });
    });
}
