$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');  //agrega la clase 'loaded' al body
        $('h1').css('color','#222222'); //pone color negro al titulo
        //$('p').css('color','#222222'); //pone color negro al parrafo 
    }, 2000);    
});
