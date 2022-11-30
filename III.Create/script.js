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

//Accrocher la nouvelle branche (section) dans le DOM (noeud parent: body)
//Attention: s'insère en tant que dernier-né, à la fin du body
/*document.body.appendChild(s);
console.log(document.getElementsByName("footer"));*/

let art = document.querySelector("article");
art.append(s);
}