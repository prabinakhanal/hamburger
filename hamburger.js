const back=document.querySelector('#back');
const toogler=document.querySelector('#toogler');
const Navbar=document.querySelector('#navbar');



toogler.addEventListener('click',() =>{
    toogler.classList.add('hidden');
    back.classList.remove('hidden')
    Navbar.classList.remove('hidden')
    
})

back.addEventListener('click',() =>{
    back.classList.add('hidden');
    toogler.classList.remove('hidden')
    Navbar.classList.add('hidden')
    
})