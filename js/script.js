// signup validation

function validateForm() {
    const email = document.forms['form-input']['email-input'].value;
    const fullname = document.forms['form-input']['fullname-input'].value;
    const username = document.forms['form-input']['username-input'].value;
    const password = document.forms['form-input']['password-input'].value;

    if (email == "" || fullname == "" || username == "" || password == "")  {
        if(email == "") {
            document.getElementById('error-email').innerHTML = '*Masukan email';
            document.getElementById('error-email').style.color = 'red';
        } else {
            document.getElementById('error-email').innerHTML = "";
        }

        if (fullname == "")    {
            document.getElementById('error-fullname').innerHTML = "*masukan nama";
            document.getElementById('error-fullname').style.color = 'red';
        } else {
            document.getElementById('error-fullname').innerHTML = "";
        }

        if (username == "")   {
            document.getElementById('error-username').innerHTML = "masukan username";
            document.getElementById('error-username').style.color = 'red'; 
        } else {
            document.getElementById('error-username').innerHTML = "";
        }

        if  (password == "")    {
            document.getElementById('error-password').innerHTML = "masukan password";
            document.getElementById('error-password').style.color = "red"
        }else{
            document.getElementById('error-password').innerHTML = "";
        }

        return false

    } else {

        window.location.href = "login.html";
    }

    function clearField()   {
        document.getElementById('error-email').innerHTML = "";
        document.getElementById('error-fullname').innerHTML = "";
        document.getElementById('error-username').innerHTML = "";
        document.getElementById('error-password').innerHTML = "";
    }

}

// login validation

function validateLogin()    {

    if (username == "" || password == "")  {
        if(username == "") {
            document.getElementById('error-username').innerHTML = '*Masukan username';
            document.getElementById('error-username').style.color = 'red';
        } else {
            document.getElementById('error-username').innerHTML = "";
        }
    if (password == "" ){
        document.getElementById('error-password').innerHTML = 'masukan password';
        document.getElementById('error-username').style.color = 'red';
    }else   {
        document.getElementById('error-password').innerHTML = "";
    }

    }
}