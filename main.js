'use strict'

// Array di oggetti
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',

    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
]

// Ciclo for
for (let i = 0; i < team.length; i++) {

    const person = team[i];

    // Ciclo for in
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }

    console.log('-------')
}

/*
// String interpolation
let teamPersonElement = document.querySelector('.team-person');

for (let i = 0; i < team.length; i++) {
    const person = team[i];
    teamPersonElement.innerHTML += `<li class="card">
                                        <div class="card__image">
                                            <img src="img/${person.foto}" alt="${person.nome} foto">
                                        </div>
                                        <div class="card__info">
                                            <h2 class="card__info__name">${person.nome}</h2>
                                            <h5 class="card__info__role">${person.ruolo}</h5>
                                        </div>
                                    </li>`;

};
*/

/*
// Create Element
const fragment = new DocumentFragment();

for (let i = 0; i < team.length; i++) {
    const person = team[i];

    // li
    const liElement = document.createElement('li');
    liElement.classList.add('card');

    // div image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card__image');
    const imageElement = document.createElement('img');
    imageElement.setAttribute("src", `img/${person.foto}`);
    imageContainer.append(imageElement)

    // div info
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('card__info');

    const infoName = document.createElement('h2');
    infoName.classList.add('card__info__name');
    infoName.textContent = person.nome
    infoContainer.append(infoName);

    const infoRole = document.createElement('h5');
    infoRole.classList.add('card__info__role');
    infoRole.textContent = person.ruolo;
    infoContainer.append(infoRole);

    // Append
    liElement.append(imageContainer);
    liElement.append(infoContainer);

    console.log(liElement)

    fragment.append(liElement);
}

// Stampo elementi
let teamPersonElement = document.querySelector('.team-person');
teamPersonElement.append(fragment);
*/

// Clone Template

const templateTeam = document.getElementById('team-template');

for (let i = 0; i < team.length; i++) {
    const person = team[i]
    const liElement = templateTeam.content.cloneNode(true);
    liElement.querySelector('img').setAttribute("src", `img/${person.foto}`);
    liElement.querySelector('.card__info__name').innerText = person.nome;
    liElement.querySelector('.card__info__role').innerText = person.ruolo;

    let teamPersonElement = document.querySelector('.team-person');
    teamPersonElement.append(liElement);
};