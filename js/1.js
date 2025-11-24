const display=document.getElementById('display');
const keys=document.querySelector('.keys');
const clear=document.getElementById('clear')
const del=document.getElementById('del')
const eq=document.getElementById('eq')

let expr=''

function setDisplay(value){
    display.value=value||'';
}

function append(val){
    const last = expr.slice(-1);
    const isOp=c=>['+','-','*','/'].includes(c);


    if (val === '.' ) {
    const seg = expr.split(/[\+\-\*\/]/).pop();
    if (seg.includes('.')) return;
  }

  if (isOp(val)){
    if (expr ==='' && val !=='-') return;
    if (isOp(last)){
        expr=expr.slice(0,-1);
    }
  }

  expr+=val;
  setDisplay(expr);
}

function evaluate(){
    if(!expr) return;
    const safe = expr.replace(/[^0-9\+\-\*\/\.]/g, '');
    try{
         const result = Function(`return (${safe})`)();
    expr = String(result);
    setDisplay(expr);
  } catch {
    setDisplay('Error');
    expr = '';
  }
}
    
keys.addEventListener('click', e => {
  const t = e.target;
  if (t.matches('[data-key]')) append(t.getAttribute('data-key'));
  if (t.matches('[data-op]')) append(t.getAttribute('data-op'));
});
document.addEventListener("keydown", e => {
    console.log(e.key);

    if (!isNaN(e.key)) {
        append(e.key);
    }

    else if (e.key === "Backspace") {
        expr = expr.slice(0, -1);
        setDisplay(expr);
    }

    else if (e.key === "=" || e.key === "Enter") {
        evaluate();
    }

    else if (["+", "-", "*", "/", "."].includes(e.key)) {
        append(e.key);
    }

    else if (e.key === "Delete") {
        expr = "";
        setDisplay("");
    }
});
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

setInterval(() => {
    document.querySelectorAll("button").forEach(element => {
        element.style.background = randomColor();
    });
}, 2000);


clear.addEventListener('click', () => { expr = ''; setDisplay(''); });
del.addEventListener('click', () => { expr = expr.slice(0, -1); setDisplay(expr); });
eq.addEventListener('click', evaluate);

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }; 
    }, 2000);
}

getData(1, () => {
    getData(2);
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            if (getNextData) {
                getNextData();
            }
            resolve("done");
        }, 5000);
    });
}





// let promise=new Promise((resolve,reject)=>{
//     console.log("Baka made a promise");
//     resolve("Baka made a resolve");
//     reject("Baka rejected it ")
// })