let boton = document.getElementById("btnEliminar");

boton.addEventListener("click", evento=>{
    let idEliminar = document.getElementById("id").value;
    eliminarProducto(idEliminar);
});


let eliminarProducto = async(idEliminar)=>{


  try {
    
    let username = 'admin';
    let password = 'claveI';
    let credentials = `${username}:${password}`;
    let encodedCredentials = btoa(credentials);

    const peticion = await fetch(`http://localhost:8080/producto/eliminar?id=${idEliminar}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
      },
      body: JSON.stringify({ id: idEliminar }),
    });
    if (peticion.ok) {
      console.log('Producto eliminado correctamente');
      alert('El producto ha sido eliminado');
    } else {
      console.error('Error al eliminar el producto');
      alert('Ha ocurrido un error al eliminar el producto.');
    }
  }catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}