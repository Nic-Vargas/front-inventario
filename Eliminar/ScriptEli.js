fetch('http://localhost:8080/producto/eliminar?id=1', {
    method: 'DEL', // Método HTTP (GET, POST, etc.)
  })
    .then(response => response.json())
    .then(data => {
      // Hacer algo con los datos recibidos del backend
      console.log(data);
    })
    .catch(error => console.error('Error:', error));