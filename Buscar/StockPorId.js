document.addEventListener("DOMContentLoaded", function () {
    let botonStockId = document.getElementById("btnStockId");
  
    botonStockId.addEventListener("click", function() {
      let idStockProducto = document.getElementById("stock").value;
      const apiUrl = `http://localhost:8080/producto/verStockPorId?id=${idStockProducto}`;
      let username = 'admin';
      let password = 'claveI';
      let credentials = `${username}:${password}`;
      let encodedCredentials = btoa(credentials);
  
      const requestOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Basic ${encodedCredentials}`
        },
      };
  
      fetch(apiUrl, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          return response.json();
        })
        .then(data => {
          console.log("Producto obtenido por ID:", data);
          alert(`Producto obtenido por ID:\n${JSON.stringify(data, null, 2)}`);
        })
        .catch(error => {
          console.error("Error en la solicitud:", error);
          alert('Ha ocurrido un error al obtener el producto por ID.');
        });
    });
  });
  