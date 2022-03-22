let CreationTableauLangages =  () => {
    return ["Html","CSS","Java","PHP"];
}

let CreationTableauNombres =  () => {
    return [0, 1, 2, 3, 4, 5];
}

let RemplacementElement =  (langages) => {
    langages.splice(2, 0, "Javascript");
    langages.splice(3, 1);
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python');
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift('Html');
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(',');
}

let ConversionTableauChaine =  (langages) => {
    return langages.join();
}

let TriTableau =  (reseaux_sociaux) => {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}

let InversionTableau =  (langages) =>{
    langages.reverse();
    return langages;
}