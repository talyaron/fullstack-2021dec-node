const form = document.querySelector('form')

form.addEventListener('keyup', (e) => {
    const divSongs = document.querySelector('.songs')

    const inputEl = document.createElement('input')
    inputEl.setAttribute("type", "text")
    inputEl.setAttribute("name", "songName")
    inputEl.setAttribute("placeholder", "Enter song name")

    if (e.key === "Control") {
        divSongs.append(inputEl)
        inputEl.focus()
    }
})

function hendleSubmit(e) {
    e.preventDefault()

    const obj = {}
    const songs = []

    for (let field of e.target) {
        if (field.type !== "submit") {
            if (field.name.includes("songName")) {
                if (field.value.length > 0) {
                    songs.push(field.value)
                }
            } else if (field.value.length > 0) {
                obj[field.name] = field.value
            }
        }
    }

    obj["songs"] = songs

    console.log(obj)
}

