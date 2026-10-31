// Keep section shortcuts visible; reveal broader navigation on upward scroll.
(()=>{
 const header=document.querySelector('body > .header');if(!header)return;
 const primary=document.querySelector('.summary-primary-nav');
 const reveal=document.createElement('div');reveal.className='scroll-navigation-reveal';reveal.inert=true;reveal.setAttribute('aria-hidden','true');
 for(const source of [header,primary].filter(Boolean)){const clone=source.cloneNode(true);clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));reveal.append(clone);}
 document.body.append(reveal);
 let lastY=Math.max(0,window.scrollY),direction=0,distance=0,frame=false,visible=false;
 const height=()=>document.documentElement.style.setProperty('--revealed-navigation-height',visible?reveal.getBoundingClientRect().height+'px':'0px');
 const show=value=>{if(visible===value)return;visible=value;reveal.inert=!value;reveal.setAttribute('aria-hidden',String(!value));reveal.classList.toggle('is-visible',value);height();};
 function update(){
  frame=false;const y=Math.max(0,window.scrollY),delta=y-lastY;lastY=y;
  const originalBottom=(primary??header).getBoundingClientRect().bottom+y;
  if(y<=originalBottom+16){show(false);direction=0;distance=0;return;}
  if(Math.abs(delta)<1)return;const next=delta>0?1:-1;distance=next===direction?distance+Math.abs(delta):Math.abs(delta);direction=next;
  if(distance>=10){if(next<0)show(true);else if(!reveal.contains(document.activeElement))show(false);}
 }
 window.addEventListener('scroll',()=>{if(!frame){frame=true;requestAnimationFrame(update);}},{passive:true});
 window.addEventListener('resize',height);
 if(globalThis.ResizeObserver)new ResizeObserver(height).observe(reveal);
 reveal.addEventListener('keydown',event=>{if(event.key==='Escape'){show(false);document.querySelector('.guide-sticky-nav a')?.focus({preventScroll:true});}});
})();
