const saludar = document.getElementById("saludar");

saludar.addEventListener("click", () => {
    const nombreUsuario = prompt('Escribe tu nombre para una mejor experiencia');
    localStorage.setItem("nombreUsuario", nombreUsuario);

})
console.log(saludar);