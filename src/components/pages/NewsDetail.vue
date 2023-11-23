<script setup>
import {ref, onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const post = ref({})

onBeforeMount(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + route.params.id)
        .then(res => res.json())
        .then(json => post.value = json)
})

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h4>{{ post.title }}</h4>
            </div>
        </div>
    </div>
</template>
