let selectElementsStartingWithA = (array) => {
    array.shift();
    array.splice(1, 1);
    return array;
}

let selectElementsStartingWithVowel = (array) => {
    array.splice(0, 2);
    array.splice(1, 1);
    return array;
}

let removeNullElements = (array) => {
    array.splice(2, 2);
    return array;
}

let removeNullAndFalseElements = (array) => {
    array.splice(2, 3);
    return array;
}

let reverseWordsInArray = (array) => {
    let a = array.join();
    let b = a.split('').reverse().join('');
    let c = b.split(',');
    let d = c.reverse();
    return d;
}

let everyPossiblePair = (array) => {
    let arr1 = [];
    for(let i = 0; i < array.length; i ++){
        let arr2 = [];
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                console.log('same name');
            }else{
                // console.log(array[j]);
                arr2.push(array[j]);
            }
            arr2.sort();
        }
        
        arr1.push(arr2);
    }

    arr1.sort();
    return arr1;
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0, 3);
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    let join = array.join();
    let reverse = join.split('').reverse().join('');
    let sort = reverse.split(',').sort();

    let arr = [];
    let a, j, b;
    for(let i = 0; i < array.length; i++){
        a = sort.slice(i, i + 1);
        j = a.join();
        b = j.split('').reverse().join('');
        arr.push(b);
    }
    
    return arr;
}

let getFirstHalf = (string) => {
    let half = Math.round((string.length / 2));
    return string.substring(0, half);
}

let makeNegative = (number) => {
    if(number === Math.abs(number)){
        number = - number;
    }else{
        number = number;
    }
    return number;
}

let numberOfPalindromes = (array) => {
    let counter = 0;
    array.forEach(element => {
        // console.log(element);
        let a = element.split('').reverse().join('');
        if(a === element){
            // console.log('palyndrome');
            counter++;
        }
    });
    return counter;
}

let shortestWord = (array) => {
    let arr = [];
    array.forEach(element => {
        let length = element.length;
        arr.push(length);
    });

    arr.sort();
    let nb = arr[0];

    let final_arr = [];
    array.forEach(element => {
        if(element.length === nb){
            final_arr.push(element);
        }
    });

    let word = final_arr.join();

    return word;
}

let longestWord = (array) => {
    let arr = [];
    array.forEach(element => {
        let length = element.length;
        arr.push(length);
    });

    arr.sort();
    let nb = arr[arr.length - 1];

    let final_arr = [];
    array.forEach(element => {
        if(element.length === nb){
            final_arr.push(element);
        }
    });

    let word = final_arr.join();

    return word;
}

let sumNumbers = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });

    return sum;
}

let repeatElements = (array) => {
    let string = array.join();
    for(let i = 0; i < 1; i++){
        string += ("," + string);
    }
    let phrase = string.split(',');
    return phrase;
}

let stringToNumber = (string) => {
    let nb = parseFloat(string);
    return nb;
}

let calculateAverage = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    let average = sum / array.length;
    return average;
}

let getElementsUntilGreaterThanFive = (array) => {
    let arr = [], counter = 0;

    array.forEach(element => {
        counter++;
        if(counter <= 6){
            arr.push(element);
        }
    });
    return arr;
}

let convertArrayToObject = (array) => {
    let obj = {};

    for(let i = 0; i < array.length; i+=2){
        obj[array[i]] = array[i+1];
    }

    return obj;
}

let getAllLetters = (array) => {
    let join = array.join('');
    let arr = join.split('');
    arr.sort();
    let final = [...new Set(arr)];
    return final;
}

let swapKeysAndValues = (object) => {
    let nwObj = {};

    for(let key in object){
        // console.log(key);
        nwObj[object[key]] = key;
    }

    return nwObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    for(let key in object){
        sum += parseFloat(key);
        sum += parseFloat(object[key]);
    }
    return sum;
}

let removeCapitals = (string) => {
    let n_string = string.replace(/[A-Z]+/g, "");
    return n_string;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(day < 10){
        day = `0${day}`;
    }

    if(month < 10){
        month = `0${month}`;
    }

    let act_date = `${day}/${month}/${year}`;
    return act_date;
}

let getDomainName = (string) => {
    let split1 = string.split('@');
    let a = split1[1].toString();
    let split2 = a.split('.com');
    let b = split2[0].toString();
    return b;
}

let titleize = (string) => {
    // function toTitleCase(str) {
    //     return str.replace(
    //       /\w\S*/g,
    //       function(txt) {
    //         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //       }
    //     );
    //   }
    // return toTitleCase(string);
}

let checkForSpecialCharacters = (string) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(string.match(format)){
        return true;
    }else{
        return false;
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let asw = 1;
    for(let i = 1; i < number + 1; i++){
        asw *= i;
    }
    return asw;
}

let findAnagrams = (string) => {
    // let arr = string.split('');

    // let arr1 = [];
    // for(let i = 0; i < arr.length; i++){
    //     let arr2 = [];
    //     for(let j = 0; j < arr.length; j++){
    //         arr2.push(arr[j]);
    //     }
    //     arr1.push(arr2);
    // }

    // return arr;
}

let convertToCelsius = (number) => {
    let celsius = Math.round(((number - 32) * (5 / 9)));
    return celsius;
}

let letterPosition = (array) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let counter;
    let arr = [];
    
    array.forEach(elem1 => {
        counter = 0;
        alphabet.forEach(elem2 => {
            counter++;

            if(counter > 26){
                counter =1
            }

            if(elem1 === elem2){
                arr.push(counter);
            }
        });
    });
    
    return arr;
}
