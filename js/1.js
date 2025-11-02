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
        expr=expr.slice(0.-1);
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

clear.addEventListener('click', () => { expr = ''; setDisplay(''); });
del.addEventListener('click', () => { expr = expr.slice(0, -1); setDisplay(expr); });
eq.addEventListener('click', evaluate);


