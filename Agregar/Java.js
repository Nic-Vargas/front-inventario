
let boton = document.getElementById("btnGuardar");

boton.addEventListener("click", evento=>{
  guardarProducto();
})




let agregarProducto = async()=>{

  let campos= {};

  campos.categoria = document.getElementById("categoria").value;
  campos.descripcion = document.getElementById("descripcion").value;
  campos.id = document.getElementById("id").value;
  campos.nombre = document.getElementById("nombre").value;
  campos.precio = document.getElementById("precio").value;
  campos.stock = document.getElementById("stock").value;
  
  const peticion = await fetch("http://localhost:8080/producto/agregar",
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content': 'application/json'
    },
    body: JSON.stringfy(campos)

  });
}




  