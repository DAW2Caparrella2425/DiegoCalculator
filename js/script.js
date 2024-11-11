var num1 = "";
var num2 = 0;
var opera;

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
    num2 = 0;
    opera = null;
    refrescar();
    document.getElementById("valor_num").innerHTML = ""; 
}

function operar(valor) {
    if (num1 === "") return;

    num2 = parseFloat(num1);  
    num1 = "";  
    opera = valor;

    mostrarOperacio();
}

function esIgual() {
    if (num1 === "" || opera == null) return; 

    let resultat;
    const numeroActual = parseFloat(num1);

    switch (opera) {
        case 1: resultat = num2 + numeroActual; break;
        case 2: resultat = num2 - numeroActual; break;
        case 3: resultat = num2 * numeroActual; break;
        case 4: resultat = num2 / numeroActual; break;
        case 5: resultat = Math.pow(num2, numeroActual); break;
    }

    num1 = resultat.toString();  
    num2 = resultat;
    opera = null;
    refrescar();
    document.getElementById("valor_num").innerHTML = ""; 
}

function refrescar() {
    document.getElementById("valor_num").value = num1 || 0;  
}

function mostrarOperacio() {
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

function donarCE() {
    num1 = num1.slice(0, -1);
    refrescar();
    mostrarOperacio();
}
