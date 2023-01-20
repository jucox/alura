async function videosList() {
    const conection = await fetch('http://localhost:3000/videos');
    const convertedConection = await conection.json();
    
    return convertedConection;
}

async function createVideo(title, description, url, image) {
    const conection = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} views`,
            url: url,
            imagem: image
        })
    });

    if (!conection.ok) {
        throw new Error('Não foi possível enviar o vídeo!');
    }

    const convertedConection = conection.json();

    return convertedConection;
}

async function searchVideo(searchTerm) {
    const conection = await fetch(`http://localhost:3000/videos?q=${searchTerm}`);
    const convertedConection = await conection.json();

    return convertedConection;
}

export const apiConection = {
    videosList,
    createVideo,
    searchVideo
}