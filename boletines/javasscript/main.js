//console.log("Hola descarga");

//DOM
//querySelector querySelectorAll
// let links= document.querySelectorAll("a");
//
// links.forEach(function(link){
// console.log(link);
// });

// let celdas = document.querySelectorAll("td");
//
// celdas.forEach(function(td)
// {
//   td.addEventListener('click',function(){
//     console.log(this);
//   })
// });

//obtener los elementos de clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){

//Agregar un evento clic  cada una de ellos
link.addEventListener("click",function(ev){
  ev.preventDefault();
  let content =document.querySelector('.content');
    //quitarle las clases de animacion que ya tiene
    content.classList.remove("bounce");
    content.classList.remove("animated");
    //Agregar clases para animar su salida fadeoutup
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    //setTimeout
    //setInterval
    setTimeout(function(){
    location.href="../index.html" ;
    },800);
return false ;
  });
});
