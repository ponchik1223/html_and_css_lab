function validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

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
    var password = document.getElementById("password").value;
    var repeat_password = document.getElementById("repeat_password").value;
    var text = document.getElementById("text_confirm");

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