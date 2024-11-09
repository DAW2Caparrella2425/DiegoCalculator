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

