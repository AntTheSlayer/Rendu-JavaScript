let opp1 = {
    nom: "Renekton",
    hp: 70,
    attaque: 14,
    acc: 0.6
};

let perso2 = {
    nom: "Sett",
    hp: 50,
    attaque: 15,
    acc: 0.8
};


// Fonction pour déterminer si l'attaque réussit
function peutAttaquer(perso) {
    return Math.random() < perso.acc;
}

function attaquer(att, def) {
    if (peutAttaquer(att)) {
        console.log(att.nom + " Bien joue");
        def.hp -= att.attaque;
    } else {
        console.log(att.nom + " Echec");
    }
}

// Affiche du texte dans la console
console.log("Ready ? Fight");

while (opp1.hp > 0 && perso2.hp > 0) {
    attaquer(opp1, perso2);
    if (perso2.hp <= 0) 
        break;

    attaquer(perso2, opp1);
    console.log("Hp ->", opp1.nom, opp1.hp, "|", perso2.nom, perso2.hp);
}

if (opp1.hp <= 0) console.log(perso2.nom + " remporte la victoire !");
else console.log(opp1.nom + " a gagné !");    


