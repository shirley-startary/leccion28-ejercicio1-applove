/*
 * Archivo principal de funcionalidad de JS
 */
 var boxWork=document.getElementsByClassName("imgProducto");

 for (var i=0;i<boxWork.length;i++){
   boxWork[i].addEventListener("click",function(){
     abrir(this)
   });
 }

 function abrir(imagenProducto){
     var elemento=imagenProducto.src;
     var imagen=crearModalImagen(elemento);
     mostrarModal(imagen);
 }

 function crearModalImagen(imgsrc){
   var fondoModal=document.getElementById("fondo");
   var modal=document.getElementById("modal");
   var imagenModal=document.getElementById("_imagen");
   imagenModal.src=imgsrc;
   imagenModal.style.width="90%";

   fondo.className="ClaseImageProduct";
   modal.className="modal";

   var botonCerrar=document.getElementById("botonCerrar");
   botonCerrar.innerText="X";
   botonCerrar.className="botonCerrarModal";
   botonCerrar.addEventListener("click",function(){
   fondo.style.visibility="hidden";
   });
   return fondo;
 }

 function mostrarModal(modal){
   modal.style.visibility="visible";
 }
