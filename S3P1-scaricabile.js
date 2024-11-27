


/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
let numb1 = 4
let numb2 = 4

let totale = crazySum(numb1,numb2)

function crazySum (valore1,valore2) {
    return valore1 + valore2 
}
console.log(totale)

if (numb1===numb2) {
  totale = totale * 3
}
console.log(totale)
*/


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 
let n = 80

let risultato = boundary(n)

function boundary (numb) {
    if (20 < n && n <=100 || n===400) {
      return true
    } else 
    return false
}
console.log(risultato)
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* 
let nome = "Paola"

let risultato = reverseString(nome)

function reverseString (string) {
    let splitString = string.split("")
    let reverseStr = splitString.reverse()
    let joinStr = reverseStr.join("")
    return joinStr
}
console.log(risultato)
*/

/* 
let nome = "Paola"

let risultato = reverseString(nome)

function reverseString (string) {
    return string.split("").reverse("").join("")
}
console.log(risultato)
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* 
let testo = "paola tarallo"

let upperFirstLetters = upperFirst(testo)

function upperFirst(str){
  let words = str.split(" ")
  let upperWords =[]
  for (let i of words){
  let upperLetters = i.charAt(0).toUpperCase() + i.slice(1)
  upperWords.push(upperLetters)
}
  return upperWords.join(" ")
}

console.log(upperFirstLetters)
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 
let lat1 = 4
let lat2 = 7

let rettangoloArea = area(lat1,lat2) 

function area (l1,l2) {
  return l1 * l2
}
console.log(rettangoloArea)
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 
let numb1= 60
let numb2 = 19

let risultato = crazyDiff(numb1,numb2)

function crazyDiff (n1,n2) {
 let sottrazione = n1 - n2
 if (sottrazione > 19){
   return Math.abs(sottrazione *3) 
 } else {
   return Math.abs(sottrazione)
 }
}
console.log(risultato)
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
