

    fetch('http://localhost:8080/verProducto/id?id=', {
  method: 'GET', // Método HTTP (GET, POST, etc.)
})
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos recibidos del backend
    console.log(data);
  })
  .catch(error => console.error('Error:', error));

  fetch('http://localhost:8080/verStockPorId?id=4', {
    method: 'GET', // Método HTTP (GET, POST, etc.)
  })
    .then(response => response.json())
    .then(data => {
      // Hacer algo con los datos recibidos del backend
      console.log(data);
    })
    .catch(error => console.error('Error:', error));

    fetch('http://localhost:8080/verProductoPorCategoria?categoria=Tecnologia', {
        method: 'GET', // Método HTTP (GET, POST, etc.)
      })
        .then(response => response.json())
        .then(data => {
          // Hacer algo con los datos recibidos del backend
          console.log(data);
        })
        .catch(error => console.error('Error:', error));