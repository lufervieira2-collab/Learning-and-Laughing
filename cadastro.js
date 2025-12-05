document.getElementById("cadastroForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
});
