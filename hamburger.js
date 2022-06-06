function noscroll(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",noscroll)

const back=document.querySelector('#back');
const toogler=document.querySelector('#toogler');
const pinkClose=document.querySelector('#pinkclose');
const overlay = document.getElementById('overlay');



toogler.addEventListener('click',() =>{
    back.classList.remove('hidden')
    toogler.classList.add('hidden')
    overlay.classList.remove('hidden')

})

back.addEventListener('click',() =>{
    back.classList.add('hidden');
    toogler.classList.remove('hidden')
    overlay.classList.add('hidden')

})

overlay.addEventListener('click' ,() =>{
    back.classList.add('hidden')
    overlay.classList.add('hidden')

   
})