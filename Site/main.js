// Variables de séléction
const button = document.getElementById("toggleTheme");
const texte = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');
const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');
const body = document.body;
const options = document.querySelector('.options');
const menu = document.querySelector('.menu');
const opt = document.querySelector('.opt');


// Fonction de dark mode
// forEach permet de parcourir chaque éléments du tableau
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
button.addEventListener("click", () => {
    if(body.classList.toggle("dark-mode")) {
        texte.forEach(element => {
          element.style.color = "white";
        });
        p.style.color = "white";
        p.forEach(e => {
          e.style.color = "white";
        });
        h3.forEach(e => {
          e.style.color = "white";
        });
        h4.forEach(e => {
          e.style.color = "white";
        });
        options.style.backgroundColor = "gray"; 
        menu.style.backgroundColor = "gray";       
      } else {
        texte.forEach(element => {
          element.style.color = "black";
        });
        p.forEach(e => {
          e.style.color = "black";
        });
        h3.forEach(e => {
          e.style.color = "black";
        });
        h4.forEach(e => {
          e.style.color = "black";
        });
        menu.style.backgroundColor = "white";
    } 
  }
);

// Fonction menu burger
// toggle permet d'ajouter ou de supprimer une classe
options.addEventListener('click', () => {
  if(menu.classList.toggle('active')) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
