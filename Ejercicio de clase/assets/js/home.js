const nombreUsuario = document.getElementById("usuario");
const limpiar = document.getElementById("limpiar");
console.log(usuario);

const usuarioEnStorage = localStorage.getItem("nombreUsuario");
nombreUsuario.innerText = usuarioEnStorage;

console.log(nombreUsuario);

limpiar.addEventListener("click", () => {

    localStorage.removeItem("nombreUsuario")
    /* window.location.reload() */
    nombreUsuario.innerText = "";
})