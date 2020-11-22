$(document).ready(inicio);
var product;
var lista_array = [];

function inicio(){
    var datos = localStorage.getItem("lista_storage");
    if (datos!=undefined && datos!=null) {
        lista_array = datos.split("//");
        for (i = 0; i <lista_array.length; i++) {
            $("#lista_productos").append("<div class='linea'>"+ lista_array[i] +"<img src='img/eliminar.gif' onclick='eliminar(this)'></div>");
        }

    }
    $("button").click(comprar);
}
function comprar(){
    product=$("#input_product").val();
    if (product.length>0 && lista_array.indexOf(product)==-1){
        lista_array.push(product);
        $("#lista_productos").append("<div class='linea'>"+ product +"<img src='img/eliminar.gif' onclick='eliminar(this)'></div>");
    }
    guardar_datos();
}

function eliminar(e){
    var indice = $(e).parent().index();
    lista_array.splice(indice,1);
    $(e).parent().remove();
    $("#input_product").val("").focus();
    guardar_datos();
}
function guardar_datos(){
    var datos = lista_array.join("//");
    localStorage.setItem("lista_storage",datos);
    alert(datos);
}
