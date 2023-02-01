import { apiConection } from "./apiConection.js";

const form = document.querySelector('[data-form]');

async function createVideo(e) {
    e.preventDefault();

    const title = document.querySelector('[data-title]').value;
    const description = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector('[data-url]').value; 
    const image = document.querySelector('[data-image]').value; 

    try {
        await apiConection.createVideo(title, description, url, image);
    
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

form.addEventListener('submit', e => createVideo(e));