let botonFiltroId = document.getElementById("btnFiltroId");

botonFiltroId.addEventListener("click", evento => {
  let idProducto = document.getElementById("id").value;
  buscarProductoID(idProducto);
});


let buscarProductoID = async (idProducto) => {

  try {

    let username = 'admin';
    let password = 'claveI';
    let credentials = `${username}:${password}`;
    let encodedCredentials = btoa(credentials);

    const peticion = await fetch(`http://localhost:8080/producto/verProducto/id?id=${idProducto}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
      },
    });
    if (peticion.ok) {
      const producto = await peticion.json();
      const productoJsonString = JSON.stringify(producto, null, 2);
      console.log('Producto obtenido correctamente:', producto);
      alert(`Producto obtenido correctamente:\n${productoJsonString}`);
    } else {
      console.error('Error al obtener el producto');
      alert('Ha ocurrido un error al obtener el producto.');
    }
  }catch (error) {
    console.error('Error:', error);
    console.error('Status:', peticion.status);
    console.error('StatusText:', peticion.statusText);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}

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