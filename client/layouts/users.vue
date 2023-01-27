<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Quiz Builder</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/quiz">All Quiz</NuxtLink></li>
                    <li><NuxtLink to="/">Logout</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: coral;
    }
</style>