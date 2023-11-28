window.addEventListener("load", event => {
    event.preventDefault();
    readJson();
    // toggleLoader();
    //readJsonF(user);
})

function readJson() {
    //  let string = localStorage.getItem('data');
    //let jsonString = JSON.stringify(string);
    //const dados = document.getElementById('infos');
    //dados.innerHTML = JSON.parse(jsonString);

    let string = localStorage.getItem('data');
    let jsonString = JSON.parse(string);
    const dados = document.getElementById('infos');
    dados.innerHTML = ` 
    <p>${jsonString.nome}</p>
    <p>${jsonString.email}</p>
    <p>${jsonString.cpf}</p>
    <p>${jsonString.cep}</p>
    <p>${jsonString.fone}</p>
    <p>${jsonString.cargo}</p>
    `;
}

fetch("http://localhost:3000/user?_page=1&_limit=1")
    .then((req) => req.json())
    .then((data) => readJsonF(data));

function readJsonF(user) { // CONSULTA O ARQUIVO JSON E RETORNA OS DADOS

    const html = user.map(
        (dado) => `
        <p>${dado.nome}</p>
        <p>${dado.email}</p>
        <p>${dado.cpf}</p>
        <p>${dado.cep}</p>
        <p>${dado.fone}</p>
        <p>${dado.cargo}</p>

        `
    );
    document.getElementById('infosY').innerHTML = html;
}

const toggleLoader = () => { // FAZ O LOAD APARECER MUDANDO A CLASSE DOS DIVS 
    const fadeElement = document.querySelector("#fade");
    const loaderElement = document.querySelector("#loader");

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");
}


const checkCep = document.querySelector("#cep")


cep.addEventListener("blur", (e) => {
    let busca = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`, options)
        .then(response => {
            response.json()
                .then(data => document.getElementById('cepOutput').innerHTML = data.localidade)
        })
        .catch(e => console.log('Erro'))
})