// We take back the paramater of the ID, we parse it cleany first
// We take back the paramater of the ID, we parse it cleany first
const urlData = window.location.search;
const urlParams = new URLSearchParams(urlData);
const Account_ID = urlParams.get('ID');
const Account_Name = urlParams.get('Name');

var mysql = require('mysql');


<<<<<<< HEAD
// Redirection Index ou Inscript
document.getElementById("redirect_Index").addEventListener("click", function() {
=======
document.getElementById("redirect_Dashboard").addEventListener("click", function() {
>>>>>>> 601734e5565829044e752cdcc49fa61c49dee569
    window.location.href="index.html?Name="+Account_Name+"&ID="+Account_ID+"";
});
document.getElementById("redirect_Analyse").addEventListener("click", function() {
    window.location.href="analyse.html?Name="+Account_Name+"&ID="+Account_ID+"";
});
document.getElementById("redirect_Parameter").addEventListener("click", function() {
    window.location.href="parametre.html?Name="+Account_Name+"&ID="+Account_ID+"";
});
document.getElementById("redirect_Disconnection").addEventListener("click", function() {
    window.location.href="connexion.html";
}); 

