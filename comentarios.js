const toggleButton = document.getElementById('toggleButton')
const comment = document.getElementById('comentarios')
const cuerpo = document.getElementById('wrapper')

toggleButton.addEventListener('click', function(){
    
    if(comment.style.display === 'none'){
        comment.style.display = 'block';
        cuerpo.style.gridTemplateAreas = '"header  header  header header" "sidebar content content comment"  "footer footer  footer footer"';
    } else {
        comment.style.display = 'none';
        cuerpo.style.gridTemplateAreas = '"header  header  header header" "sidebar content content content"  "footer footer  footer footer"';
    }
});

// Palabras prohibidas
const palabrasProhibidas = ["puta", "gilipollas"];

// Función para reemplazar palabras prohibidas
function censurar(text){
    palabrasProhibidas.forEach(word => {
        const regex = new RegExp(word, "gi");
        text = text.replace(regex, "*".repeat(word.length));
    });
    return text;
}

function addComment(nombre, email, comentario) {
    const dia = new Date().getDay().toLocaleString();
    const mes = new Date().getMonth().toLocaleString();
    const año = new Date().getFullYear().toLocaleString();
    const fechaActual = dia + "/" + mes + "/" + año;
    const textoCensurado = censurar(comentario);
    
    // Crear elementos HTML
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const authorStrong = document.createElement("strong");
    authorStrong.textContent = nombre;

    const commentP = document.createElement("p");
    commentP.textContent = textoCensurado;

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("fecha");
    dateSpan.textContent = fechaActual;

    // Añadir elementos al comentario
    commentDiv.appendChild(authorStrong);
    commentDiv.appendChild(commentP);
    commentDiv.appendChild(dateSpan);

    // Agregar comentario al contenedor de comentarios
    document.getElementById("com").appendChild(commentDiv);
}

document.getElementById("añadirComentario").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("texto");

    comment.addEventListener('input', function(){
        // Obtener el valor del campo de comentarios
        let valorComentario = this.value;

        // Cambiar las palabra prohibidas
        this.value = censurar(valorComentario);
    });

    const comentario = document.getElementById("texto").value.trim();

    // Agregar comentario
    addComment(name, email, comentario);

    // Limpiar formulario
    document.getElementById("añadirComentario").reset();
});
  