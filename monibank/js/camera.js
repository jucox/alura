const startCameraButton = document.querySelector('[data-video-botao]');
const cameraField = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const takePhotoButton = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const sendPhotoButton = document.querySelector('[data-enviar]');
let urlImage = '';

startCameraButton.addEventListener('click', async function () {
    const startVideo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    });

    startCameraButton.style.display = 'none';
    cameraField.style.display = 'block';

    video.srcObject = startVideo;
})

takePhotoButton.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    urlImage = canvas.toDataURL('image/jpeg');

    cameraField.style.display = 'none';
    message.style.display = 'block';
})

sendPhotoButton.addEventListener('click', () => {
    const getExistingData = localStorage.getItem('cadastro');
    const convertGetting = JSON.parse(getExistingData);

    convertGetting.imagem = urlImage;

    localStorage.setItem('cadastro', JSON.stringify(convertGetting));

    window.location.href = './abrir-conta-form-3.html';
})