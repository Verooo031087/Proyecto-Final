function escribir_email() {
    document.getElementById('contenido_datos').innerHTML="verovaliente2015@gmail.com";
}
function escribir_fnac(){
    document.getElementById('contenido_datos').innerHTML="03/10/1987";
}

function escribir_domicilio(){
    document.getElementById('contenido_datos').innerHTML="Angel Gallardo 5769 - José C. Paz - Buenos Aires";
}

function escribir_telefono(){
    document.getElementById('contenido_datos').innerHTML="(011) 45892347";
}

function escribir_todo(){
    document.getElementById('contenido_datos').innerHTML="E-mail: verovaliente2015@gmail.com - Fecha de Nacimiento: 03/10/1987 <br> Domicilio: Angel Gallardo 5769 - José C. Paz - Buenos Aires - Celular: (011) 45892347";
}

function borrar() {
    document.getElementById('contenido_datos').innerHTML='';    
}