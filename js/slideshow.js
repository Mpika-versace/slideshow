const next=document.querySelector('.fa-angle-right');
const prev=document.querySelector('.fa-angle-left');
let slide=document.querySelectorAll('.slide');
let compteur=0;
let nextFunction=()=>{
    slide[compteur].classList.remove('active');
    if (compteur===slide.length-1) {
        compteur=-1;
    }
    slide[compteur+1].classList.add('active');
    compteur++;
    console.log(slide.length);
    console.log(compteur);
}

let prevFunction=()=>{
    slide[compteur].classList.remove('active');
    if (compteur===0) {
        compteur=slide.length;
    }
    slide[compteur-1].classList.add('active');
    
    compteur--;
    console.log();
    console.log(compteur);
}
next.addEventListener('click',nextFunction);
prev.addEventListener('click',prevFunction);
// setInterval(nextFunction,3000);
export  {next};