
let boton = document.getElementById("btnGuardar");

boton.addEventListener("click", evento=>{
    agregarProducto();
});


let agregarProducto = async()=>{

  let campos = {};

  campos.categoria = document.getElementById("categoria").value;
  campos.descripcion = document.getElementById("descripcion").value;
  campos.id = document.getElementById("id").value;
  campos.nombre = document.getElementById("nombre").value;
  campos.precio = document.getElementById("precio").value;
  campos.stock = document.getElementById("stock").value;
  
  const peticion = await fetch("http://localhost:8080/producto/agregar",
  {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(campos)
  });

}




  