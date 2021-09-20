
var input_content = document.getElementById("operation").value;

function pulsada (tecla) {    
    switch(tecla) {
        case 'C':
            document.getElementById("operation").value = ' ';
            break;
    
        case '=':
            var resultado = eval(document.getElementById("operation").value);
            document.getElementById("operation").value = resultado;
            break;
            
        default:
            document.getElementById("operation").value = document.getElementById("operation").value + tecla;
    }
    
}

function erase_num(){
    //Borrar un caractere
    var last = document.getElementById("operation").value;
    var new_val = last.substring(0, last.length-1);

    document.getElementById("operation").value = new_val;
}

function sin(n1){
    //seno de un numero
    r = Math.sin(n1);
    return r;
}

function cos(n1){
    // coseno de un numero
    r = Math.cos(n1);
    return r;
}

function tan(n1){
    //tangente de un numero
    r = Math.tan(n1);
    return r;
}

function log(n1){
    // Logarritmo de un numero
    r = Math.log(n1);
    return r;
}

function pow(n1, n2){
    // Potencia
    r = Math.pow(n1, n2);
    return r;

}
function raiz(n1){
    //raiz cuadrada
    r = Math.sqrt(n1);
    return r;
}

function prc(n1, n2){
    //Funcion de Potencia
    r = ((n1/100)*n2);
    return r;
}