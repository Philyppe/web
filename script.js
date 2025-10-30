document.addEventListener("DOMContentLoaded", () => {
    const popupContainer = document.getElementById("popup-container");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    const imagenes = [
        "./imagenes/error1.png",
        "./imagenes/error2.png"
    ];

    const gifs = [
        "./gifs/back to the future marty GIF.gif",
        "./gifs/code GIF.gif",
        "./gifs/gif.gif",
        "./gifs/GIF by La La Land.gif"
        ,"./gifs/harry potter dobby GIF.gif"
        ,"./gifs/Marlon Brando Art GIF by Robert Matejcek.gif",
        "./gifs/Run Forest GIF by HBO India.gif",
        "./gifs/sylvester stallone fight GIF by Rocky.gif"
    ];

    function mostrarPopupAleatorio(ruta) {
        const popup = document.createElement("div");
        popup.classList.add("popup-window");

        const media = document.createElement("img");
        media.src = ruta;
        media.alt = "Contenido aleatorio";
        popup.appendChild(media);

        const anchoVentana = window.innerWidth;
        const altoVentana = window.innerHeight;

        const anchoPopup = 300;
        const altoPopup = 200;

        const randomLeft = Math.random() * (anchoVentana - anchoPopup);
        const randomTop = Math.random() * (altoVentana - altoPopup);

        popup.style.position = "fixed";
        popup.style.left = `${randomLeft}px`;
        popup.style.top = `${randomTop}px`;
        popup.style.zIndex = 9999;

        popup.addEventListener("click", () => popup.remove());

        popupContainer.appendChild(popup);
    }

    btn1.addEventListener("click", () => {
        const aleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
        mostrarPopupAleatorio(aleatoria);
    });

    btn2.addEventListener("click", () => {
        const aleatorioGif = gifs[Math.floor(Math.random() * gifs.length)];
        mostrarPopupAleatorio(aleatorioGif);
    });
});
