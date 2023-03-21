const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let formProduct = new FormData(formulario);
    let productListRef = document.getElementById("productList");
    let newRow = productListRef.insertRow(-1);

    let newCell = newRow.insertCell(0);
    newCell.textContent = 1;

    newCell = newRow.insertCell(1);
    newCell.textContent = formProduct.get("name");

    newCell = newRow.insertCell(2);
    newCell.textContent = formProduct.get("priceProduct");

    newCell = newRow.insertCell(3);
    newCell.textContent = formProduct.get("amountProduct");

    newCell = newRow.insertCell(4);
    newCell.textContent = formProduct.get("categoryProduct");

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

    // Al presionar el boton editar
    editButton.setAttribute(`id`, `edit`);
    document.getElementById("edit").onclick = function () {
        document.getElementById("nameProduct").value = this.cell[1].innerHTML;
    }
})

