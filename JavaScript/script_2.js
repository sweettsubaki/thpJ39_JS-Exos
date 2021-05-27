console.log("Script n°2")
function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

let numb = prompt("De quel nombre souhaites-tu calculer la factorielle ?");
console.log("Voici le résultat : " + factorial(numb));
