window.addEventListener("DOMContentLoaded", (e) => {
    const hamburger = document.querySelector(".hamburger")
    const offScreenMenu = document.querySelector(".off-screen-menu")

    hamburger.addEventListener("click", () => {
        offScreenMenu.classList.toggle("active");
    })
})