let boton = document.getElementById("btnEliminar");

boton.addEventListener("click", evento=>{
    eliminarProducto();
});


let eliminarProducto = async(id)=>{


  try {
    
    let username = 'admin';
    let password = 'claveI';
    let credentials = `${username}:${password}`;
    let encodedCredentials = btoa(credentials);

    const peticion = await fetch("http://localhost:8080/producto/eliminar?id=${id}", {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
      },
      body: id.toString,
    });
    if (peticion.ok) {
      // Manejar la respuesta exitosa
      console.log('Producto eliminado correctamente');
    } else {
      // Manejar la respuesta de error
      console.error('Error al eliminar el producto');
      alert('Ha ocurrido un error al eliminar el producto.');
    }
  }catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}