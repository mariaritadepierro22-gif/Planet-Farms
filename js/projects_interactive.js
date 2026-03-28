/* Gestione dell'animazione interattiva (effetto fulmine).*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Il DOM è stato caricato correttamente!");
    const container = document.getElementById('charging-container');
    const bolt = document.getElementById('lightning-bolt');
    const lightning_sound = document.getElementById('lightning_sound');

    if (container && bolt) {
        container.addEventListener('click', () => {
            // 1. Riproduzione sincronizzata del feedback sonoro
            lightning_sound.currentTime = 0;
            lightning_sound.play();

            // 2. Attiva l'animazione aggiungendo la classe CSS
            bolt.classList.add('start_lightning');

            /* 3. Rimuove l'effetto dopo 500ms, animazione terminata
                  Questo permette di riattivare l'effetto ai click successivi.
            */
            setTimeout(() => {
                bolt.classList.remove('start_lightning');
            }, 500);
        });
    }
});