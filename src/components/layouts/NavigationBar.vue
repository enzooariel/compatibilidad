
<template>
  
    <nav class="navbar navbar-expand-lg bg-info"  >
        <div class="container-fluid ">
          <RouterLink to="/">  <img  class="logo" src="../../../public/assets/logo.png" alt=""> </RouterLink>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                      <li class="nav-item">
                        <RouterLink to="/" class="nav-link" aria-current="page" href="#">Inicio</RouterLink>
                      </li>
                      <li class="nav-item">
                        <RouterLink to="/equipos" class="nav-link" href="#">Equipos</RouterLink>
                      </li>
                      <li class="nav-item">
                        <RouterLink to="/contactos" class="nav-link" href="#">Contacto</RouterLink>
                      </li>
                      
                    </ul>
                </div>
        </div>
  </nav>
  
  </template>
  
  <script>
    export default {
        name: 'NavigationBar',
    
    }
  </script>
  
  <style>
 
 @import "http://fonts.googleapis.com/css?family=Montserrat:400,100,200,300,500,600,700,800,900";

  #background{
    background-color: #ccffff;
  }
  .logo{
    width: 70px;
    height: 70px;
  
  }
  #navbarNav{
    
    justify-content:end;
  }
  
 
ul li{
  color: black;
  line-height: 20px;
	font-size: 18px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;

} 
ul li:hover{
  background-color: aliceblue;
  border-radius: 15px;
}
.nav-link{
  color:rgb(227, 230, 233);
  
}

  </style>