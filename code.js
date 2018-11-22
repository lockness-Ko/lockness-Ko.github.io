function log(){
    console.log("Username=" + document.getElementById("INPUT_USERNAME_AUTH").value + " Password=" + document.getElementById("INPUT_PASSWORD_AUTH").value);
    var cheese = document.getElementById("cheese");
    var auth = document.getElementById("clickclock");
    clickclock.innerHTML = "Incorrect Authentification";
    cheese.innerHTML = document.getElementById("INPUT_USERNAME_AUTH").value + " and " + document.getElementById("INPUT_PASSWORD_AUTH").value;
}
