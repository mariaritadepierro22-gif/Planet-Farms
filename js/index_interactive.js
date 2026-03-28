/**
 * Gestisce l'interazione dello swipe di immagini nella Home.
 * Aggiorna gli attributi 'src' e 'alt' dell'elemento target e
 * fornisce un feedback sonoro all'utente.
 */

//Definizione dell'array delle immagini e delle relative didascalie per l'accessibilità
const images = ["/img/ceo.jpg", "/img/field.jpg", "/img/vertical.jpg"];
const descr = [
    "I due fondatori di Planet Farms",
    "Agricoltura tradizionale",
    "Vertical Farming"
];

//Indice dell'immagine corrente
let currentImageIndex = 0; 

const clickSound = new Audio('/audio/water_sound.mp3');

/**
 * Cambia l'immagine visualizzata in loop e riproduce un feedback sonoro.
 * Recupera il percorso dall'array 'images' e aggiorna l'attributo src del DOM.
 */
function swapImages() {
    const imgElement = document.getElementById('swipe_img');

    // 1. Controlla che l'elemento sia presente nel DOM, altrimenti interrompe l'esecuzione
    if(imgElement) {
        // 2. Reset e riproduzione immediata del feedback sonoro
        clickSound.currentTime = 0; 
        clickSound.play();

        // 3. Gestione ciclo infinito dell'indice
        currentImageIndex = currentImageIndex + 1; 
    
        if (currentImageIndex>= images.length) {
            currentImageIndex = 0;
        }
    
        // 4. Aggiornamento dinamico delle immagini e delle relative didascalie
        imgElement.src = images[currentImageIndex];
        imgElement.alt = descr[currentImageIndex];

        console.log("Immagine cambiata con successo!");
    }
    else{
        console.warn("Elemento 'swipe_img' non trovato in questa pagina!");
    }
}

/* Usiamo DOMContentLoaded per garantire che gli script vengano eseguiti 
 * solo dopo che il documento HTML è stato completamente caricato.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log("Il DOM è stato caricato correttamente!");
    const buttonImg = document.getElementById('swipe_img');
    
    if (buttonImg) {
        buttonImg.addEventListener('click', swapImages);
    }
});