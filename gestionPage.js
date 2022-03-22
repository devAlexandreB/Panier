var fs = require("fs");
var gestionPage = {
    envoyerData : function(data, reponse){
        reponse.writeHead(200, {'Content-Type' : data.contentType});
        reponse.write(data.dataAEnvoyer);
        reponse.end();
    },
    prepareData : function(monObjUrl, monObjetToSupplant){
        var data = {
            contentType : "",
            dataAEnvoyer : "",
        };
        if(monObjUrl.pathname === "/"){
            monObjUrl.pathname = "/index.html";
        }
        var preparationData = this.gestionExtension(monObjUrl);
        data.contentType = preparationData.contentType;
        if(monObjUrl.pathname !== "/favicon.ico"){
            try{
                data.dataAEnvoyer = fs.readFileSync(preparationData.dossier +"/"+ monObjUrl.pathname.substring(1, monObjUrl.pathname.length), preparationData.encodage);
                if(preparationData.extension === ".html"){
                    var header = fs.readFileSync("./html/Common/header.html", preparationData.encodage);
                    var footer = fs.readFileSync("./html/Common/footer.html", preparationData.encodage);
                    data.dataAEnvoyer = header + data.dataAEnvoyer + footer;
                    data.dataAEnvoyer = data.dataAEnvoyer.supplant(monObjetToSupplant);
                }
            }catch(error){
                console.log("Ici erreur : "+error);
            }
        }
        return data;
    }, 
    gestionExtension : function(monObjUrl){
        var indexDuPoint = monObjUrl.pathname.indexOf(".");
        var extension = monObjUrl.pathname.substring(indexDuPoint, monObjUrl.pathname.length);
        var preparationData = {
            contentType : "",
            dossier : "",
            encodage : "", 
            extension : ""
        };
        preparationData.extension = extension;
        switch(extension){
            case ".html" : 
                preparationData.contentType = "text/html";
                preparationData.dossier = "html/";
                preparationData.encodage = "UTF-8";
            break;
            case ".css" : 
                preparationData.contentType = "text/css";
                preparationData.dossier = "css/";
            break;
            case ".jpg" :  
                preparationData.contentType = "image/jpeg";
                preparationData.dossier = "images/";
            break;
            case ".png" :  
                preparationData.contentType = "image/png";
                preparationData.dossier = "images/";
            break;
            case ".gif" :  
                preparationData.contentType = "image/gif";
                preparationData.dossier = "images/";
            break;
            case ".js" :  
                preparationData.contentType = "application/javascript";
                preparationData.dossier = "js_client/";
            break;
            default : 
                preparationData.contentType = "";
            break;
        }
        return preparationData;
    }
}
module.exports = gestionPage;