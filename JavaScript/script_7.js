let question = prompt("Quelque chose à dire ? tape 'quit' pour quitter.");
//Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
//Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
//Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
//Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
//Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
let splitted = question.split("");
    if (splitted[splitted.length - 1] === '?') {
        console.log("Ouais Ouais...");
    } else if (question.includes("Fortnite") || question.includes("fortnite") || question.includes("fortnite".toUpperCase())
    ) {
        console.log("On s'fait une partie soum-soum ??");
    } else if (question.toUpperCase() === question && question !== "") {
        console.log("Pwaaaaaah, calme toi...");
    } else if (question === "") {
        console.log("T'es en PLS ???");
    } else {
        console.log("Balek.");
    }