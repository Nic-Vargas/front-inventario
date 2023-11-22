
let boton = document.getElementById("btnGuardar");

boton.addEventListener("click", evento=>{
    agregarProducto();
});


let agregarProducto = async()=>{

  let campos = {
    id : document.getElementById("id").value,
    nombre : document.getElementById("nombre").value,
    descripcion : document.getElementById("descripcion").value,
    precio : document.getElementById("precio").value,
    stock : document.getElementById("stock").value,
    categoria : document.getElementById("categoria").value
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
    if (peticion.ok) {
      console.log('Producto agregado correctamente');
      alert('El producto ha sido eliminado');
    } else {
      console.error('Error al agregar producto');
      alert('Ha ocurrido un error al eliminar el producto.');
    }
  }catch (error) {
    console.error('Error:', error);
    alert('Ha ocurrido un error al procesar la solicitud.');
  }
}