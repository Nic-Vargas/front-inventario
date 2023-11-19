fetch('http://localhost:8080/producto/actualizar', {
    method: 'PUT', // Método HTTP (GET, POST, etc.)
  })
    .then(response => response.json())
    .then(data => {
      // Hacer algo con los datos recibidos del backend
      console.log(data);
    })
    .catch(error => console.error('Error:', error));