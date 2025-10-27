const c1=document.getElementById('b1');
const m1=document.getElementById('m1')
const b1=document.querySelector('body')

const color = [
  '#a43636', // Red
  '#36a44c', // Green
  '#a48e36', // Gold
  '#3665a4', // Blue
  '#8e36a4', // Purple
  '#a45b36'  // Orange
];


function change(){
   const n=Math.floor(Math.random()*color.length)
   const c=color[n]
   m1.style.setProperty('background', c);
   c1.style.setProperty('--btn',c)
   b1.style.setProperty('background',c)

}
c1.addEventListener('click',change);