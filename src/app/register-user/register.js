const Form = document.getElementById('form-register');
const Name = document.getElementById('nome');
const Mail = document.getElementById('email');
const Cpf = document.getElementById('cpf');
const Cep = document.getElementById('cep');
const Fone = document.getElementById('fone');
const GenM = document.getElementById('generoMasc');
const GenF = document.getElementById('generoFem');



Form.addEventListener("submit", event => {
    event.preventDefault();
    validate();
    saveLocal();
});

const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('sucess');
}

const sucess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error');

    errorDisplay.innerText = '';
    formGroup.classList.add('sucess');
    formGroup.classList.remove('error');
}



const validate = () => {
    const NameValue = Name.value.trim();
    const MailValue = Mail.value.trim();
    /* const CpfValue = Cpf.value.trim();
     const CepValue = Cep.value.trim();
     const FoneValue = Fone.value.trim();
     const GenMValue = GenM.value.trim();
     const GenFValue = GenF.value.trim();*/

    if (NameValue === '') {
        setError(Name, 'Nome de usuário é necessário');
    } else {
        sucess(Name);
    }

    if (MailValue === '') {
        setError(Mail, 'EMAILAALSDMLASJDLHFLGHADH');
    } else {
        sucess(Mail);
    }
}



/*function storeRecipe() {
    let name = document.getElementById("recipe-name").value;
    let description = document.getElementById("recipe-description").value
    localStorage.setItem(name, description);
}
*/

function saveLocal() {
    let data = document.getElementById("nome").value;
    let data2 = document.getElementById("email").value;
    localStorage.setItem(data, data2);
}





























/*Form.addEventListener("submit", (event) => {
    event.preventDefault();
                                                            arrow, usar ?
                                                            DOM e o que esta na memoria do navegador
                                                            nao esquecer 
    alert("A");
})
*/