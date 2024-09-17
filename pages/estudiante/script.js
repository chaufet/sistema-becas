function login() {
    const user = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Simulación de autenticación
    if (password === "123") {
        document.getElementById("main").style.display = "block";
    } else {
        alert("Contraseña incorrecta");
    }
}

function beca() {
    // Simulación de la verificación de beca
    // const promedio = obtenerPromedio(); // Esto debe implementarse
    // if (promedio > 4.3) {
    //     document.getElementById("beca").style.display = "block";
    // }
}
