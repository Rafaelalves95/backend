function soma(a,b) {
    return a + b;
}

function somaTotal(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.lenght; i += 2) {
        total += soma(numeros[i], numeros [i+ 1]);
    }
    return total;
}

console.log(somaTotal([1,2,3,4,5,6]));
