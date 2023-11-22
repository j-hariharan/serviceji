let nav = document.querySelector("#nav")
let ham = document.querySelector("#ham")
let nav_veil = document.querySelector("#nav-veil")

function openNav (e) {
    if (nav_veil.classList.contains("active")) {
        closeNav()
        return
    }

    e.stopPropagation()

    nav_veil.classList.add("active")
    nav.classList.add("open")
}

function closeNav () {
    if (!nav_veil.classList.contains("active")) return

    nav_veil.classList.remove("active")
    nav.classList.remove("open")
    nav.classList.add("closed")
}

ham.addEventListener("click", openNav)
document.addEventListener("click", closeNav)
nav.addEventListener("click", e => e.stopPropagation())


