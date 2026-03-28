/**
 * Gestisce le interazioni nella pagina Report:
 * 1. messaggio di Feedback al download.
 * 2. Switch per la Dark Mode.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Il DOM è stato caricato correttamente!");
});

// --- Gestione Download ---
const downloadBtn = document.querySelector('.download');

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const message = document.createElement('div');
        message.className = 'download_message';

        // Utilizzo di Template Literals per inserire HTML complesso
        message.innerHTML = `
            <div class="message-content">
                <i class="bi bi-leaf-fill"></i> Grazie per aver scaricato il report!
            </div>
            <span class="close_message"><i class="bi bi-x"></i></span>
        `;

        // Inserimento dell'elemento nel body
        document.body.appendChild(message);
        
        // Gestione della rimozione dell'elemento alla chiusura (quando l'utente clicca sulla x)
        const closeMessage = message.querySelector('.close_message');
        closeMessage.addEventListener('click', () => {
            message.remove();
        });
    });
}

// --- Gestione Dark Mode ---
const darkModeBtn = document.querySelector('#dark');

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        //Metodo toggle: aggiunge la classe se assente, la rimuove se presente.
        document.body.classList.toggle('dark-theme');

        const isDarkActive = document.body.classList.contains('dark-theme');
        console.log("Dark Mode: ", isDarkActive ? "ATTIVA" : "DISATTIVA");
    });
}