var http = require("http");
var url = require("url");
var queryString = require("querystring");
var panier = require("./js_serveur/panier");
require("remedial");
var gestionPage = require("./gestionPage");
const { countReset } = require("console");
const PORT = "8080";
var panierAleatoire = panier.genererPanierAleatoire();

var serveur = http.createServer(traitReq);
serveur.listen(PORT);

function traitReq(requete, reponse){
    var monObjUrl = url.parse(requete.url);
    if(requete.method === "GET"){
        var monObjQuery = queryString.parse(monObjUrl.query);
        if(monObjQuery.reload === "true"){
            panierAleatoire = panier.genererPanierAleatoire();
        }
    }
    var objetToSupplant = {
        listeOrange : panier.genererListe(panierAleatoire.orange),
        listeFraise : panier.genererListe(panierAleatoire.fraise),
        listeClementine : panier.genererListe(panierAleatoire.clementine),
        orangeResultat : "", 
        fraiseResultat : "", 
        clementineResultat : ""
    }
    if(requete.method === "POST"){
        let body = '';
        requete.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        requete.on('end', () => {
            var objetPoster = queryString.parse(body);
            if(objetPoster.poidsOrange !== undefined){
                var resultat = panier.verifierResultat(objetPoster.poidsOrange, objetPoster.prixOrange, panierAleatoire.orange);
                if(resultat){
                    objetToSupplant.orangeResultat = '<img src = "check.gif" width = 100>';
                }else{
                    objetToSupplant.orangeResultat = '<img src = "croix.png" width = 100>';
                }
            }else if(objetPoster.poidsClementine !== undefined){
                var resultat = panier.verifierResultat(objetPoster.poidsClementine, objetPoster.prixClementine, panierAleatoire.clementine);
                if(resultat){
                    objetToSupplant.clementineResultat = "<img src=\"check.gif\" width = 100>";
                }else{
                    objetToSupplant.clementineResultat = "<img src=\"croix.png\" width = 100>";
                }
            }else if(objetPoster.poidsFraise !== undefined){
                var resultat = panier.verifierResultat(objetPoster.poidsFraise, objetPoster.prixFraise, panierAleatoire.fraise);
                if(resultat){
                    objetToSupplant.fraiseResultat = '<img src = "check.gif" width = 100>';
                }else{
                    objetToSupplant.fraiseResultat = '<img src="croix.png" width = 100>';
                }
            }
            var data = gestionPage.prepareData(monObjUrl, objetToSupplant);
            gestionPage.envoyerData(data, reponse);
        });
    }
    if(monObjUrl.pathname === "/"){
        monObjUrl.pathname = "/index.html";
    }
    if(requete.method !== "POST"){
        var data = gestionPage.prepareData(monObjUrl, objetToSupplant);
        gestionPage.envoyerData(data, reponse);
    }
    
}