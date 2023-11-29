function ToRegister() {
    window.location.href = "/src/app/register-user/register.html";
}

function ToList() {
    window.location.href = "/src/app/show-users/user-list.html";
}



function ToEdit() {
    window.location.href = "/src/app/edit-user/edit-user.html"
}

function Previous() {
    window.history.back();
}


$(document).ready(function () {
    $('#imgTeste').css('display', 'none');
    $('#imgTeste').fadeIn(2000);
    $('#imgTeste').fadeOut(3000);
})