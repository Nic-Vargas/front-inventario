
let boton = document.getElementById("btnBuscar");

boton.addEventListener("click", evento=>{
    buscarProductoID, buscarProductoCate, buscarProductoStockID();
});


let buscarProductoID = async()=>{

  let campos = {
    id : document.getElementById("id").value,
  };

  try {
    
    let username = 'admin';
    let password = 'claveI';
    let credentials = `${username}:${password}`;
    let encodedCredentials = btoa(credentials);

    const peticion = await fetch("http://localhost:8080/verProducto/id?id=", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
      },
      body: JSON.stringify(campos),
    });
  }catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}

let buscarProductoCate = async()=>{

  let campos = {
    categoria : document.getElementById("categoria").value,
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
  }catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}

let buscarProductoStockID = async()=>{

  let campos = {
    stock : document.getElementById("stock").value,
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
  }catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}