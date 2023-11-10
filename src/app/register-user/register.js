const Form = document.getElementById('form-register');
const Name = document.getElementById('nome');
const Mail = document.getElementById('email');

/*const Cpf = document.getElementById('cpf');
const Cep = document.getElementById('cep');
const Fone = document.getElementById('fone');
const GenM = document.getElementById('generoMasc');
const GenF = document.getElementById('generoFem');
*/



Form.addEventListener("submit", event => {
    event.preventDefault();
    validate();
    saveLocal();
});

window.addEventListener("onclick", event => {
    event.preventDefault();

})

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
        setError(Mail, 'Insira um Email válido');
    } else {
        sucess(Mail);
    }
}

function saveLocal() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById("cpf").value;
    let cep = document.getElementById("cep").value;
    let fone = document.getElementById("fone").value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('cep', cep);
    localStorage.setItem('fone', fone);

    let data = {
        nome: nome,
        email: email,
        cpf: cpf,
        cep: cep,
        fone: fone
    };

    let dataString = JSON.stringify(data);
    localStorage.setItem('data', dataString);
}












/*Form.addEventListener("submit", (event) => {
    event.preventDefault();
                                                            arrow, usar ?
                                                            DOM e o que esta na memoria do navegador
                                                            nao esquecer 
    alert("A");
})
*/