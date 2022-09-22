//GET
const profiles = () => fetch('http://localhost:3000/profiles').then(resposta => resposta.json());

//POST
const createProfile = (name, birth, age, city, email, tel, school, xp, area, salary, linkedin, portfolio) => {
    return fetch('http://localhost:3000/profiles', {
        method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                birth,
                age,
                city,
                email,
                tel,
                school, 
                xp, 
                area, 
                salary, 
                linkedin, 
                portfolio 
            })
        })
        .then(resposta => {
            if(resposta.ok) {
                return resposta.body;
            }
            throw new Error('Não foi possível criar perfil');
        });
};

//DELETE
const deleteProfile = (id) => {
    return fetch(`http://localhost:3000/profiles/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        };
        throw new Error ('Não foi possivel apagar o perfil');
    })
};

//DETAILS
const detailProfile = (id) => {
    return fetch(`http://localhost:3000/profiles/${id}`)
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error ('Não foi possivel detalhar o cliente');
    });
}

//EDIT
const editProfile = (id, name, birth, age, city, email, tel, school, xp, area, salary, linkedin, portfolio) => {
    return fetch(`http://localhost:3000/profiles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            birth: birth,
            age: age,
            city: city,
            email: email,
            tel: tel,
            school: school,
            xp: xp,
            area: area, 
            salary: salary,
            linkedin: linkedin,
            portfolio: portfolio
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        };
        throw new Error ('Não foi possivel atualizar o perfil');
    })
}

export const profileServices = {
    profiles,
    createProfile,
    deleteProfile,
    detailProfile,
    editProfile
};