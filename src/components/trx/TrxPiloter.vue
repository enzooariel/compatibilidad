<script setup>
let equipos = [
    {
        id: 1,
        titulo : "C5-2",
        descripcion : "Transductor Convexo ",
        img : "../assets/banner.jpg"
    },
    {
        id: 2,
        titulo : "L15-4NB",
        descripcion : "Transductor lineal",
        img : "../assets/banner.jpg"
    },
    {
        id: 3,
        titulo : "P4-1",
        descripcion : "Transductor Cardiaco",
        img : "../assets/banner.jpg"
    },
    {
        id: 4,
        titulo : "L10-5",
        descripcion : "Transductor Lineal",
        img : "../assets/banner.jpg"
    },
]
</script>

<template>

    <NavigationBar></NavigationBar>
    
    <div class="margin-top">

    </div>
 


<div class="row row-cols-1 row-cols-md-2 g-4" >
        <div class="col" v-for="equipo in equipos" :key="equipo.id" >
            <div class="card">
                <img :src="  equipo.img " class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ equipo.titulo }}</h5>
                    <p class="card-text">{{ equipo.descripcion }}</p>
                    
                </div>
            </div>
        </div>
    </div> 


<FooterPie></FooterPie>

    </template>
    
<script>
        export default {
          name: 'TrxClover',
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
