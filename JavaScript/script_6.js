function acidsAmines(aRN){
    let threeLetter = aRN.length / 3;
    let arnArray = [];
    for (let i = 0; i < threeLetter; i++){
        arnArray.push(aRN.slice(3 * i, 3 * (i + 1)));
    }

    let acidsAmines = [];

    for (let index in arnArray) {
        switch (arnArray[index]) {
            case "UCU":
            case "UCC":
            case "UCA":
            case "UCG":
            case "AGU":
            case "AGC":
                acidsAmines.push("Sérine");
                break;
            case "CCU":
            case "CCC":
            case "CCA":
            case "CCG":
                acidsAmines.push("Proline");
                break;
            case "UUA":
            case "UUG":
                acidsAmines.push("Leucine");
                break;
            case "UUU":
            case "UUG":
                acidsAmines.push("Phénylalanine");
                break;
            case "CGU":
            case "CGC":
            case "CGA":
            case "CGG":
            case "AGA":
            case "AGG":
                acidsAmines.push("Arginine");
                break;
            case "UAU":
            case "UAC":
                acidsAmines.push("Tyrosine");
                break;
        }
    }
    let resultProtein = acidsAmines.join('-');
    console.log(resultProtein);
}

acidsAmines("CCGUCGUUGCGCUACAGC");
acidsAmines("CCUCGCCGGUACUUCUCG");