(function () {
 'use strict';
 const key='cv-theme-mode';
 const root=document.documentElement;
 const system=window.matchMedia('(prefers-color-scheme: dark)');
 const valid=mode=>['light','dark','auto'].includes(mode);
 let mode='auto';
 try { const saved=localStorage.getItem(key);if(valid(saved))mode=saved; } catch (_) {}
 function apply(){
  const theme=mode==='auto'?(system.matches?'dark':'light'):mode;
  root.dataset.theme=theme;root.dataset.themeMode=mode;
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#171f1b':'#f6f5f0';
  document.querySelectorAll('[data-theme-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.themeMode===mode)));
 }
 window.cvTheme={setMode(next){if(!valid(next))return;mode=next;try{localStorage.setItem(key,mode);}catch(_){}apply();},refresh:apply};
 if(system.addEventListener)system.addEventListener('change',()=>{if(mode==='auto')apply();});
 else if(system.addListener)system.addListener(()=>{if(mode==='auto')apply();});
 window.addEventListener('storage',event=>{if(event.key===key){mode=valid(event.newValue)?event.newValue:'auto';apply();}});
 apply();
})();
