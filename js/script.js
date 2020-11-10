// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// CREO UN OGGETTO(STUDENTE)
var studente = {
  name : "marco",
  surname : "polello",
  eta : 26
};
  /*
  console.log(studente);
  console.log(studente.name);
  console.log(studente.surname);
  console.log(studente.eta);
  */
// STAMPO TUTTE LE PROPRIETA DELL'OGGETTO
for (var key in studente) {
  console.log(key + " " + studente[key]);
}



// CREO UN ARRAY DI OGGETTI
var studenti =
[
  {
    name : "luca",
    surname : "baldan",
    eta : "25"
  },
  {
    name : "anna",
    surname : "rossi",
    eta : "26"
  },
  {
    name : "elisa",
    surname : "verdi",
    eta : "27"
  }
];

/*
//////////// 1 METODO (prove per comprendere meglio)
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < studenti.length; i++) {
  // var elementi = studenti [i]
  // console.log(elementi); //ELEMENTI ARRAY
  var studenteA = studenti[0];
  var studenteB = studenti[1];
  var studenteC = studenti[2];
}
  console.log(studenteA.name, studenteA.surname);
  console.log(studenteB.name, studenteB.surname);
  console.log(studenteC.name, studenteC.surname);


/*  for (var key in studenti) {
    // console.log(elementi[key]); // MI STAMPA TUTTE LE CHIAVI DELL'OGGETTO E I CORRISPETTIVI VALORI
  }  */


////////////     2 METODO     ////////////
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].name, studenti[i].surname);
}


// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newName = prompt("inserisci un nome");
var newSur = prompt("inserisci un cognome");
var newAge = parseInt(prompt("inserisci un'età"));


var objectUser = {
  name : newName,
  surname : newSur,
  eta : newAge
}
console.log(objectUser);
studenti.push(objectUser);

// ciclo il nuovo array x stampare gli attuali studenti
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].name, studenti[i].surname,studenti[i].eta);
}
