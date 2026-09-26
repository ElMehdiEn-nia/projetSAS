const prompt = require("prompt-sync")();
let candidat = [
    {
    cin : "M724710",
    nom : "Baraka",
    prénom : "Nizar",
    partiPolitique : "PI",
    age : 35,
    votes : 12000},
    {
        cin : "M734834",
        nom : "Bensaid",
        prénom : "Mehdi",
        partiPolitique : "PAM",
        age : 41,
        votes : 9467},
    {
        cin : "K244765",
        nom : "El Houaichri",
        prénom : "Abdelkarim",
        partiPolitique : "PJD",
        age : 56,
        votes : 11532},
    {
        cin : "k347654",
        nom : "El Amrani",
        prénom : "Ali",
        partiPolitique : "RNI",
        age : 35,
        votes : 10854
    }]
    

let votes = [];
let candidats = [];
let electeurs = [];
function modifierCandidat(){
    for (let i = 0; i < candidats.length; i++){
        if (candidats[i].cin === cin){
            candidats[i].age = Number(prompt("Entrez le nouvel age :"));
            candidats[i].parti = prompt("Entrez le nouveau parti politique :");
            console.log("Candidat modifié avec succès !");
            return;
        }
    }
    console.log("Candidat non trouvé !");
}
function nombreDeVotes(){
    let total = 0;
    candidats.forEach(candidat => {total += candidat.votes;});
    console.log("Nombre total de votes :", total);
}
function top3Candidats(){
    let classement = candidats.sort((a, b) => b.votes - a.votes);
    console.log("Top 3 candidats :");
    for (let i = 0; i < Math.min(3, classement.length); i++) {
    
    }
}
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
    const cinExiste = candidats.some(c => c.cin === cin);
    if (!cinExiste) {
        candidats.push(candidat);
        console.log("Candidat ajouté avec succès !");
    } else {
        console.log("Candidat avec ce CIN existe déjà !");
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
    let cin = prompt("Entrez le CIN du candidat à rechercher :");
    let candidat = candidats.filter(c => c.cin === cin);
    if (candidat.length > 0) {
        console.log("Candidat trouvé :");
        candidat.forEach(c => console.log(candidat));
    } else {
        console.log("Candidat non trouvé !");
    }
}

function statistiques(){
    let total = candidats.length;
    let acceptes = 0;
    let refuses = 0;
    candidats.forEach(candidat => {
        if (candidat.statut === "accepté") {
            acceptes++;
        } else if (candidat.statut === "refusé") {
            refuses++;
        }
    });
    console.log("Total :", total);
    console.log("Acceptés :", acceptes);
    console.log("Refusés :", refuses);
}
let totalVotes = 0
candidats.forEach(candidat => {
    totalVotes += candidat.votes;
});
console.log(" STATISTIQUES ");
console.log("Nombre de candidats :", candidats.length);
console.log("Nombre total de votes :", totalVotes);
function supprimerUnCandidat(){
    let cin = prompt("Entrez le CIN du candidat à supprimer :");
    let index = candidats.findIndex(c => c.cin === cin);
    if (index !== -1){
        candidats.filter(c => c.cin !== cin);
        console.log("Candidat supprimé avec succès");}
        else{
        console.log("Candidat introuvable !");
    }
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
            9. Modifier un candidat
            10. Top 3 candidats
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