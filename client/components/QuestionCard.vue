<template>
    <div class="p-4">
        <h2 class="font-bold text-2xl my-2">Question: {{ que.question }}</h2>
        <p v-if="que.ismultiplechoice" class="text-red-500"> Choose Multiple Options</p>
        <p v-else class="text-red-500">Choose only one option.</p>
        <h2 class="my-2">Options: </h2>
        <div class="p-2 form-check" v-for = "option in que.options">
            <input v-model = "input_answers" 
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                    type="checkbox" :value="option.trim()" />
            <label class="form-check-label inline-block text-gray-800">
                {{option}}
            </label>
        </div>
        <button @click="check_answers" class="bg-blue-500 w-36 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">Submit</button>
    </div>
</template>

<script>
    let score = 0;
    export default{
        props: {
            que: Object,
        },
        name: "questioncard",
        data(){
            return{
                input_answers : [],
            }
        },
        methods: {
            check_answers(){

                this.input_answers.sort()
                this.$props.que.answers.sort()
                console.log(this.input_answers)
                console.log(this.$props.que.answers)

                let verify = true;

                if (this.input_answers.length != this.$props.que.answers.length){
                    verify = false
                }

                for(let i = 0; i < this.$props.que.answers.length; i++){
                    if (this.$props.que.answers[i] != this.input_answers[i]){
                        verify = false
                    }
                }

                if (verify === true){
                    score += 1
                }
                alert(`Current Score: ${score}`)
                }
            }
        }
</script>
<style scoped>

</style>