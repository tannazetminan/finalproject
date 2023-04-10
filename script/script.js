function loginForm(){
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("myVideo").style.display = "none";
    document.getElementById("sidebar").style.display = "none";   
    document.getElementById("contact").style.display = "none";   
    document.getElementById("books").style.display = "none";   

}

function cancleloginForm(){
    location.reload();

    // document.getElementById("login").style.display = "none";
    // document.getElementById("register").style.display = "none";
    // document.getElementById("content").style.display = "grid";
    // document.getElementById("myVideo").style.display = "grid";
    // document.getElementById("sidebar").style.display = "grid";   
}

function showName(form){

    document.getElementById("contact-form").innerHTML= "Thank you!<br/>We recieved your request.<br/>We will  reply you as soon as possible.";
}
