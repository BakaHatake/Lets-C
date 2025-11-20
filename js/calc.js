window.onload=() => {
    
}
{
   const buttons =document.querySelectorAll("button");
   const msg = document.querySelector(".display");

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
            else if(value==="DEL")
           {
               msg.value=msg.value.slice(0,-1);
            }
             else {
                msg.value+=value;
            }

    })
    
   });
}