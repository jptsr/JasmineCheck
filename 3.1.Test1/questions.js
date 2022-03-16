
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    let char = texte.charAt(4);
    return char;
}
let afficher9Car =  (texte) => {
    let chars = texte.substring(0, 9);
    // let chars = texte.slice(0, 9);
    return chars;
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    let new_txt = texte.trim();
    return new_txt;
}
let IsString =  (texte) => {
    let isTrue = false;
    if(typeof texte === 'string'){
        isTrue = true;
        return isTrue;
    }
}
let AfficherExtensionString =  (texte) => {
    let extension = texte.split('.').pop();     // split at the '.', push evreything in array and return the last word
    return extension;
}
let NombreEspaceString =  (texte) => {
    let split = texte.split(' ');
    let nb_space = split.length - 1;
    return nb_space;
}
let InverseString =  (texte) => {
    let new_txt = texte.split('').reverse().join('');
    return new_txt;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let arr = [], absNum;
    array.forEach(element => {
        absNum = Math.abs(element);
        arr.push(absNum);
    });
    return arr;
}
let sufaceCercle =  (rayon) => {
    let surface = Math.round(Math.PI * Math.pow(rayon, 2));
    return surface;
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
let calculIMC =  (poids, taille) => {
    let imc = poids / Math.pow(taille, 2);
    let result = imc.toFixed(2);
    return parseFloat(result);
}
