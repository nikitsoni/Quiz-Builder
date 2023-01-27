<template>
    <div class="container">
        <div class="my-3">
            <h1 class="text-3xl font-bold my-5">{{ q.title }}</h1>
            <div class="text-xl" v-for="question in q.questions">
                <QuestionCard :score="score" :que = "question"/>
            </div>
        </div>
    </div>
</template>

<script setup> 
    const { id } = useRoute().params
    const uri = 'http://localhost:8000/' + id;
    const {data: q} = await useFetch(uri, {key: id});

</script>

<style scoped>

</style>