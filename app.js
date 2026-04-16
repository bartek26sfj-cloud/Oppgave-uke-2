/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

function sjekk(tall) {
  if (tall % 8 === 0) {
    return "Partall";
  }
  //Hvis tallet er et partall//
  else {
    return "Oddetall";
  }
  //Hvis tallet er et oddetall//
}

console.log(sjekk(69));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

function goodnightWords(text) {
  return text.toUpperCase() + "!";
}
console.log(goodnightWords("Sleep Well"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/
//Funksjonen dagtid bruker to argumenter: name (navn) og time (klokkeslett)//
function velkomstMelding(navn, klokkeslett) {
  if (klokkeslett === undefined) {
    return "Fail: Ugyldig tid";
  }
  // Sjekker om tiden er innenfor/utenfor området (0-23)
  if (klokkeslett < 0 || klokkeslett > 23) {
    return "Ugyldig tid";
  }
  // Sjekker hvilken del av dagen basert på verdien av klokkeslett//
  if (klokkeslett >= 0 && klokkeslett <= 5) {
    return `God natt ${navn}`;
  } else if (klokkeslett >= 6 && klokkeslett <= 11) {
    return `God morgen ${navn}`;
  } else if (klokkeslett >= 12 && klokkeslett <= 17) {
    return `God dag ${navn}`;
  } else if (klokkeslett >= 18 && klokkeslett <= 23) {
    return `God kveld ${navn}`;
  }
}
// Funksjon med forskjellige navn og klokkeslett//
console.log(velkomstMelding("Rick", 7));
console.log(velkomstMelding("Dick", 21));
console.log(velkomstMelding("Oscar", 23));
console.log(velkomstMelding("Alvaro", 4));
console.log(velkomstMelding("Gisselle", 15));
console.log(velkomstMelding("Gucio", 3));
console.log(velkomstMelding("Kasper", 24));
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

let arr = ["Audi", "Bentley", "Citroen", "Opel", "Kia", "Peugeot"];

function carBrand(arr) {
  let result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(carBrand(arr));
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

function fixText(text) {
  return text.trim().replace("vanskelig", "gøy");
}
console.log(fixText("Javascript er vanskelig"));

function replaceWord(text2) {
  return text2.trim().replace("vanskelig", "super" + " gøy");
}
console.log(replaceWord("Det er vanskelig å bruke metoder"));

function fixWord(text3) {
  return text3.trim().replace("extra" + " vanskelig", "extra" + " gøy");
}
console.log(fixWord("extra vanskelig"));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

//const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

items.shift();
items.splice(2, 1, "Linjal");
items.splice(0, 2, "Markeringpenn");
let result = items.join(" | ");
console.log(result);

let withE = items.filter(function (element) {
  return element.includes("e");
});

console.log(withE);
/******************************************************************************/
