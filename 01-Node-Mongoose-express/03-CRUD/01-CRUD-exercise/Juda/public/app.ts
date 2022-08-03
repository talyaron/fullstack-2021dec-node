async function handleGetAllImages() {
    try {

        const { data } = await axios.get("/api/get-all-images")
        const { images, error } = data
        console.log(images)
        renderAllImages(images)
    } catch (error) {
        console.error(error)
    }

}

function renderImage(image) {
    const root = document.querySelector('#root');
    root.innerHTML += `<h1>Description: ${image.description} </h1><img src="${image.url}" alt=""> <button onclick="handleDeleteImage('${image.id}')">DELETE</button>`

}


function renderAllImages(imagesArray) {
    let html = ""
    const root = document.querySelector('#root');
    root.innerHTML = html
   
    imagesArray.forEach(renderImage)

}

async function handleDeleteImage(imageId:string) {
    try {
        console.log('press delete')
        const { data } = await axios.delete('/api/delete-image', { data: { imageId } })
        const { images, error } = data
      renderAllImages(images)

    } catch (error) {
        console.log(error)
    }
}