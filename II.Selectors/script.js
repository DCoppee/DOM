//Stockage de la sélection dans une variable
//Méthode pour accéder à tous les sélecteurs d'un même type: .querySelectorAll("sélecteur sous forme de string!")
let x = document.querySelectorAll(".important");
//Création d'une boucle pour appliquer la fonction à la sélection
for (elem of x) {
//Création d'une fonction pour ajouter un attribut: .setAttribute("nom de l'attribut", "valeur de l'attribut")
    elem.setAttribute("title", "This is an important item");
}
console.log (x);

let i = document.querySelectorAll("img");
    for (elem of i) {
//Condition pour afficher l'image
//Méthode pour accéder aux occurences dans la classe: classList.contains("contenu sous forme de string!")
        if (elem.classList.contains("important")) {
//Méthode pour modifier le display d'un élément: style.display = "valeur sous forme de string"
        elem.style.display = "flex";
        }
        else {
        elem.style.display = "none";
    }
}

//Afficher le contenu textuel d'un élément (ainsi que la valeur de son attribut class)
let p = document.querySelectorAll("p");
for (elem of p) {
    if (elem.hasAttribute("class")) {
//Méthode pour afficher le contenu d'un élément: .innerText (ou .innerHtml)
    console.log(elem.innerText,elem.classList);
    }
    else {
        console.log(elem.innerText);
    }
}

//Changer la couleur des p (avec class) de manière aléatoire
for (elem of p) {
//Condition pour ne pas appliquer la fonction
    if (elem.hasAttribute("class")) {
//Appliquer une couleur de texte avec style.color
        elem.style.color = "rgb(0,0,0)";
    }
    else {
//Fonction pour générer trois nombres aléatoires, un par valeur RGB
        function randomColor() {
            let r = Math.floor(Math.random() * 255 + 1);
            let g = Math.floor(Math.random() * 255 + 1);
            let b = Math.floor(Math.random() * 255 + 1);
//!Retourner sous forme de string en concaténant les variables elles-mêmes passées en strings
            return "rgb("+r+","+g+","+b+")";
        }
//Ne pas oublier d'appliquer la condition
        elem.style.color = randomColor();
    }
}
//Appeler la fonction en-dehors de la boucle
console.log(randomColor());