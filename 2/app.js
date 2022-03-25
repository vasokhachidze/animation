const progress=document.querySelector('#progress');
const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');
const circles=document.querySelectorAll('.circle');

let counter=1;

prevBtn.addEventListener('click',()=>{
    counter--;
    if(counter<1){
        counter=1;
    }
    resume();

})
nextBtn.addEventListener('click',()=>{
    counter++
    if(counter>circles.length){
        counter=circles.length
    }
    resume();
})

function resume(){
    circles.forEach((circle, idx) => {
        if(idx < counter) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const active=document.querySelectorAll('.active');
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'
    if(counter === 1) {
        prevBtn.disabled = true
    } else if(counter === circles.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
    

}