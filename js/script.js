var num1 = "";
var num2 = "";
var opera = null;
var expresio = "";

function assignarNumero(numero) {
    num1 += numero;
    refrescar();
    mostrarOperacio();
}

function posarComa() {
    if (!num1.includes('.')) {
        num1 += '.';
    }
    refrescar();
    mostrarOperacio();
}

function donarC() {
    num1 = "";
    num2 = "";
    opera = null;
    expresio = "";
    refrescar();
    document.getElementById("valor_num").innerHTML = ""; 
}

function operar(valor) {
    if (num1 === "") return;

    num2 = num1;
    num1 = "";
    opera = valor;

    let simbol = "";
    switch (valor) {
        case 1: simbol = "+"; break;
        case 2: simbol = "-"; break;
        case 3: simbol = "*"; break;
        case 4: simbol = "/"; break;
        case 5: simbol = "^"; break;
    }

    expresio = `${num2} ${simbol}`;
    mostrarOperacio();
}

function esIgual() {
    if (num1 === "" || opera == null) return;

    const numeroActual = parseFloat(num1);
    let resultat;

    switch (opera) {
        case 1: resultat = parseFloat(num2) + numeroActual; break;
        case 2: resultat = parseFloat(num2) - numeroActual; break;
        case 3: resultat = parseFloat(num2) * numeroActual; break;
        case 4: resultat = parseFloat(num2) / numeroActual; break;
        case 5: resultat = Math.pow(parseFloat(num2), numeroActual); break;
    }

    num1 = resultat.toString();
    num2 = "";
    opera = null;
    expresio = num1;
    refrescar();
    document.getElementById("valor_num").innerHTML = ""; 
}

function refrescar() {
    document.getElementById("valor_num").value = num1 || 0;  
}

function mostrarOperacio() {
    if (opera === null) {
        document.getElementById("valor_num").innerHTML = num1;
    } else {
        let simbol = "";
        switch (opera) {
            case 1: simbol = "+"; break;
            case 2: simbol = "-"; break;
            case 3: simbol = "*"; break;
            case 4: simbol = "/"; break;
            case 5: simbol = "^"; break;
        }
        document.getElementById("valor_num").innerHTML = `${num2} ${simbol} ${num1}`;
    }
}

function donarCE() {
    num1 = num1.slice(0, -1);
    refrescar();
    mostrarOperacio();
}

function calcularArrel() {
    if (num1 === "") return;
    let resultat = Math.sqrt(parseFloat(num1));
    num1 = resultat.toString();
    expresio = `√(${num1})`;
    refrescar();
    mostrarOperacio();
}

function calcularLog() {
    if (num1 === "") return;
    let resultat = Math.log(parseFloat(num1));
    num1 = resultat.toString();
    expresio = `ln(${num1})`;
    refrescar();
    mostrarOperacio();
}

function calcularSinus() {
    if (num1 === "") return;
    let resultat = Math.sin(parseFloat(num1));
    num1 = resultat.toString();
    expresio = `sin(${num1})`;
    refrescar();
    mostrarOperacio();
}

function calcularQuocient() {
    if (num1 === "") return;
    let resultat = Math.cos(parseFloat(num1));
    num1 = resultat.toString();
    expresio = `cos(${num1})`;
    refrescar();
    mostrarOperacio();
}
