function ordenarColumnas() {
    let container = document.getElementById("cities-container");
    container.style.display = "block";
}

function cambiarTitulo() {
    let titulo = document.getElementById("page-title");

    if (titulo.innerText === "Libro Reciente") {
        titulo.innerText = "HTML & CSS: Curso práctico avanzado";
    } else {
        titulo.innerText = "Libro Reciente";
    }
}

function cambiarColores() {
    let titulos = document.querySelectorAll(".city h3, .city p");
    titulos.forEach(el => {

        if (el.style.color === "red") {
            el.style.color = "black";
        } else {
            el.style.color = "red";
        }
    })
}

function agregarImagen() {
    let footer = document.getElementById("footer");
    if (!document.getElementById("footer-img")) {
        let img = document.createElement("img");
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Continentes.png/1200px-Continentes.png"; //URL de la imagen que se creara
        img.alt = "Mapa de los continentes";
        img.id = "footer-img"; // ID único para evitar duplicados
        img.style.marginTop = "10px";
        img.style.width = "200px";
        footer.appendChild(img);
    }
}