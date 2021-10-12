'use strict';

function agregarProducto() {
    const producto = {};
    producto.nombres = document.getElementById('nombres').value;
    producto.apellidos = document.getElementById('nombres').value;
    producto.apellidos = document.getElementById('nombres').value;
    producto.apellidos = document.getElementById('nombres').value;
    producto.apellidos = document.getElementById('nombres').value;
    return producto;
}

function getCells(data, type) {
  let fila = data.map(cell => `<${type}>${cell}</${type}>`).join('');
  if (data.length >= 1 && type == 'td') {
    fila += `<td><input type="submit" value="Eliminar producto" onclick="eliminar(); "/><input type="submit" value="Ver producto" onclick="ver(); "/></td>`;
  }
  return fila;
}

function createBody(data) {
  return data.map((row, idx) => `<tr id="${idx}">${getCells(row, 'td')}</tr>`).join('');
}

function createTable(data) {
  let cabeceras = ['Nombres', 'Especialidad', 'Índice', 'Acciones'];
  return `
    <table>
      <thead>${getCells(cabeceras, 'th')}</thead>
      <tbody id="cuerpo">${createBody(data)}</tbody>
    </table>
  `;
}

function crearItems() {
    const productosAux = agregarProducto();
    const addHtml = createBody([productosAux]);
    document.getElementById("cuerpo").innerHTML += addHtml;
}

document.body.insertAdjacentHTML('beforeend', createTable([]));
