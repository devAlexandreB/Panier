var fruitsTemplate = require("./fruits");
var boiteOutil = require("./boiteOutils");

var resultatOrange = false;
var resultatClementine = false;
var resultatFraise = false;
//var panier = genererPanierAleatoire();
// var imagePanier = document.querySelector(".panier");
//affichageListe();
var panier = {
    genererPanierAleatoire : function(){
        var panier = {
        orange : [],
        clementine : [],
        fraise : []
        }
    
        for(var i = 0; i< boiteOutil.genererChiffreAleatoire(2,5);i++){
            panier.orange.push(fruitsTemplate.creerOrange());
        }
        for(var i = 0; i< boiteOutil.genererChiffreAleatoire(2,7);i++){
            panier.clementine.push(fruitsTemplate.creerClementine());
        }
        for(var i = 0; i< boiteOutil.genererChiffreAleatoire(5,10);i++){
            panier.fraise.push(fruitsTemplate.creerFraise());
        }
        return panier;
    },
    
     calculPoidsPanierFruit : function(fruits){
        var calcul = 0;
        for(var i =0; i<fruits.length; i++){
            calcul += fruits[i].poids;
        }
        return calcul;
    },
    calculPrixPanierFruit : function(fruits){
        var calcul = 0;
        for(var i =0; i<fruits.length; i++){
            calcul += fruits[i].prix;
        }
        return calcul;
    },
     genererListe : function(fruits){
        var html = "";
        for(var i = 0; i<fruits.length;i++){
            html += "<li>"+ (i+1) + " - Poids : "+fruits[i].poids + " - Prix : "+ fruits[i].prix + "</li>";
        }
        return html;
    },
    verifierResultat : function(poids, prix, fruits){
        var poidsCalculMachine = this.calculPoidsPanierFruit(fruits);
        var prixCalculMachine = this.calculPrixPanierFruit(fruits);
        return poidsCalculMachine === parseInt(poids) && prixCalculMachine === parseInt(prix);
    }
}
module.exports = panier;

// function affichageListe(){
//     genererListeOrange();
//     genererListeFraise();
//     genererListeClementine();
// }

// function genererListeOrange(){
//     var orangeHtml = document.querySelector(".orange ul");
//     orangeHtml.innerHTML = genererListe(panier.orange);
// }
// function genererListeClementine(){
//     var clementineHtml = document.querySelector(".clementine ul");
//     clementineHtml.innerHTML = genererListe(panier.clementine);
// }
// function genererListeFraise(){
//     var fraiseHtml = document.querySelector(".fraise ul");
//     fraiseHtml.innerHTML = genererListe(panier.fraise);
// }



// function verifierResultatOrange(){
//     var poids = document.querySelector("#poidsOrange").value;
//     var prix = document.querySelector("#prixOrange").value;
//     var sectionResultat = document.querySelector(".orangeResultat");
//     var poidsTotalPanier = calculPoidsPanierFruit(panier.orange);
//     var prixTotalPanier = calculPrixPanierFruit(panier.orange);
//     if(poidsTotalPanier === parseInt(poids) && prixTotalPanier === parseInt(prix)){
//         sectionResultat.innerHTML = '<img src="check.gif" class="taille30">';
//         resultatOrange = true;
//         afficherMessageGain();
//     }else{
//         sectionResultat.innerHTML = '<img src="croix.png" class="taille30">';
//         resultatOrange = false;
//         afficherMessageGain();
//     }
// }
// function verifierResultatFraise(){
//     var poids = document.querySelector("#poidsFraise").value;
//     var prix = document.querySelector("#prixFraise").value;
//     var poidsTotalPanier = calculPoidsPanierFruit(panier.fraise);
//     var prixTotalPanier = calculPrixPanierFruit(panier.fraise);
//     var sectionResultat = document.querySelector(".fraiseResultat");

//     if(poidsTotalPanier === parseInt(poids) && prixTotalPanier === parseInt(prix)){
//         sectionResultat.innerHTML = '<img src="/check.gif" class="taille30">';
//         resultatFraise = true;
//         afficherMessageGain();
//     }else{
//         sectionResultat.innerHTML = '<img src="/croix.png" class="taille30">';
//         resultatFraise = false;
//         afficherMessageGain();
//     }
// }
// function verifierResultatClementine(){
//     var poids = document.querySelector("#poidsClementine").value;
//     var prix = document.querySelector("#prixClementine").value;
//     var poidsTotalPanier = calculPoidsPanierFruit(panier.clementine);
//     var prixTotalPanier = calculPrixPanierFruit(panier.clementine);
//     var sectionResultat = document.querySelector(".clementineResultat");

//     if(poidsTotalPanier === parseInt(poids) && prixTotalPanier === parseInt(prix)){
//         sectionResultat.innerHTML = '<img src="/check.gif" class="taille30">';
//         resultatClementine = true;
//         afficherMessageGain();
//     }else{
//         sectionResultat.innerHTML = '<img src="/croix.png" class="taille30">';
//         resultatClementine = false;
//         afficherMessageGain();
//     }
// }

// function afficherMessageGain(){
//     if(resultatClementine && resultatFraise && resultatOrange){
//         document.querySelector(".fin").innerHTML = "Vous avez reussi";
//     }
// }

// imagePanier.addEventListener("click", function(){
//     panier = genererPanierAleatoire();
//     affichageListe();
//     reinitialisationPageHTML();
//     resultatOrange = false;
//     resultatClementine = false;
//     resultatFraise = false;
// });

// function reinitialisationPageHTML(){
//     var sectionResultatOrange = document.querySelector(".orangeResultat");
//     var sectionResultatFraise = document.querySelector(".fraiseResultat");
//     var sectionResultatClementine = document.querySelector(".clementineResultat");
//     document.querySelector("#prixClementine").value = "";
//     document.querySelector("#prixFraise").value = "";
//     document.querySelector("#prixOrange").value = "";
//     document.querySelector("#poidsClementine").value = "";
//     document.querySelector("#poidsFraise").value = "";
//     document.querySelector("#poidsOrange").value = "";
//     document.querySelector(".fin").innerHTML = "";
//     sectionResultatClementine.innerHTML = "";
//     sectionResultatFraise.innerHTML = "";
//     sectionResultatOrange.innerHTML = "";
// }