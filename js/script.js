var num1, num2 = 0;
var opera;

function assignarNumero(numero) {
    if (num1==0 && num1!=='0.') {
        num1 = numero;
    } else {
        num1 += numero;
    }

    refrescar();
}

function posarComa() {
    if (num1.indexOf('.') == -1) {
        num1 += '.';
    } else if (num1==0) {
        num1 = '0.';
    }

    refrescar();
}

function donarC() {
    num1 = 0;
    num2 = 0;
    refrescar();
}

function operar(valor) {
    if (num1 == 0) {
        num1.parseFloat(document.getElementById("valor_num").value);
    }
    num2 = parseFloat(num1);
    num1=0;
    opera=valor;
}