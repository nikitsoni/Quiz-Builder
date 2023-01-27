<template>
    <div>
        <form class="w-full max-w-lg">
            
            <div class="flex flex-wrap">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block tracking-wide text-gray-700 text-x mb-2">
                        Quiz Title:
                    </label>
                    <input v-model="quiz.title" class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Business Quiz">
                </div>
            </div>
            
            <Question ref="question" />

            <div>
                <button @click="handle_add" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add</button>
            </div>
            
            <button @click="submit_data" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4"> Submit Quiz</button>
    </form>
    </div>
</template>

<script>
    let all_questions = [];

    export default{
        props: {
            id: String
        },
        data(){
            return{
                quiz:{
                    title : ''
                }
            }
        },
        methods:{
            handle_add(e){
                console.log(this.$refs)
                let question = this.$refs.question.$data.questions

                question.options = question.options.trim()
                question.answers = question.answers.trim()

                question.options = question.options.split(",")
                question.answers = question.answers.split(",")
                
                
                if (question.ismultiplechoice.length === 1){
                    question.ismultiplechoice = true
                }
                else{
                    question.ismultiplechoice = false
                }

                let newQuestion = Object.assign({}, question);
                all_questions.push(newQuestion)
                console.log(all_questions)

                alert("Question Added!")

                e.preventDefault()
            },
            submit_data(e){
                this.submit_request().catch((error) => {
                    console.error('Cant Login', error)
                    })
                this.$router.push(`/users/${this.$props.id}`)
                e.preventDefault();
            },
            async submit_request(){ 
                await $fetch('http://localhost:8000/quiz/'+this.$props.id+'/create', {
                  method: "POST",
                  headers: {'Content-Type': 'application/json'},
                  body:{
                    userId: this.$props.id,
                    title: this.quiz.title,
                    questions: all_questions
                  }  
                }).then((result) => {
                    console.log(result)
                    alert("Quiz Added")
                })
            }
        }
}

</script>

<style scoped>

</style>