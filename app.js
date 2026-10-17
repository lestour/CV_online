const filters=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('[data-category]')];
filters.forEach(button=>button.addEventListener('click',()=>{
 filters.forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 let visible=0;
 cards.forEach(card=>{card.hidden=button.dataset.filter!=='Tout'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)visible++;});
 document.getElementById('filter-status').textContent=`${visible} groupes de compétences affichés`;
}));
document.getElementById('print').addEventListener('click',()=>window.print());

document.querySelectorAll('[data-theme-mode]').forEach(button=>button.addEventListener('click',()=>window.cvTheme?.setMode(button.dataset.themeMode)));
window.cvTheme?.refresh();
