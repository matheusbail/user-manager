const Form = document.getElementById("form-register");
const Name = document.getElementById("nome");
const Mail = document.getElementById("email");
const Cpf = document.getElementById("cpf");
const Cep = document.getElementById("cep");
const Fone = document.getElementById("fone");
const GenM = document.getElementById("generoMasc");
const GenF = document.getElementById("generoFem");



Form.addEventListener("submit", function (onclick) {
    event.preventDefault();

    alert("A");
})

/*Form.addEventListener("submit", (event) => {
    event.preventDefault();
                                                            arrow, usar ?
                                                            DOM e o que esta na memoria do navegador
                                                            nao esquecer 
    alert("A");
})
*/