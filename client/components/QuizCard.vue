<template>
    <div class="container p-4 flex flex-col bg-slate-100 rounded">
        <h1 class="text-2xl font-medium my-3">Quiz: {{ quiz.title }}</h1>
        <h3>Number of Questions: {{ quiz.questions.length }}</h3>
        <NuxtLink :to="`/quiz/${quiz._id}`" class="bg-blue-500 w-36 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded" >Take Quiz!</NuxtLink>
    </div>
</template>

<script setup>
    const {quiz} = defineProps(['quiz'])
</script>

<style scoped>

</style>