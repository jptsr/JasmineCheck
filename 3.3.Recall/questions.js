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
        let a = element.split('').reverse().join('');
        if(a === element){
            counter++;
        }
    });
    return counter;
}

let shortestWord = (array) => {
    // let arr = [];
    // array.forEach(element => {
    //     let length = element.length;
    //     arr.push(length);
    // });

    // arr.sort();
    // let nb = arr[0];

    // let final_arr = [];
    // array.forEach(element => {
    //     if(element.length === nb){
    //         final_arr.push(element);
    //     }
    // });

    // let word = final_arr.join();

    return array.reduce((prev_word, current_word) => (prev_word.length <= current_word.length) ? prev_word : current_word);
}

let longestWord = (array) => {
    // let arr = [];
    // array.forEach(element => {
    //     let length = element.length;
    //     arr.push(length);
    // });

    // arr.sort();
    // let nb = arr[arr.length - 1];

    // let final_arr = [];
    // array.forEach(element => {
    //     if(element.length === nb){
    //         final_arr.push(element);
    //     }
    // });

    // let word = final_arr.join();

    return array.reduce((prev_word, current_word) => (prev_word.length >= current_word.length) ? prev_word : current_word);
}

let sumNumbers = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });

    return sum;
}

let repeatElements = (array) => {
    // let string = array.join();
    // for(let i = 0; i < 1; i++){
    //     string += ("," + string);
    // }
    // let phrase = string.split(',');
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseFloat(string);
}

let calculateAverage = (array) => {    
    return array.reduce((prev_val, current_val, index, arr) => (prev_val + current_val/arr.length), 0);
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0, 6);
}

let convertArrayToObject = (array) => {
    let obj = {};

    for(let i = 0; i < array.length; i+=2){
        obj[array[i]] = array[i+1];
    }

    return obj;
    // return array.reduce((pre, cur, index, arr) => ({...pre, [arr[index]] : cur}), {});
}

let getAllLetters = (array) => {
    let join = array.join('').split('').sort();
    let final = [...new Set(join)];
    return final;
}

let swapKeysAndValues = (object) => {
    let nwObj = {};

    for(let key in object){
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
    return string.replace(/[A-Z]+/g, "");
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
    let final_arr = [];
    let not = ['and', 'the'];
    let splitPoint = string.split('.');
    let firstPhrase = true;

    splitPoint.forEach(el1 => {
        console.log('phrase');
        let arr = [];
        if(firstPhrase){
            el1 = el1.charAt(0).toUpperCase() + el1.substring(1).toLowerCase();
            firstPhrase = false;
        }else{
            el1 = ' ' + el1.charAt(1).toUpperCase() + el1.substring(2).toLowerCase();
        }

        el1.split(' ').forEach(el2 => {
            let same = false;

            not.forEach(el3 => {
                if(el3 === el2){
                    same = true;
                }
            })

            if(!same){
                el2 = el2.charAt(0).toUpperCase() + el2.substring(1).toLowerCase();
                arr.push(el2);
            }else{
                arr.push(el2);
            }
        })

        final_arr.push(arr.join(' '));
    })

    return final_arr.join('.');
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
    let arr = string.split('');

    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        let arr2 = [];
        // arr2.push(arr[i]);
        for(let j = 0; j < arr.length; j++){
            if(!(arr[i] === arr[j])){
                arr2.push(arr[j]);
            }
        }
        
        arr1.push(arr2.join().replace(/[,]+/g, ""));
    }

    arr1.sort();

    return arr1;
}

let convertToCelsius = (number) => {
    return Math.round(((number - 32) * (5 / 9)));
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
