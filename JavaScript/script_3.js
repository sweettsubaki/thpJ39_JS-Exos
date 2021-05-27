console.log("Script n°3")
let num = prompt("Hello, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let i = 1; i <= num; i++){
    let result = "";

    for (let j = 1; j <= num - i; j++){
        result += " ";
    }
    
    for (let k = 1; k <= i; k++){
        result += "#";
    }
    console.log(result);
}
