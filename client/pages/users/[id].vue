<template>
    <div class="grid grid-cols-2">
        <div>
            <h1 class="my-4 font-bold text-xl">Create Quiz:</h1>
            <div>
                <Form :id = "id"/>
            </div>
        </div>
        <div class="flex flex-col">
            <h1 class="my-4 font-bold text-xl">My Quiz: </h1>
            <div class="grid grid-cols-2 gap-5">
                <div v-for="p in quiz">
                    <QuizCard :quiz="p" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {id} = useRoute().params;
    const { data: quiz } = await useFetch('http://localhost:8000/quiz/' + id)

    definePageMeta({
        layout: "users",
    })

</script>

<style lang="scss" scoped>

</style>