// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.

//! INFO:
// Wayne Barnett, Founder & CEO, wayne-barnett-founder-ceo.jpg
// Angela Caroll, Chief Editor, angela-caroll-chief-editor.jpg
// Walter Gordon, Office Manager, walter-gordon-office-manager.jpg
// Angela Lopez, Social Media Manager, angela-lopez-social-media-manager.jpg
// Scott Estrada, Developer, scott-estrada-developer.jpg
// Barbara Ramos, Graphic Designer, barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// creo l'array con i membri del team
const teams = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.png',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.png',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.png',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
];

// ! MILESTONE 1
// seleziono i nodi del DOM per mostrare a schermo la info
const memberInfo = document.querySelector('#list');

// stampo in console i membri del team singolarmente
for (let i = 0; i < teams.length; i++) {
    thisMemberTeam = teams[i];
    console.log(thisMemberTeam);

    for (let key in thisMemberTeam) {
        // stampo la chiave + il valore
        console.log(key + ': ' + thisMemberTeam[key]);
    }

    // ! MILESTONE 2
    // creo l'elemento da stampare nel DOM
    const newLi = `
    <li class="my-2">
        <h3 class="fw-bold mb-1">${thisMemberTeam.name}</h3>
        <p class="fst-italic mb-1">${thisMemberTeam.role}</p>
        <p>${thisMemberTeam.image}</p>
    </li>
    `;
    console.log(newLi);

    // stampo il nuovo elemento nel DOM
    memberInfo.innerHTML += newLi;
}
