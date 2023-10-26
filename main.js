
const firstName = prompt("Scrivi il tuo nome");
const lastName = prompt("Scrivi il tuo cognome");
const favColor = prompt("Scrivi il tuo colore preferito");
const suffix = "#23";

//qui Luca ha inserito dei console.log e poi ha poi decommentato i primi 3:
//console.log("firstName", firstName)
//console.log("lastName", lastName)
//console.log("favColor", favColor)
//console.log("suffix", suffix)

let genPassword = userName + userSurname + userFavColor + "#23"

//Luca ha fatto const password = userName + userSurname + userFavColor + "#23"

document.getElementById("welcome").innerHTML = "Benvenuto, " + userName;
document.getElementById("password").innerHTML = "La tua password generata è " + genPassword;