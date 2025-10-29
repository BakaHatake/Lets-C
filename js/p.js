const panel = document.getElementById('activity');
const title = document.getElementById('act-title');
const closeBtn = document.getElementById('act-close');

document.querySelectorAll('.day').forEach(btn => {
  btn.addEventListener('click', () => {
    title.textContent = 'Activity – ' + btn.textContent.trim();
    panel.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => panel.classList.remove('show'));
