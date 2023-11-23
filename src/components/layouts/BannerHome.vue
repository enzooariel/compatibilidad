

<template>

  <section>
    <div class="image-container">
      <img src="/assets/bannerhome.jpg" class="img-fluid" alt="">
      
      <RouterLink to="/contactos" ><button class="btn btn-primary btn-bottom-right" >Escríbanos</button></RouterLink>
    </div>
  </section>
  

    </template>
    
  


<style>
section {
  position: relative;
}

.image-container {
  position: relative;
  display: inline-block;
}

.btn-bottom-right {
  position: absolute;
  bottom: 180px;
  right: 300px;
}

@media (max-width: 767px) {
  
  .btn-bottom-right {
    width: auto; 
    font-size: 12px; 
    position: absolute;  
    bottom: 10px;
    right: 10px;
  }
}


</style>