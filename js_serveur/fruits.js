var boiteOutil = require("./boiteOutils");


var fruitsTemplate = {
     creerOrange : function(){
        var orange = {
        nom : "orange",
        poids : boiteOutil.genererChiffreAleatoire(110, 150),
        prix : 70
        }
        return orange;
    },
    creerClementine : function(){
        var clementine = {
            nom : "clementine",
            poids : boiteOutil.genererChiffreAleatoire(70, 110),
            prix : 30
        }
        return clementine;
    },
    creerFraise : function(){
        var fraise = {
            nom : "fraise",
            poids : boiteOutil.genererChiffreAleatoire(15, 30),
            prix : 15
        }
        return fraise;
    }
}
module.exports = fruitsTemplate;