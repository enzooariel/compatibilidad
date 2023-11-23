

<template>

    <NavigationBar></NavigationBar>
    
    <div class="margin-top">

    </div>
 

    <div class="container mt-5">
    <div class="row justify-content-center">
      <!-- Primera fila -->
      <div class="row mb-4 text-center">
        <div class="col-md-6">
          <!-- Primera card -->
          <div class="card">
            <img src="../../../public/assets/esaotenuevos.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Esaote Nuevos Portatiles</h5>
              <p class="card-text">Encontraras dos modelos de ecógrafos portatiles</p>
              <RouterLink to="/esaotenuevos" a href="#" class="btn btn-primary ">Ver Modelos</RouterLink>
            </div>
          </div>
        </div>

        <div class="col-md-6 ">
          <!-- Segunda card -->
          <div class="card">
            <img src="../../../public/assets/banner.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Wisonic</h5>
              <p class="card-text">Encontraras dos modelos de ecógrafos portatiles</p>
              <RouterLink to="/wisonicportatil" a href="#" class="btn btn-primary">Ver Modelos</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Segunda fila -->
      <div class="row mb-4 text-center">
        <div class="col-md-6">
          <!-- Tercera card -->
          <div class="card">
            <img src="../../../public/assets/esaoteportatilviejo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Esaote Viejos Portatiles</h5>
              <p class="card-text">Encontraras dos modelos de ecógrafos portatiles</p>
              <RouterLink to="/esaoteviejosportatil" a href="#" class="btn btn-primary">Ver Modelos</RouterLink>
              
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <!-- Cuarta card -->
          <div class="card">
            <img src="../../../public/assets/esaoteviejos.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Esaote Viejo con Carro</h5>
              <p class="card-text">Encontraras tres modelos de ecógrafos viejos con carro</p>
              <RouterLink to="/esaoteviejoscarros" a href="#" class="btn btn-primary">Ver Modelos</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <FooterPie></FooterPie>

    </template>
    
<script >
        export default {
          name: 'EquiposPage',
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
  width: 18rem;
  margin: 0 auto; 
}

.card-title {
  text-align: center;
}
</style>





