window.addEventListener("load", event => {
    event.preventDefault();
    readJson();
})

function readJson() {

    let string = localStorage.getItem('data');
    let jsonString = JSON.stringify(string);
    const dados = document.getElementById('infos');
    dados.innerHTML = JSON.parse(jsonString);


}