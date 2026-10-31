const classPopup=document.querySelector('.class-menu');
if(classPopup){
 const trigger=classPopup.querySelector('.class-menu-trigger');
 const setOpen=open=>{classPopup.classList.toggle('is-open',open);classPopup.classList.toggle('is-dismissed',!open);trigger.setAttribute('aria-expanded',String(open));};
 classPopup.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')setOpen(true);});
 classPopup.addEventListener('pointerleave',event=>{if(event.pointerType!=='touch'&&!classPopup.contains(document.activeElement))setOpen(false);});
 classPopup.addEventListener('focusin',()=>setOpen(true));
 classPopup.addEventListener('focusout',event=>{if(!classPopup.contains(event.relatedTarget))setOpen(false);});
 trigger.addEventListener('click',event=>{event.preventDefault();setOpen(true);});
 classPopup.querySelectorAll('.class-menu-links a').forEach(link=>link.addEventListener('click',()=>{setOpen(false);}));
 document.addEventListener('pointerdown',event=>{if(!classPopup.contains(event.target))setOpen(false);});
 classPopup.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();trigger.focus();setOpen(false);}});
}
