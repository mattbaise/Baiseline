const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const toast=document.querySelector('#toast');
document.querySelectorAll('[data-coming]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
}));
document.querySelectorAll('.chips button').forEach(b=>b.addEventListener('click',()=>{
  if(b.textContent.trim()==='Developer Starter Pack'){
    window.location.href='free-resources/developer-starter-pack/';
    return;
  }
  toast.textContent=`${b.textContent} — coming soon.`;
  toast.classList.add('show');
  setTimeout(()=>{
    toast.classList.remove('show');
    toast.textContent='Product link coming soon.';
  },1800);
}));
