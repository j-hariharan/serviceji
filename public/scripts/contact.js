let dropdown = document.querySelector("#dropdown")
let service_textbox = dropdown.querySelector("#service")
let service_input = dropdown.querySelector("input")
let message = document.querySelector("form #message")
let choices = dropdown.querySelector(".choices")
let dropdown_opened = false
let selected = ""


document.addEventListener("click", () => {
    dropdown_opened = false
})

dropdown.addEventListener("click", e => {
    dropdown_opened = !dropdown_opened
    e.stopPropagation()
})

for (let i of choices.children) {
    i.addEventListener("click", e => {
        selected = e.target.innerText
        dropdown_opened = false
        e.stopPropagation()
    })
}


function render () {
    if (dropdown_opened) dropdown.classList.add("open")
    else dropdown.classList.remove("open")

    service_textbox.innerText = selected

    requestAnimationFrame(render)
}

requestAnimationFrame(render)

function onSubmit () {
    service_input.value = selected
    message.style.display = "block"
}
