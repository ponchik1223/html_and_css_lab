var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;


function validation()
{   
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");

    if (email.match(pattern))
    {
        text.innerHTML = "";
    }
    else 
    {
        text.innerHTML = "Пожалуйста, проверьте email!";
        text.style.color = "#ff0000";
    }

    if (email == "")
    {
        text.innerHTML = "";
        text.style.color = "#00ff00";

    }
}


function password_comparison() 
{
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat_password").value;
    let text = document.getElementById("text_confirm");

    if (password != repeat_password)
    {   
        text.style.color = "#ff0000";
        text.innerHTML = "Пароли не совпадают!";
    }
    else
    {
        text.innerHTML = "";
    }
    if (repeat_password == "")
    {
        text.innerHTML = "";
    }
}   

function user_registration()
{   
    
    let data = {
        'pass':  document.getElementById("password").value,
        'email': document.getElementById("email").value,
        'first_name': document.getElementById("first-name").value,
        'last_name': document.getElementById("last-name").value,
        'confirm_pass': document.getElementById("repeat_password").value
    }

    if (data['email'].match(pattern) && data['pass'] == data['confirm_pass'] && data['pass'] !== '') {
        fetch('http://127.0.0.1:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            return response.text();
        })
        .then(textResponse => {
            document.getElementById('resultContainer').innerText = textResponse;
        })
            

    } else {
        document.getElementById('resultContainer').innerText = 'Проверьте данные';
    }
    

}