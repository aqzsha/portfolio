'use strict';

const modal = document.querySelector('.modal'),
      overlay = document.querySelector('.overlay'),
      btnCloseModal = document.querySelector('.close-modal'),
      btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', ()=>{
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
})

const openModal = () =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn =>{
    btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})