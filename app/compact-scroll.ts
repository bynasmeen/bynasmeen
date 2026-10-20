// Use untransformed layout coordinates so the animation cannot feed back into
// its own scroll measurement. No pinning or extra scroll space on small screens.
export function updateCompactCards(cards:HTMLElement[]){
 for(const card of cards){
  const parent=card.offsetParent;
  const top=card.offsetTop+(parent?.getBoundingClientRect().top??0);
  const p=card.contains(document.activeElement)?1:Math.max(0,Math.min(1,(innerHeight*.96-top)/(innerHeight*.38)));
  card.style.setProperty('--mobile-open',String(p));
 }
}
