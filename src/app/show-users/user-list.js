window.addEventListener("load", event => {
    event.preventDefault();
    readJson();
    //readJsonF(user);
})

function readJson() {
    let string = localStorage.getItem('data');
    let jsonString = JSON.stringify(string);
    const dados = document.getElementById('infos');

    dados.innerHTML = JSON.parse(jsonString);
}



fetch("http://localhost:3000/user?_page=1&_limit=1")
    .then((req) => req.json())
    .then((data) => readJsonF(data));

function readJsonF(user) {

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