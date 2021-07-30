const togglebtn=document.querySelector('.navbar_toggle');
const menu=document.querySelector('.navbar_menu');
const icons=document.querySelector('.navbar_icon');

togglebtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});