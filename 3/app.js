const container=document.querySelector('.container');
const openD=document.querySelector('#open');
const closeD=document.querySelector('#close');


openD.addEventListener('click',()=>{
    container.classList.add('rotation');
})
closeD.addEventListener('click',()=>{
    container.classList.remove('rotation');
})