// // ES1: Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// // se v e’ minore di 18,  stampare in console  “insufficiente”
// // se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// // se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// // se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// // se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// // se v e’ uguale a 30, stampare in console:  “eccellente”

// let voto = prompt("inserisci voto");
// if(voto <= 18){
//     alert("insufficente");
// }
// else if(voto = 18 && voto <21){
//     alert("sufficente");
// }
// else if(voto = 21 && voto <24){
//     alert("sufficente");
// }
// else if(voto = 24 && voto <27){
//     alert("sufficente");
// }
// else if(voto = 27 && voto <29){
//     alert("sufficente");
// }
// else{
//     alert("eccellente");
// }



// // ES2:  Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.
// let num=2;
// for(i=0; i<=10; i++){
//     console.log(i*num);
// }


// Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…”
// Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.


// let temperatura=prompt("inserisci numero");


// if (temperatura < -10) {
//     alert("Copriti..");
// } else if (temperatura <0  && temperatura >=-10  ) {
//     alert("Non è tanto il freddo quanto l'umidità");
// } else if (temperatura >=0 && temperatura <20) {
//     alert("non ci sono piu’ le mezze stagioni");
// } else if (temperatura >=20 && temperatura <30) {
//     alert("mi dia una peroni sudata");
// } else{
//     alert("esplodi")
// }


let nome= "bruno"
let prova= `ciao io sono ${nome} e sono un studente `
console.log( prova);



// ES 4: Scrivere un programma che simuli un distributore di bevande:
// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza

let scelta=prompt('inserire numero corrispondente alla bevanda desiderata es:1=acqua \n 2=coca-cola \n 3=birra');

while(scelta!=1 && scelta!=2 && scelta!=3){

scelta=prompt('brutto scemo il numero è sbagliato,inserisci 1,2 o 3')
}

if(scelta==1){
alert( "è stata selezionata l'acqua" );
}else if(scelta==2)
{
alert( "è stata selezionata la coca-cola");

}else if(scelta==3)
{
alert( "è stata selezionata la birra");

} 