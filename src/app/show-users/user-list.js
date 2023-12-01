window.addEventListener("load", event => {
    event.preventDefault();
    readJson();
    //toggleLoader();
    //readJsonF(user);

})

function readJson() {
    let string = localStorage.getItem('data'); // recupera o json q estava em string
    let jsonString = JSON.parse(string); // trasnforma novamente em objeto
    const dados = document.getElementById('infos'); // seleciona o id que sera manipulado 
    dados.innerHTML = `  
    <p>${jsonString.nome}</p>
    <p>${jsonString.email}</p>
    <p>${jsonString.cpf}</p>
    <p>${jsonString.cep}</p>
    <p>${jsonString.fone}</p>
    <p>${jsonString.cargo}</p>
    `; // insere dados no campo selecionado
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

function clean() {
    window.localStorage.clear();
    location.reload();
}

const checkCep = document.querySelector("#cep") // seleciona o span com a id cep para o evento de blur ser escutado


cep.addEventListener("blur", (e) => { // evento de blur para assim que for tirado atencao do input, seja por clique ou tab, dispare o evento
    let busca = cep.value.replace("-", "") // busca o - no cep se for inserido e remove
    const options = {
        method: 'GET', // metodo de pesquisa com o cep q foi informado
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`, options) // crase evita o uso do + para concatenação, no caso de uma variavel de busca
        .then(response => {
            response.json()
                .then(data => document.getElementById('cepOutput').innerHTML = data.localidade) //resposta da API com os dados sendo inseridos na span
        })
        .catch(e => alert('Erro, CEP Inválido :(')) //caso seja um cep inexistente exibe no alerta a mensagem de erro
})