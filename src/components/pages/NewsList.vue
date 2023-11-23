<script setup>
import {ref} from 'vue'

import PageTitle from './PageTitle.vue'

import posts from '../../data/posts.json'

const title = "Listado de Noticias"

const news = ref(posts)

/*
onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => news.value = json)
})
*/

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <PageTitle :title="title" />

                <div class="list-group">
                    <div :key="item.id" v-for="item in news" class="list-group-item">
                        <RouterLink :to="`/news/${item.id}`">
                            {{ item.title }}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
