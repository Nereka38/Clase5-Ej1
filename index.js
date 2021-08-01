document.getElementById("button").addEventListener("click", agregar);

function agregar() {
  let ul = document.getElementById("lista");

  if (ul.children.length >= 5) {
    alert("¡Has llegado al máximo de tareas!");
    return;
  }

  let input = document.getElementById("task_name").value;
  if (input.length === 0) {
    alert("Añade una tarea");
    let noValidar = document.getElementsByTagName("ul");
    noValidar.parentNode.removeChild("ul");
  }

  let siOno = window.confirm("¿Agregar tarea a la lista?");

  if (siOno === true) {
    let input = document.getElementById("task_name");

    aceptarTarea(ul, input.value);
    input.value = "";
  }
}

function aceptarTarea(ul, textoTarea) {
  let li = document.createElement("li");

  li.append(document.createTextNode(textoTarea));

  ul.appendChild(li);

  let span = document.createElement("span");
  span.onclick = eliminar;
  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  li.append(span);
}

function eliminar() {
  this.parentElement.remove();
}
