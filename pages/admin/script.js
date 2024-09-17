
function login() {
    user = document.getElementById("name").value;
    password = document.getElementById("password").value;

    // call backend
    if (user == "admin") {
        document.getElementsByTagName("MAIN")[0].style.display = "block";
    }
}