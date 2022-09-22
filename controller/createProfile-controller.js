import { profileServices } from '../service/profile-service.js';

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('[data-name]').value;
    const birth = document.querySelector('[data-birth]').value;
    const age = document.querySelector('[data-age]').value;
    const city = document.querySelector('[data-city]').value;
    const email = document.querySelector('[data-email]').value;
    const tel = document.querySelector('[data-tel]').value;
    const school = document.querySelector('[data-school]').value;
    const xp = document.querySelector('[data-xp]').value;
    const area = document.querySelector('[data-area]').value;
    const salary = document.querySelector('[data-salary]').value;
    const linkedin = document.querySelector('[data-linkedin]').value;
    const portfolio = document.querySelector('[data-portfolio]').value;
    
    profileServices.createProfile(name, birth, age, city, email, tel, school, xp, area, salary, linkedin, portfolio)
    .then(resposta => {
        window.location.pathname = '/HC-BackEnd/criadoComSucesso.html';
        console.log(resposta);
    }).catch (error => {
        console.log(error);
    });
});