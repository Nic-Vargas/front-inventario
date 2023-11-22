let boton = document.getElementById("btnEliminar");

boton.addEventListener("click", evento=>{
    eliminarProducto();
});


let eliminarProducto = async()=>{

  let campos = {
    id : document.getElementById("id").value,
  };

  try {
    
    let username = 'admin';
    let password = 'claveI';
    let credentials = `${username}:${password}`;
    let encodedCredentials = btoa(credentials);

    const peticion = await fetch("http://localhost:8080/producto/eliminar?id=1", {
      method: 'DEL',
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