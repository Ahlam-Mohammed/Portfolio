var quoteArray = ["I always seek to achieve my best version"];
var textPosition = 0; 
var speed = 50;
typewriter = () => {
document.getElementById("sub-intro").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';

if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);

// 
// imgEffict = () => {
//     document.getElementById("effict").style="transform: rotate(-2deg)";
// }
// window.addEventListener("load", imgEffict);
// 
function toggleMobileMenu(menu) 
{
    menu.classList.toggle('open');
}
// 
function changeTheme() 
{
    var element = document.body;
    element.classList.toggle("light-mode");
    // var img = document.getElementById("img").value="images/landing.svg";
}
// 
function send()
{
    var btn = document.getElementById("send");

    var email       = document.getElementById('email').value;
    var atposition  = email.indexOf("@");  
    var dotposition = email.lastIndexOf(".");

    var message     = document.getElementById("message").value;
    if(email=="")
    {  
        document.getElementById("emailError").innerHTML= "Please fill in the field";  
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {
        document.getElementById("emailError").innerHTML= "Please enter a valid e-mail address"; 
    }
    else
    {
        document.getElementById("emailError").innerHTML= ""; 
    }

    if(message=="")
    {  
        document.getElementById("messageError").innerHTML= "Please fill in the field";  
    }
    else
    {
        document.getElementById("messageError").innerHTML= ""; 
    }

    // btn.addEventListener("click",(e)=>{
    //     e.preventDefault();

    //     if(email=="")
    //     {  
    //         document.getElementById("emailError").innerHTML= "Please fill in the field";  
    //     }
    //     else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    //     {
    //         document.getElementById("emailError").innerHTML= "Please enter a valid e-mail address"; 
    //     }
    //     else
    //     {
    //         document.getElementById("emailError").innerHTML= ""; 
    //     }

        // if(message=="")
        // {  
        //     document.getElementById("messageError").innerHTML= "Please fill in the field";  
        // }
        // else
        // {
        //     document.getElementById("messageError").innerHTML= ""; 
        // }
    // })
}