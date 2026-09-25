const prompt = require("prompt-sync")();
let condidats = {
    cin : "",
    nom : "",
    prénom : "",
    partiPolitique : "",

};
let votes = [];
let candidats = [];
let electeurs = [];
function ajouterCandidat(){
    let cin = prompt("Tapez votre CIN :");
    let age = Number(prompt("Votre age :"));
    let nom = prompt("Nom du candidat :");
    let prénom = prompt("Prénom du candidat :");
    let parti = prompt("Parti politique :");
    let candidat = {
        id: candidats.length + 1,
        nom: nom,
        cin: cin,
        prénom: prénom,
        parti: parti,
        age: age,
        electeurs: [],
    };
    candidats.push(candidat);
    if (candidat.cin!== cin)
        console.log("Candidat ajouté avec succès !");
    else if(candidat.cin === cin){
        console.log("Ce cin a déja fait,vous ne pouvez pas le utiliser encore")
    }
}
function afficherCIN(){
    let cin = prompt("Entrez votre CIN :");
    console.log("Votre CIN est :", cin);

}
function afficherCandidats(){
    if (candidats.length === 0)
{
    console.log("Aucun candidat.");
      return;
}
candidats.forEach(candidat => {
    console.log(`${candidat.id} - ${candidat.parti} - ${candidat.votes} votes`);
});
}
function voter(){
    afficherCandidats();

    let id = Number(prompt("Entrez ID du candidat :"));
    let candidat = candidats.find(c => c.id === id);
    if (candidat){
        candidat.votes++;
        console.log("Vote enregistré avec succès !");
    }
    else{
        console.log("Candidat introuvable !")
    }
}
function rechercherUnCandidat(){
    let candidats = [{nom: "Ennia", prénom: "El Mehdi", cin: "M724710",},
        {nom: "El Maslouhi", prénom: "Rim", cin: "M734834",},
        {nom: "Toumi", prénom:"Youssef", cin: "K244765",}
    ];
    let recherche = "El Mehdi";
    let candidat = candidats.find(c => c.nom === recherche);
    console.log(candidat);
}
function statistiques(){
    if (candidats.length === 0)
{
    console.log("Aucun candidat.");
    return;
}
let totalVotes = 0
candidats.forEach(candidat => {
    totalVotes += candidat.votes;
});
console.log(" STATISTIQUES ");
console.log("Nombre de candidats :", candidats.length);
console.log("Nombre total de votes :", totalVotes);
}
function supprimerUnCandidat(){
    let candidats = [];
    candidats.splice();
    console.log(candidats);
}
function ajouterPlusieursCandidats(){
    let n = Number(prompt("Combien des candidats ?"));
    for(i = 0; i < n; i++){
    ajouterCandidat()};
}
function menu(){
    let choix;
    do{
        console.log(` GESTION DES ELECTRONS 
            1. Ajouter un candidat
            2. Afficher votre CIN
            3. Afficher les candidats
            4. Enregistrer un vote
            5. Afficher les statistiques
            6. Ajouter plusieurs candidats
            7. Supprimer un candidat
            8. Rechercher un candidat
            0. Quitter`);
    choix = Number(prompt("Votre choix :"));
    switch (choix){
        case 1: 
            ajouterCandidat();
            break;
        case 2:
             afficherCIN();
            break;
        case 3:
             afficherCandidats();
            break;
        case 4: 
            voter();
            break;
        case 5:
            statistiques();
            break; 
        case 6:
            ajouterPlusieursCandidats();
        case 7:
            supprimerUnCandidat();
            break;
        case 8:
            rechercherUnCandidat();
            break;
        case 0: 
            console.log("Ok,au revoir !");
            break; 
            default: console.log("Choix invalide !");
        }

    } while (choix !==0);
}
menu();