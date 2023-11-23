<script setup>
let equipos5 = [
    {
        id: 1,
        titulo : "AC2541",
        descripcion : "Transductor Convexo ",
        img : "../assets/trx/ac2541.jpg"
    },
    {
        id: 2,
        titulo : "L3-11",
        descripcion : "Transductor Lineal",
        img : "../assets/trx/l3-11.jpg"
    },
    {
        id: 3,
        titulo : "SP2730",
        descripcion : "Transductor Cardiaco",
        img : "../assets/trx/sp2730.jpg"
    },
    {
        id: 4,
        titulo : "SE3123",
        descripcion : "Transductor Endocavitario",
        img : "../assets/trx/se3123.jpg"
    },
]
</script>

<template>

    <NavigationBar></NavigationBar>
    
    <div class="margin-top">

    </div>
 


<div class="row row-cols-1 row-cols-md-2 g-4" >
        <div class="col" v-for="equipo in equipos5" :key="equipo.id" >
            <div class="card">
                <img :src="  equipo.img " class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ equipo.titulo }}</h5>
                    <p class="card-text text-center">{{ equipo.descripcion }}</p>
                    
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
