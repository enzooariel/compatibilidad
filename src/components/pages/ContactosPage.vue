

<template>

    <NavigationBar></NavigationBar>
    
    <div class="margin-top">

    </div>
 
      
    <div class="container mt-5">
    <div class="row justify-content-center align-items-center min-vh-80">
      <!-- min-vh-100 establece una altura mínima de la ventana para centrar verticalmente -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">Formulario</h3>
            <!-- Agregamos un título al formulario -->
            <form>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleInputName">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="exampleInputEmail">
              </div>
              <div class="mb-3">
                <label for="exampleInputBrand" class="form-label">Marca</label>
                <select class="form-select" id="exampleInputBrand">
                  <option value="esaote">ESAOTE</option>
                  <option value="wisonic">WISONIC</option>
                  <option value="wisonic">Otras Consultas</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="exampleInputQuery" class="form-label">Consulta/Duda</label>
                <textarea class="form-control" id="exampleInputQuery" rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block">Enviar</button>
              <!-- Utilizamos btn-block para que el botón ocupe todo el ancho del contenedor -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
  <FooterPie></FooterPie>
    </template>
    
    <script>
        export default {
          name: 'ContactosPage',
          components: {
            NavigationBar,
            FooterPie
          } 
        }
    
    
    import NavigationBar from '../layouts/NavigationBar.vue';
    import FooterPie from '../layouts/FooterPie.vue';

        </script>


<style>
    .margin-top{
        margin-top: 50px;
    }
    .header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
    }

    .bigicon {
        font-size: 35px;
        color: #36A0FF;
    }

    .container {
      background-color: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card {
      width: 100%;
      max-width: 400px; /* Ancho máximo de la tarjeta */
      margin: auto; /* Centra la tarjeta horizontalmente */
    }

    .btn-primary {
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
</style>
