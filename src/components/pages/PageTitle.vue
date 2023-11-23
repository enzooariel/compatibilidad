<script setup>
import {defineProps} from 'vue'

const props = defineProps(['title'])
</script>

<template>
    <div class="h3">{{ props.title }}</div>
</template>