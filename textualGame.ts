const prompt = require("prompt-sync")();

let fstResp = prompt("Vous entrez dans une grotte : vous prenez à gauche (g), ou droite (d) ? ")
while(fstResp != "g" && fstResp != "d"){
    fstResp = prompt("entre la bonne valeur")
}
if (fstResp == "g"){
    console.log("vous commencez à affronter un Thomas des cavernes");
    let secResp = prompt("Il vous attaque : vous attaquez (a), vous vous défendez (d) ? ")
    while(secResp != 'a' && secResp !='d') {
        secResp = prompt('entre la bonne valeur')
    }
    if (secResp == "a") {
        console.log("Bravo le Thomas des cavernes est à terre (payez lui un macdo pour le heal)");
        let thdResp = prompt("Vous sortez de la caverne et rencontrez un nain vous lui parlez (p) vous tracez (t) ? ")
        while(thdResp !='p' && thdResp !='t') {
            thdResp = prompt('entre la bonne valeur')
        }
        if (thdResp == "p") {
            console.log("Bonjour jeune inconnu voici 100 balles aller tire toi maintenant");
            console.log("FIN DU JEU")

        } else {
            console.log("Vous traversez la route et vous vous faites écraser ...c'est con")
            console.log("FIN DU JEU")
        }
    } else {
        console.log("Vous êtes mort désolé: quand on vous attaque la meilleur réponse c'est l'attaque");
        console.log("FIN DU JEU")
        }
} else {
    console.log("vous vous manger un arbre en pleine tête");
    console.log("Vous avez une grosse bosse mais continuez d'avancer");
    let fthResp = prompt("Vous en avez plein le fiak vous vous arretez la (s), vous continuer parce que vous êtes un héro (h)")
    while(fthResp !='s' && fthResp !='h') {
        fthResp = prompt('entre la bonne valeur')
    }
    if (fthResp == "s") {
        console.log("trés bon choix je commence à en avoir plein le dos de taper ce code")
        console.log("FIN DU JEU")
    } else {
        console.log("Vous vous faites dévorer par un anaconda géant... ca sert à rien de jouer les héros")
        console.log("FIN DU JEU")
    }
}
