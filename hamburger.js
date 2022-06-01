function noscroll(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",noscroll)

const back=document.querySelector('#back');
const toogler=document.querySelector('#toogler');




toogler.addEventListener('click',() =>{
    back.classList.remove('hidden')
    toogler.classList.add('hidden')

    
})

back.addEventListener('click',() =>{
    back.classList.add('hidden');
    toogler.classList.remove('hidden')
})