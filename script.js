document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ script.js cargado correctamente");

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    btn1.addEventListener("click", () => spawnPopup("error1.png"));
    btn2.addEventListener("click", () => spawnPopup("error2.png"));
});

function spawnPopup(imageName) {
    const container = document.getElementById("popup-container");

    const popup = document.createElement("div");
    popup.className = "popup-window";

    // Posición aleatoria visible
    const x = Math.random() * (window.innerWidth - 320);
    const y = Math.random() * (window.innerHeight - 220);
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;

    const img = document.createElement("img");
    img.src = `./imagenes/${imageName}`;
    img.alt = "popup de error";

    img.onerror = () => console.error("❌ No se pudo cargar la imagen:", img.src);
    img.onload = () => console.log("✅ Imagen mostrada:", img.src);

    popup.appendChild(img);
    container.appendChild(popup);

    console.log("📸 Popup creado:", imageName);
}
