const formulario = document.querySelector("form");
const arrayProductos = [];
const table = document.getElementById("productList");

//Para enviar los datos recogidos del formulario al array
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const product = {
        id: arrayProductos.length,
        name: document.getElementById("nameProduct").value,
        precio: document.getElementById("priceProduct").value,
        cantidad: document.getElementById("amountProduct").value,
        categoria: document.getElementById("categoryProduct").value
    }
    arrayProductos.push(product);
    printItems(arrayProductos, table);
    return arrayProductos;

});



//funsión para crear las filas de la tabla
function printItems(arrayProductos, table) {
    table.innerHTML = "";
    table.innerHTML = `
    <tr>
    <th>id</th>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Categoría</th>
</tr>
    `
    arrayProductos.forEach(element => {
        let newRow = table.insertRow(-1);

        let newCell = newRow.insertCell(0);
        newCell.textContent = element.id;

        newCell = newRow.insertCell(1);
        newCell.textContent = element.name;

        newCell = newRow.insertCell(2);
        newCell.textContent = element.precio;

        newCell = newRow.insertCell(3);
        newCell.textContent = element.cantidad;

        newCell = newRow.insertCell(4);
        newCell.textContent = element.categoria;

        const editButton = document.createElement("button");
        editButton.style.backgroundColor = "skyblue";
        editButton.style.height = "20px";
        editButton.style.width = "60px";
        editButton.textContent = "Editar";
        const deleteButton = document.createElement("button");
        deleteButton.style.height = "20px";
        deleteButton.style.width = "60px";
        deleteButton.style.backgroundColor = "red";
        deleteButton.textContent = "Eliminar";
        deleteButton.style.color = "white";
        newCell = newRow.insertCell(5);
        newCell.appendChild(editButton);
        newCell.appendChild(deleteButton);
        editButton.setAttribute(data-index=${index});
        deleteButton.setAttribute(data-index=${index});
   
    })
    


}

