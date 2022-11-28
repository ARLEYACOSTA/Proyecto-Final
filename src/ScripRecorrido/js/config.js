//PUNTO DE INFORMACIÓN PERSONALIZADO
function puntoInformacion(hotSpotDiv, args) {
   hotSpotDiv.classList.add("letrero_personalizado");
   var span = document.createElement("span");
   span.innerHTML = args;
   hotSpotDiv.appendChild(span);
   span.style.width = span.scrollWidth - 20 + "px";
   span.style.marginLeft =
      -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
   span.style.marginTop = -span.scrollHeight - 12 + "px";
}

function flechaEscena(hotSpotDiv, args) {
   hotSpotDiv.classList.add("flecha_personalizada");
   var span = document.createElement("span");
   span.innerHTML = args;
   hotSpotDiv.appendChild(span);
   span.style.width = span.scrollWidth - 20 + "px";
   span.style.marginLeft =
      -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
   span.style.marginTop = -span.scrollHeight - 12 + "px";
}
