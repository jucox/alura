import { apiConection } from "./apiConection.js";
import buildCard from "./showVideos.js";

async function searchVideo(e) {
    e.preventDefault();

    const searchInput = document.querySelector('[data-search]').value;
    const search = await apiConection.searchVideo(searchInput);

    const list = document.querySelector('[data-list]');

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)));

    if (search.length == 0) {
        list.innerHTML = `<h2 class=mensagem__titulo>Não existem vídeos com esse termo de busca.</h2>`;
    }
}

const searchButton = document.querySelector('[data-search-btn]');

searchButton.addEventListener('click', e => searchVideo(e));