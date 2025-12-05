document.getElementById("btnEntrar").addEventListener("click", (event) => {
    event.preventDefault(); // impede o form de recarregar a página
    window.location.href = "principal.html"; // redireciona normalmente
});
