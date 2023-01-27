<template>
    <div class="question p-6">
        <div class="my-4">
            <label class="block tracking-wide text-gray-700 text-x mb-2"> Question: </label>
            <input v-model = "questions.question" class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Type your question"/>
        </div>
        <div class="flex items-center my-4">
            <input v-model = "questions.ismultiplechoice" checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label class="ml-2 text-sm font-medium">is Multiple Choice?</label>
        </div>
        <div class="my-4">
            <label class="block tracking-wide text-gray-700 text-x mb-2"> Options: </label>
            <input v-model = "questions.options" class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Type your question"/>
            <p class="text-red-400 text-sm">Add options with comma seperated!</p>
        </div>
        <div class="my-4">
            <label class="block tracking-wide text-gray-700 text-x mb-2"> Answers: </label>
            <input v-model = "questions.answers" class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Type your question"/>
            <p class="text-red-400 text-sm">Add answers with comma seperated!</p>
        </div>
        <div>
            <button @click="reset_form" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4">Reset Form</button>
        </div>
        
    </div>
</template>

<script>
    export default{
        name : 'question',
        data(){
        return {
            questions:{
                question: "",
                ismultiplechoice: [],
                options: "",
                answers: ""
            }
            }
        },
        methods: {
            reset_form(e){
                this.questions.question = "";
                this.questions.ismultiplechoice = [];
                this.questions.options = "";
                this.questions.answers = "";
                e.preventDefault()
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>