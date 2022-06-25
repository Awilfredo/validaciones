
function validar(){
    var nom= document.getElementById("nombre");
    var tel= document.getElementById("telefono");

    var alerta= "Siguientes campos estan vacios:"
    if(nom.value==""){

        nom.style= "border: 1px solid red;";
        alerta+=" \n\rNombre";
    }
    else{
        nom.style= "border: 1px solid black;";
    }
    
    if(tel.value==""){
       
        tel.style= "border: 1px solid red;";
        alerta+=" \n\rTelefono";
    }


    if(nom.value=="" || tel.value==""){
        alert(alerta);
    }
}