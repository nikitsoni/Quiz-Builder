<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in quiz">
                <QuizCard :quiz="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data: quiz } = await useFetch('http://localhost:8000/')
</script>

<style scoped>

</style>