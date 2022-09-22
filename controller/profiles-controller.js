import {profileServices} from '../service/profile-service.js';

const newProfile = (name, birth, age, city, email, tel, school, xp, area, salary, linkedin, portfolio, id) => {
    let card = document.createElement('div');
    card.className = 'perfil__container';
    const conteudo = `
        <div class="perfil__nome">
            <h2 class="perfil__info-nome">${name}</h2>
            <div class="perfil__botoes">
                <a href="/HC-BackEnd/edita.html?id=${id}"><button type="button" class="botao__perfil botao__perfil-edita"></button></a>
                <button type="button" class="botao__perfil botao__perfil-apaga"></button>
                <button type="button" class="botao__perfil botao__perfil-mais" onclick="mostraDados()" id="mais">+</button>
                <button type="button" class="botao__perfil botao__perfil-menos" onclick="escondeDados()" id="menos">-</button>
            </div>
        </div>
        <div class="container__infos" id="detalhes" style="display: none;">
            <p class="perfil__info">Data de Nascimento: ${birth}</p>
            <p class="perfil__info">Idade: ${age}</p>
            <p class="perfil__info">Cidade: ${city}</p>
            <p class="perfil__info">E-mail: ${email}</p>
            <p class="perfil__info">Telefone: ${tel}</p>
            <p class="perfil__info">Escolaridade: ${school}</p>
            <p class="perfil__info">Experiência: ${xp}</p>
            <p class="perfil__info">Área desejada: ${area}</p>
            <p class="perfil__info">Pretensão Salarial: ${salary}</p>
            <p class="perfil__info">LinkedIn: ${linkedin}</p>
            <p class="perfil__info">Portfólio: ${portfolio}</p>
        </div>
    `
    card.innerHTML = conteudo;
    card.dataset.id = id;
    return card;
}

const profile = document.querySelector('[data-profile]');
profile.addEventListener('click', (e) => {
    let deleteButton = e.target.className == 'botao__perfil botao__perfil-apaga';
    if(deleteButton) {
        const profileLine = e.target.closest('[data-id]');
        let id = profileLine.dataset.id;
        profileServices.deleteProfile(id)
        .then(() => {
            profileLine.remove();
        });
    };
});

const render = async() => {
    try {
        const profiles = await profileServices.profiles();
        console.log(profiles);
        profiles.forEach(element => {
            profile.appendChild(newProfile(element.name, element.birth, element.age, element.city, element.email, element.tel, element.school, element.xp, element.area, element.salary, element.linkedin, element.portfolio, element.id));
        });
    } catch (error) {
        console.log(error);
    }
}

render();