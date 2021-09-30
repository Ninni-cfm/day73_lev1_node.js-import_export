// Backend: Node.js CodeFlow Übung lev1_1: import / export
// 
// Aufgabenstellung
// Erstelle dir drei Dateien. In der einen sollen die function liegen, in einer die Daten und in der dritten wollen wir alles zusammen führen.
// Arbeite Schritt für Schritt und teste viel!
// Am Ende soll das ein Array mit Text sortiert werden. Schaue hier nach ;-)
// Der Inhalt für deine data.js liegt im Kommentarbereich.
// Importiere deine function und die data in deine Hauptdatei .
let functions_1_1 = require('./modules/functions_1_1');
let data_1_1 = require('./data/data_1_1');
console.log('Backend: Node.js CodeFlow Übung lev1_1: import / export');
console.log(functions_1_1.sortNumbers(data_1_1.arrayNumbers));
console.log(functions_1_1.sortText(data_1_1.arrayCars));



// Backend: Node.js CodeFlow Übung lev1_2: import / export
// 
// Aufgabenstellung
// Erstelle dir eine Datei, in der deine function gespeichert werden sollen.
// Diese sollen am Ende exportiert werden.
// Erstelle dir eine Datei, in der deine Data gespeichert werden soll.
// Importiere diese Funktionen / Data in deiner index.js

// Funktionen
// alle functions bekommen ein Array übergeben.
// Jeder der folgenden Punkte ist eine EIGENE Funktion!

// gib nur das ERSTE Element des Arrays zurück
// gib alle AUSSER dem letzten Element des Arrays zurück
// gib nur das LETZTE Element des Arrays zurück
// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
// gib das Element zurück, das an Position n steht(du brauchst einen zweiten Parameter in deiner function), wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück
// schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht.Entferne die doppelten Elemente!
// => Input: [1, 6, 9, 2, 1, 6, 7, 10]
// => Output: [1, 6, 9, 2, 7, 10]
// gib die Summe des Arrays zurück

// hier function ohne Array, trotzdem mit Parametern
// Jeder der folgenden Punkte ist eine EIGENE Funktion!

// die function bekommt zwei Parameter übergeben.Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
// Erstelle eine function, der ein String übergeben wird.Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
// Erstelle eine function, der ein String übergeben wird.Sie soll den gesamten String in Großbuchstaben umwandeln
// Erstelle eine function, mit zwei Parametern.Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt
// => Input: (‘Test’, ‘t’)
// => Output: true 
// => Input: (‘Test’, ‘q’)
// => Output: false
let functions_1_2 = require('./modules/functions_1_2_lodash');
let data_1_2 = require('./data/data_1_2');

console.log('\nBackend: Node.js CodeFlow Übung lev1_2: import / export');
console.log('gib nur das ERSTE Element des Arrays zurück');
console.log(functions_1_2.firstElement(data_1_2.arr1));

console.log('gib alle AUSSER dem letzten Element des Arrays zurück');
console.log(functions_1_2.allButLast(data_1_2.arr1));

console.log('gib nur das LETZTE Element des Arrays zurück');
console.log(functions_1_2.lastElement(data_1_2.arr1));

console.log('gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück');
console.log(functions_1_2.allButFirst(data_1_2.arr1));

console.log('gib das Element zurück, das an Position n steht');
console.log('(du brauchst einen zweiten Parameter in deiner function),');
console.log('wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück');
console.log(functions_1_2.nthElement(data_1_2.arr1, 5));

console.log('die function bekommt zwei Parameter übergeben.Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt');
console.log(functions_1_2.randomBetween(5, 10));

console.log('schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt');
console.log('=> Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)');
console.log('=> Output: [“stay”, “stay5”, 22, true]');
console.log(functions_1_2.removeElement(data_1_2.arr2, "remove"));

console.log('gib ein Array zurück, dass nur aus einzigartigen Werten besteht.Entferne die doppelten Elemente!');
console.log('=> Input: [1, 6, 9, 2, 1, 6, 7, 10]');
console.log('=> Output: [1, 6, 9, 2, 7, 10]');
console.log(functions_1_2.uniqueArray(data_1_2.arr1));

console.log('gib die Summe des Arrays zurück');
console.log(functions_1_2.arrSum(data_1_2.arr1));

console.log('die function bekommt zwei Parameter übergeben.Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt');
console.log(functions_1_2.randomBetween(5, 10));

console.log('Erstelle eine function, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt');
console.log(functions_1_2.firstLetterToUpper("the quick brown fox..."));

console.log('Erstelle eine function, der ein String übergeben wird. Sie soll den gesamten String in Großbuchstaben umwandeln');
console.log(functions_1_2.stringToUpper("the quick brown fox..."));

console.log('Erstelle eine function, mit zwei Parametern. Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt')
console.log('=> Input: (‘Test’, ‘t’)');
console.log('=> Output: true ');
console.log(functions_1_2.firstEqualsLast("Test", "t"))

console.log('=> Input: (‘Test’, ‘q’)');
console.log('=> Output: false');
console.log(functions_1_2.firstEqualsLast("Test", "q"))




// Backend: Node.js CodeFlow Übung lev1_3: import / export

// Aufgabenstellung
// Erstelle eine Datei, in der deine function gespeichert werden sollen.
// Diese sollen am Ende exportiert werden.
// Importiere diese function in deiner index.js

// Erstelle eine function, der 3 Parameter übergeben werden sollen. Zwei Zahlen und ein Zeichen (+, -, /, *)
// je nachdem, was für ein Zeichen übergeben wird, soll die function addieren, subtrahieren, dividieren oder multiplizieren
// importiere diese function in deiner index.js und teste sie.

// Bonus: Überprüfe, ob die Eingabe richtig war, falls nicht gib einen Fehler zurück
const myMath = require('./modules/functions_1_3');
console.log(myMath(5, 3, '+'));
console.log(myMath(5, 3, '-'));
console.log(myMath(5, 3, '*'));
console.log(myMath(15, 3, '/'));
console.log(myMath(5, 0, '/')); // should be error, division through zero, but it's JS :(
console.log(myMath(5, 3, 'a')); // error, invalid operator 
