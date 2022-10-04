"use strict";

// script carousel
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 15000);
// END


// MENU BURGER
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', () => {
    body.classList.toggle('open');
})


const fleche = document.querySelector('.fleche')
    fleche.addEventListener('click', () => {
})
// END MENU BURGER

// Partie main content ==> Au click sur le bouton ça change d'image (Tout fonctionner bien, depuis j'ai mis le responsive et il y a que le premier bloc qui marche)
// (Ca me soule parce que ça fonctionnait bien)
var image = 1;
var images = Array('|',
	'img/vehicule2.png',
	'img/vehicule3.png',
	'img/vehicule4.png',
	'img/vehicule1.png',
'|');

function imagePrecedente() {
	var new_image = images[image - 1]
	if(new_image != '|') {
	    document.getElementById('galerie').src = new_image;
	    image = image - 1;
	}
}
function imageSuivante() {
	var new_image = images[image + 1]
	if(new_image != '|') {
	    document.getElementById('galerie').src = new_image;
	    image = image + 1;
	}
}





















// scroll infini
// const watcher = document.querySelector('.watcher')
// const content = document.querySelector('.main-content')

// const addContent = () => {
//     for(let i = 0; i<30; i++)
//     {
//         const card = document.createElement('div')
//         card.className = "card-image"

//         card.innerHTML = `<div class="arrow-left center"><i class="fa-solid fa-caret-left"></i></div>
//         <div class="bloc-image">
//             <img src="./img/vehicule2.png" alt="" class="image">
//         </div>
//         <div class="arrow-right center"><i class="fa-solid fa-caret-right"></i></div>
//     </div>
//     <div class="card">
//         <div class="card-title">
//             <h3>Ford Focus</h3>
//         </div>
//         <div class="card-description">
//             <p>Diesel 5 portes, GPS, AutoRadio, Forfait 1000km (0.5/km supplémentaire).</p>
//         </div>
//         <div class="card-price">
//             <span class="price">999€</span>
//         </div>
//         <div class="card-button">
//             <button class="main-btn">Réserver et Payer</button>
//         </div>
//     </div>
// <hr>`
//     content.append(card)   

//     }
//     addContent()
// }