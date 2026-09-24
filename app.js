const search = document.getElementById('search');
const cards = [...document.querySelectorAll('.app-card')];
const noResults = document.getElementById('no-results');

search.addEventListener('input', () => {
  const q = search.value.toLowerCase().trim();
  let visible = 0;
  cards.forEach(card => {
    const text = (card.dataset.name + ' ' + card.dataset.category + ' ' + card.innerText).toLowerCase();
    const show = text.includes(q);
    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });
  noResults.hidden = visible !== 0;
});

document.querySelectorAll('.download-btn:not(.disabled)').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Download link will be connected when the first public release is uploaded.');
  });
});
