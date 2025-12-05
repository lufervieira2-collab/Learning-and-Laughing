// =========================
// POPUP DE VÍDEO AULA
// =========================

function openPopup(card) {
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("p").innerText;

    document.getElementById("popupImg").src = imgSrc;
    document.getElementById("popupTitle").innerText = title;

    document.getElementById("popup").style.display = "flex";
}



function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// =========================
// ABRIR / FECHAR SIDEBAR (OPCIONAL)
// =========================

const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}


// =========================
// EFEITO HOVER NAS THUMBS
// =========================

document.querySelectorAll(".thumb-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("hover");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("hover");
    });
});
