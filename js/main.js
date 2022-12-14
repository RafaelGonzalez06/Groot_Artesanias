$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');  //agrega la clase 'loaded' al body
        $('h1').css('color','#222222'); //pone color negro al titulo
        //$('p').css('color','#222222'); //pone color negro al parrafo 
    }, 2000);    
});



// Configurar el boton de volver arriba
window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});


// Configuracion boton modo oscuro
const btnSwitch = document.querySelector('#switch');
const barraProgreso = document.querySelector('#barra_progreso');
const btnUp = document.querySelector('#boton_up');
const divcontacto = document.querySelector('.contact-block');
const divitemboxes = document.querySelectorAll('.item-boxes');


// const cartas = document.querySelectorAll('.carta');   //en revision

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //coloca una clase al body
    
    barraProgreso.classList.toggle('progreso');  //coloca una clase a la barra de progreso. Esto es para poder modificar el color en el modo oscuro
    btnUp.classList.toggle('boton_up');
    btnSwitch.classList.toggle('active');
    divcontacto.classList.toggle('contacto_modo');

    // const button = [...document.querySelectorAll(".btn")];
    divitemboxes.forEach(function(elemento) { //, index, arreglo) {
        elemento.classList.toggle("itemboxes_modo");
        // arreglo[0].classList.add("itemboxes_modo");
        // arreglo[1].classList.add("itemboxes_modo");
    });

    //en revision
    // cartas.forEach(function(){
    //     cartas.classList.toggle('carta_oscura');
    // });

});


// barra de progreso de lectura de la pagina
let processScroll = () => {
    let docElem = document.documentElement, 
      docBody = document.body,
      scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
      scrollPercent = scrollTop / scrollBottom * 100 + '%';
    
    // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
    
      document.getElementById("barra_progreso").style.setProperty("--scrollAmount", scrollPercent); 
  }
  document.addEventListener('scroll', processScroll);

// termina el proceso de la barra