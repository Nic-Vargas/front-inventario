
let boton = document.getElementById("btnBuscar");

boton.addEventListener("click", evento=>{
    buscarProducto();
});


let buscarProducto = async()=>{

  let campos = {
    id : document.getElementById("id").value,
  };

  try {
    
    let username = 'admin';
    let password = 'claveI';
    let credentials = `${username}:${password}`;
    let encodedCredentials = btoa(credentials);

    const peticion = await fetch("http://localhost:8080/producto/agregar", {
      method: 'POST',
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