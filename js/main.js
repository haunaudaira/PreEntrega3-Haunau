
//implemento etiquetas html desde JS
const h3 = document.createElement(`h3`)
const footer = document.getElementById('footer')
const p = document.createElement('p')


//etiqueta HTML
h3.classList.add("h3")
h3.textContent = "Agregar Espontaneos"
document.querySelector("#containerh3").appendChild(h3)
p.textContent = "Registro de Turnos Espontáneos"
footer.appendChild(p)
//fin etiqueta HTML


document.getElementById('formEspontaneos').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
    const hora = new Date().toLocaleTimeString();

    // objeto JSON con la información
    const formData = { nombre, motivo, hora };

    // acá obtengo los datos existentes del Local Storage o se crea un nuevo arreglo
    let data = JSON.parse(localStorage.getItem('formData')) || [];
    data.push(formData);
    localStorage.setItem('formData', JSON.stringify(data));
    updateTable();
});

// boton para eliminar los registros de la tabla almacenados en LS
document.getElementById('clearLocalStorage').addEventListener('click', function() {
    localStorage.removeItem('formData');
    updateTable();
});

// function para actualizar la tabla en el DOM
function updateTable() {
    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = '';

    const formData = JSON.parse(localStorage.getItem('formData')) || [];

    formData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.nombre}</td><td>${item.motivo}</td><td>${item.hora}</td>`;
        dataBody.appendChild(row);
    });
}

updateTable();
