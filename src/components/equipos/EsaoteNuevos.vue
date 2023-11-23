

<template>

    <NavigationBar></NavigationBar>
    
    <div class="margin-top">

    </div>
 

    <div class="container mt-5">
    <div class="row justify-content-center">
      <!-- Primera Card -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <RouterLink to="/trxsigma" a href="#" ><img src="../../../public/assets/Equipos/sigma.jpg" class="card-img-top" alt="Imagen 1"></RouterLink>
          <div class="card-body">
            <h5 class="card-title">SIGMA</h5>
            
          </div>
        </div>
      </div>

      <!-- Segunda Card -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <RouterLink to="/trxomega" a href="#" ><img src="../../../public/assets/Equipos/omega.jpg" class="card-img-top" alt="Imagen 1"></RouterLink>
          <div class="card-body">
            <h5 class="card-title">OMEGA</h5>
          </div>
        </div>
      </div>


    </div>
  </div>

  <FooterPie></FooterPie>


    </template>
    
    <script >
        export default {
          name: 'EsaoteNuevos',
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

    .container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card {
    width: 100%;
    }

    .card-title {
    text-align: center;
    }
</style>
