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


// creo l'array con i membri del team
const teams = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
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

    // ! BONUS 1
    // creo l'elemento da stampare nel DOM
    const newLi = `
    <li class="col-12 col-lg-5 list-group-item my-2 text-center border-0 p-3 bg-transparent">
        <div class="col">
            <div class="card bg-success-subtle rounded-top-4 border-0">
                <div class="m-auto rounded-circle overflow-hidden w-50 my-3">
                    <img class="img-fluid" src="../img/${thisMemberTeam.image}" alt="Team member picture">
                </div>
                <div class="card-body rounded-bottom-1 rounded-top-4 bg-dark text-white border">
                    <h5 class="card-title fw-bold">${thisMemberTeam.name}</h5>
                    <p class="card-text fst-italic">${thisMemberTeam.role}</p>
                </div>
            </div>
        </div>
    </li>
    `;
    console.log(newLi);

    // stampo il nuovo elemento nel DOM
    memberInfo.innerHTML += newLi;
}
