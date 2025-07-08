/* créer un compte */
const createNewAccountButton = document.getElementById("create-new-account_submit");
const idText = document.getElementById("create-username");
const mailText = document.getElementById("create-mail");
const passwordText = document.getElementById("create-password");
const formulaires = document.getElementById("bloc-1_log-in");



createNewAccountButton.onclick = function () {
    let identifiant = idText.value;
    let mail = mailText.value;
    let pass = passwordText.value;
    let LogInadress = ("../index.html");
    let add = ("http://localhost:3000/users/add");
    if (identifiant.length >= 7 && mail.length >= 7 && pass.length >= 7) {
        if (identifiant !== pass) {
            if (mail !== pass) {
                alert("ça marche")
                //formulaires.action = LogInadress;
            } else {
                alert("erreur : le mot de passe le même que l'adresse mail")
            }
        } else {
            alert("erreur : le mot de passe le même que l'identifiant")
        }
    }



}