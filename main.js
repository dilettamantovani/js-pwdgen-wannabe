
const userName = prompt("Scrivi il tuo nome");
const userSurname = prompt("Scrivi il tuo cognome");
const userFavColor = prompt("Scrivi il tuo colore preferito");

let genPassword = userName + userSurname + userFavColor + "#23"

document.getElementById("welcome").innerHTML = "Benvenuto, " + userName;
document.getElementById("password").innerHTML = "La tua password generata è " + genPassword;