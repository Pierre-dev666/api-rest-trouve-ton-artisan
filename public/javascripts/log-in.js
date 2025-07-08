/* Se connecter */
localStorage.setItem("connection", 0);


const logInButton = document.getElementById("log-in_submit");
const idLogInText = document.getElementById("username");
const passLogInText = document.getElementById("pass");
const notConnected = document.getElementById("not-connected");
const connected = document.getElementById("connected");
const formulaires = document.getElementById("bloc-1_log-in");

logInButton.onclick = function () {
  let logInText = idLogInText.value;
  let passText = passLogInText.value;
  let identifiant = localStorage.getItem("myIdentifiant");
  let pass = localStorage.getItem("myPassword");
  let connectionShape = localStorage.getItem("connection");
  let LogInadress = ("./play.html");

  if (logInText == identifiant && passText == pass) {
    localStorage.setItem("connection", 1);
    let connectionShape = localStorage.getItem("connection");
    notConnected.style.display = "none";
    connected.style.display = "grid";
    formulaires.action = LogInadress;
  }
  else {
    localStorage.setItem("connection", 0);
    alert("Mot de passe incorrect")
    console.log("erreur: l'identifiant' entré est ", logInText)
    console.log("erreur: le bon identifiant est ", identifiant)
    console.log("erreur: le mot de passe entré est ", passText)
    console.log("erreur: le bon mot de passe est ", pass)

  }

}
