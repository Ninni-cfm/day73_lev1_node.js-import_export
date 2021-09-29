// gib nur das ERSTE Element des Arrays zurück
function firstElement(arr) {
    return arr[0];
}

// gib nur das LETZTE Element des Arrays zurück
function lastElement(arr) {
    return arr[arr.length - 1];
}

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
function allButFirst(arr) {
    return arr.slice(1, arr.length);
}

// gib alle AUSSER dem letzten Element des Arrays zurück
function allButLast(arr) {
    return arr.slice(0, arr.length - 1);
}

// gib das Element zurück, das an Position n steht
// (du brauchst einen zweiten Parameter in deiner function)
// wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück
function nthElement(arr, nth) {
    return arr[(nth >= 0) && (nth < arr.length) ? nth : arr.length - 1];
}

// schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]
function removeElement(arr, elt) {
    while (arr.includes(elt)) {
        arr.splice(arr.indexOf(elt), 1);
    }
    return arr;
}

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht.Entferne die doppelten Elemente!
// => Input: [1, 6, 9, 2, 1, 6, 7, 10]
// => Output: [1, 6, 9, 2, 7, 10]
function uniqueArray(arr) {
    let tmp = [...arr]
    let i = 0;
    while (i < tmp.length - 1) {
        while (tmp.indexOf(tmp[i], i + 1) > i) {
            tmp.splice(tmp.indexOf(tmp[i], i + 1), 1);
        }
        i++;
    }
    return tmp;
}

// gib die Summe des Arrays zurück
function arrSum(arr) {
    return (arr.reduce((prev, next) => prev + next));
}

// die function bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
function randomBetween(s, e) {
    return Math.floor(Math.random() * (e - s) + s);
}


// Erstelle eine function, der ein String übergeben wird.Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
function firstLetterToUpper(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// Erstelle eine function, der ein String übergeben wird.Sie soll den gesamten String in Großbuchstaben umwandeln
function stringToUpper(str) {
    return str.toUpperCase();
}

// Erstelle eine function, mit zwei Parametern.Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt
//     => Input: (‘Test’, ‘t’)
// => Output: true 
// => Input: (‘Test’, ‘q’)
// => Output: false
function firstEqualsLast(str) {
    return str[0] === str[str.length - 1];
}


//****************************************************************************
// export all functions as an object
module.exports = {
    firstElement,
    lastElement,
    allButFirst,
    allButLast,
    nthElement,
    removeElement,
    uniqueArray,
    arrSum,
    randomBetween,
    firstLetterToUpper,
    stringToUpper,
    firstEqualsLast
}