window.onload=() => {
    
}
function isAlpha(ch) {
    return /^[A-Za-z]$/.test(ch);
}
function isOperator(ch) {
    return ["+", "-", "*", "/"].includes(ch);
}


{
   const buttons =document.querySelectorAll("button");
   const msg = document.querySelector(".display");
   const oper= document.querySelector(".operator")
   buttons.forEach(btn => {
    btn.addEventListener("click",function(){
        let value =btn.innerText;
        if(value==="C")
            {
            msg.value="";
            } else if(value==="=")
            try {
                msg.value=eval(msg.value);
            }
            catch{
                msg.value="error";
            }
            
            else if(value==="DEL"){
                const lastChar = msg.value.slice(-1);  // get last character

                if (isAlpha(lastChar)) {
                    msg.value = "";                  // alph → reset
                } else {
                    msg.value = msg.value.slice(0, -1);  // number/symbol → delete 1 char
                }}
                 if (isOperator(lastChar) && isOperator(value)) {
                     msg.value = msg.value.slice(0, -1) + value;   // replace operator
                     }
             else {
                msg.value+=value;
            }
            
        })
    
   });
}