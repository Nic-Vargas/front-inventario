let botonbtnStockId = document.getElementById("btnStockId");

botonFiltroId.addEventListener("click", evento => {
    let idProducto = document.getElementById("id").value;
    buscarProductoID(idProducto);
});
let buscarProductoStockID = async () => {

    let campos = {
        stock: document.getElementById("stock").value,
    };

    try {

        let username = 'admin';
        let password = 'claveI';
        let credentials = `${username}:${password}`;
        let encodedCredentials = btoa(credentials);

        const peticion = await fetch("http://localhost:8080/verStockPorId?id=4", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedCredentials}`,
            },
            body: JSON.stringify(campos),
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Ha ocurrido un error al procesar la solicitud.');
    }
}