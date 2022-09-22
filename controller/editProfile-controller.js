import { profileServices } from "../service/profile-service.js";

const catchURL = new URL(window.location);
const id = catchURL.searchParams.get('id');

const name = document.querySelector('[data-name]');
const birth = document.querySelector('[data-birth]');
const age = document.querySelector('[data-age]');
const city = document.querySelector('[data-city]');
const email = document.querySelector('[data-email]');
const tel = document.querySelector('[data-tel]');
const school = document.querySelector('[data-school]');
const xp = document.querySelector('[data-xp]');
const area = document.querySelector('[data-area]');
const salary = document.querySelector('[data-salary]');
const linkedin = document.querySelector('[data-linkedin]');
const portfolio = document.querySelector('[data-portfolio]');

profileServices.detailProfile(id)
.then(dados => {
    name.value = dados.name,
    birth.value = dados.birth,
    age.value = dados.age,
    city.value = dados.city,
    email.value = dados.email,
    tel.value = dados.tel,
    school.value = dados.school,
    xp.value = dados.xp,
    area.value = dados.area,
    salary.value = dados.salary,
    linkedin.value = dados.linkedin,
    portfolio.value = dados.portfolio
});

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    profileServices.editProfile(id, name.value, birth.value, age.value, city.value, email.value, tel.value, school.value, xp.value, area.value, salary.value, linkedin.value, portfolio.value)
    .then(resposta => {
        window.location.href = '/HC-BackEnd/editadoComSucesso.html';
        console.log(resposta);
    }).catch (error => {
        console.log(error);
    })
});