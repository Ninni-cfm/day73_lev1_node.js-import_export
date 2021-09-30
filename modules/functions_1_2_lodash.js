const _ = require('lodash');

// gib nur das ERSTE Element des Arrays zurück
function firstElement(arr) {
    return _.head(arr);
}

// gib nur das LETZTE Element des Arrays zurück
function lastElement(arr) {
    return _.last(arr);
}

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
function allButFirst(arr) {
    return _.tail(arr);
}

// gib alle AUSSER dem letzten Element des Arrays zurück
function allButLast(arr) {
    return _.initial(arr);
}

// gib das Element zurück, das an Position n steht
// (du brauchst einen zweiten Parameter in deiner function)
// wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück
function nthElement(arr, nth) {
    if ((nth >= 0) && (nth < arr.length))
        return _.nth(arr, nth);

    return _.last(arr);
}

// schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]
function removeElement(arr, elt) {
    return _.remove(arr, elt);
}

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht.Entferne die doppelten Elemente!
// => Input: [1, 6, 9, 2, 1, 6, 7, 10]
// => Output: [1, 6, 9, 2, 7, 10]
function uniqueArray(arr) {
    return _.uniq(arr);
}

// gib die Summe des Arrays zurück
function arrSum(arr) {
    return _.sum(arr);
}

// die function bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
function randomBetween(s, e) {
    return _.random(s, e, false);
}


// Erstelle eine function, der ein String übergeben wird.Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
function firstLetterToUpper(str) {
    return _.upperFirst(str);
}

// Erstelle eine function, der ein String übergeben wird.Sie soll den gesamten String in Großbuchstaben umwandeln
function stringToUpper(str) {
    return _.toUpper(str);
}

// Erstelle eine function, mit zwei Parametern.Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt
//     => Input: (‘Test’, ‘t’)
// => Output: true 
// => Input: (‘Test’, ‘q’)
// => Output: false
function firstEqualsLast(str) {
    return _.endsWith(_.toUpper(str), _.toUpper(str[0]));
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