 // Obtener el elemento de la lista
 const playlist = document.getElementById("playlist");

 // Obtener el elemento del reproductor
 const player = document.getElementById("player");

 // Escuchar los clics en los elementos de la lista
 playlist.addEventListener("click", function(event) {
   // Obtener el elemento que se hizo clic
   const item = event.target;

   // Obtener el título del audio
   const title = item.querySelector("a").textContent;

   // Obtener la URL del audio
   const url = `audios/${title}.mp3`;

   // Cargar el audio en el reproductor
   player.src = url;

 
   // Iniciar la reproducción del audio
   player.play();
 });

 // Obtener el elemento del menú de búsqueda
 const searchInput = document.querySelector("#searchInput");

 // Escuchar los cambios en el elemento de entrada de búsqueda
 searchInput.addEventListener("input", function() {
   // Obtener el texto de la entrada de búsqueda
   const query = searchInput.value;

   // Filtrar la lista de audios
   const filteredList = playlist.querySelectorAll("li");
   for (let i = 0; i < filteredList.length; i++) {
     const item = filteredList[i];

     // Si el título del audio contiene la consulta, mostrar el elemento
     if (item.querySelector("a").textContent.toLowerCase().includes(query.toLowerCase())) {
       item.style.display = "block";
     } else {
       item.style.display = "none";
     }
   }
 });