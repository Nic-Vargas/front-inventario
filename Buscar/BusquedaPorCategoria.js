let btnFiltroCategoria = document.getElementById("btnFiltroCategoria");

botonFiltroId.addEventListener("click", evento => {
  let categoriaProducto = document.getElementById("categoria").value;
  buscarProductoID(categoriaProducto);
});

let buscarProductoCate = async () => {

    let campos = {
      categoria: document.getElementById("categoria").value,
    };
  
    try {
  
      let username = 'admin';
      let password = 'claveI';
      let credentials = `${username}:${password}`;
      let encodedCredentials = btoa(credentials);
  
      const peticion = await fetch("http://localhost:8080/verProductoPorCategoria?categoria=Tecnologia", {
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