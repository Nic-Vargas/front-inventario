// Agrega el evento al botón
let boton = document.getElementById("btnGuardar");
boton.addEventListener("click", evento => {
    evento.preventDefault(); // Evita el comportamiento predeterminado del formulario
    agregarProducto(); // Llama a la función para agregar el producto
});

// Función para agregar un producto
let agregarProducto = async () => {
    let campos = {
        categoria: document.getElementById("categoria").value,
        descripcion: document.getElementById("descripcion").value,
        id: document.getElementById("id").value,
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value
    };

    try {
        const peticion = await fetch("http://localhost:8080/producto/agregar", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' // Corrección del nombre del encabezado
            },
            body: JSON.stringify(campos)
        });

        if (peticion.ok) {
            alert('Producto agregado correctamente.'); // Muestra un mensaje de éxito
        } else {
            alert('Error al agregar el producto.'); // Muestra un mensaje de error
        }
    } catch (error) {
        console.error('Error:', error); // Manejo de errores
        alert('Ha ocurrido un error al procesar la solicitud.'); // Muestra un mensaje de error genérico
    }
};

  