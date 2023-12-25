let cover = document.querySelector("#cover")
let video = cover.querySelector("video")

let header = document.querySelector("#header")

let about = document.querySelector('.about-section')
let about_h1 = about.querySelector("h1")
let about_h2 = about.querySelector("h2")


let cover_height, mobile

function resizeCallback () {
    cover_height = cover.clientHeight
    mobile = window.innerWidth <= 800

    if (mobile) {
        header.classList.remove("hidden")
        video.style.translate = "0"
    }
}

resizeCallback()
window.addEventListener("resize", resizeCallback)

function setOffset () {
    let scrollY = window.scrollY

    if (!mobile) {
        video.style.translate = `0 ${scrollY * 0.5}px`

        if (scrollY > cover_height/2) header.classList.remove("hidden")
        else header.classList.add("hidden")
    }

    requestAnimationFrame(setOffset)
}

requestAnimationFrame(setOffset)


function intersectionCallback (entries, observer) {
    if (entries[0].intersectionRatio >= 0.1) {
        about_h1.classList.remove("hidden")
        about_h2.classList.remove("hidden")
    } else {
        about_h1.classList.add("hidden")
        about_h2.classList.add("hidden")
    }
}

let observer = new IntersectionObserver(intersectionCallback, { threshold: 0.1 })
observer.observe(about)