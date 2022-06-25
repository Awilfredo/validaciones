function validar(){
    var nom= document.getElementById("nombre");
    var tel= document.getElementById("telefono");
    var vacio=true;
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

    }else if(tel.value.length!=8){
        alert("El numero de telefono no contiene 8 digitos");
        tel.style= "border: 1px solid red;";
    }else {
        tel.style="border: 1px solid black;"
    }
        
    if(nom.value=="" || tel.value==""){
        alert(alerta);
    }else {
        vacio=false;
    }

    var i;
    var x= nom.value.length;

    if(!vacio){
    for(i=0; i< x; i++){
        if(!isNaN(nom.value[i])){
            alert("El campo Nombre no debe contener valores Numericos");
            nom.style= "border: 1px solid red;";
            nom.value="";
            break;        }
    }

    x= tel.value.length;
    for(i=0; i<x; i++){
        if(isNaN(tel.value[i])){
            alert("El campo Telefono Solo debe contener numeros");
            tel.style="border: 1px solid red;"
            tel.value="";
            break;
        }
    }
}
}