Boolzap
===
**Milestone 1**

- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

******

## Procedimento


1. Stampare il layout statico (html,css)
2. Creare array di oggetti (user)
  - Nome e cognome
  - avatar
  - array di messaggi (oggetti)
    - testo
    - chi lo ha scritto ▪ data
  - ultimo accesso
3. Stampare lista informazioni (chat aside: immagine utente, ultimo
accesso, data...)
4. Acquisire con v-model le informazioni da ricercare(nome utente)
5. Usiamo .includes con una sottostringa presa da v-model
6. Al click della chat mostrare nella finestra a destra tutta la chat con i
messaggi:
1. stampare messaggi a destra o sinistra in base a chi lo scrive 2. stampare data
7. V-model nel campo “nuovo messaggio”, al click dell'invio inserisce il messaggio nell'array, deve generare un “ok” come risposta. Aggiorna data dell'ultimo messaggio.
Partecipanti gruppo #4:
Leonardo Flammini Antonio Faddanno Emanuele Di Leo Davide Correa