var num1 = "";
var num2 = "";
var opera = null;
var expressio = "";

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
    expressio = "";
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

    expressio = `${num2} ${simbol}`;
    mostrarOperacio();
}

function esIgual() {
    if (num1 === "" || opera == null) return;

    const numeroActual = parseFloat(num1);
    let resultado;

    
    switch (opera) {
        case 1: resultado = parseFloat(num2) + numeroActual; break;
        case 2: resultado = parseFloat(num2) - numeroActual; break;
        case 3: resultado = parseFloat(num2) * numeroActual; break;
        case 4: resultado = parseFloat(num2) / numeroActual; break;
        case 5: resultado = Math.pow(parseFloat(num2), numeroActual); break;
    }

    num1 = resultado.toString();
    num2 = "";
    opera = null;
    expressio = num1;
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
