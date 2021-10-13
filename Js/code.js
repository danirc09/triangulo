function trian() {
    let numero = document.getElementById("num").value;
    console.log(numero);
    resultado = '';
    piramide = '';
    for (i = 0; i < numero; i++) {
        piramide += "#";
        resultado += "<p>" + piramide + "</p>";
    }
    document.getElementById("tri").innerHTML = resultado;
}