/**
 * Gestisce l'interfaccia interattiva del mini-shop.
 * Permette l'apertura/chiusura del form e la simulazione di acquisto.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Il DOM è stato caricato correttamente!");
    const imgProducts = document.getElementById('img-products');
    const shop = document.getElementById('shop');
    const closeBtn = document.getElementById('close-shop');
    const buyBtn = document.getElementById('buy');
    const feedback = document.getElementById('shop-feedback');
    const audioBuy = new Audio('/audio/cash_sound.mp3');

    if (imgProducts && shop) {
        // Apre il form e avvia il mini shop
        imgProducts.addEventListener('click', () => {
            shop.style.display = 'block';
        });

        // Chiude il form
        closeBtn.addEventListener('click', () => {
            shop.style.display = 'none';
        });

        // Gestisce l'acquisto
        buyBtn.addEventListener('click', () => {
            audioBuy.play();
            const select = document.getElementById('select_products');
            const choice = select.options[select.selectedIndex].text;

            console.log(`Acquisto di ${choice} avvenuto con successo`);
            
            // Generazione dinamica del template HTML per il feedback
            feedback.innerHTML = `
                <div class="success-message">
                    <span class="text_message">
                        Grazie per l'acquisto! <i class="bi bi-leaf-fill"></i>
                    </span>
                </div>
                `;
        });
    }
});