//Exercice réalisé grâce à l'aide précieuse de Nathalie Goffette

//PARTIE 1: création de noeuds et de contenu dans le DOM
//Stocker les noms des élèves dans un tableau
let learners = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan Bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];

//Créer la boucle qui affichera le contenu du tabeau
for(var i=0; i<learners.length; i++) {
//Créer l'élément HTML vide de contenu (la section et le parapgraphe)
let s = document.createElement("section");
let p = document.createElement("p");

//Créer le contenu textuel du paragraphe, à l'aide du contenu du tableau qui tourne dans la boucle
let pCt = document.createTextNode(learners[i]);

//Relier le paragraphe à la section
s.appendChild(p);

//Relier le contenu textuel au paragraphe
p.appendChild(pCt);

//Accrocher la nouvelle branche (section) dans le DOM (noeud parent: article): noeudparent.append(noeud à accrocher)
//D'abord, stocker le noeud parent (article) en tant que variable
let art = document.querySelector("article");
art.append(s);
}

//PARTIE 2: changements de couleur d'arrière-plan
//Utiliser la fonction créée dans un précédent exercice
//D'abord, stocker l'élément concerné par la fonction
let x = document.querySelectorAll('section');

//Ensuite, créer la fonction de changement de couleur rgb grâce à des nombres aléatoires
for (elem of x){
    function ranColor(){
            let r = Math.floor(Math.random() * (255 + 1));
            let g = Math.floor(Math.random() * (255 + 1));
            let b = Math.floor(Math.random() * (255 + 1));
            return "rgb("+r+","+g+","+b+")";
    }
//Appeler la fonction à appliquer sur chacun des éléments "section"
    elem.style.backgroundColor = ranColor();
}

//À partir d'ici, je sèche
let z = document.querySelectorAll('p');
let c = elem.style.backgroundColor = ranColor();

let r = Math.floor(Math.random() * (255 + 1));
let g = Math.floor(Math.random() * (255 + 1));
let b = Math.floor(Math.random() * (255 + 1));

for (elem of z) {
    if (c = (r<=127.5) && (g<=127.5) && (b<=127.5)) {
            elem.style.color = "rgb(255,255,255)";
        }
        else {
            elem.style.color = "rgb(0,0,0)";
        }
    }