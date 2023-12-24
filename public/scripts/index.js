let cover = document.querySelector("#cover")
let video = cover.querySelector("video")

let header = document.querySelector("#header")

let about = document.querySelector('.about-section')
let about_h1 = about.querySelector("h1")
let about_h2 = about.querySelector("h2")

function setOffset () {
    video.style.translate = `0 ${window.scrollY * 0.5}px`

    requestAnimationFrame(setOffset)
}

requestAnimationFrame(setOffset)


function intersectionCallback (entries, observer) {
    if (entries[0].intersectionRatio >= 0.1) {
        header.classList.remove("hidden")
        about_h1.classList.remove("hidden")
        about_h2.classList.remove("hidden")
    } else {
        header.classList.add("hidden")
        about_h1.classList.add("hidden")
        about_h2.classList.add("hidden")
    }
}

let observer = new IntersectionObserver(intersectionCallback, { threshold: 0.1 })
observer.observe(about)