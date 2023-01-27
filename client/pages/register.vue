<template>
    <div class="container px-72">
        <h1 class="my-10 flex justify-center text-3xl font-bold">Register</h1>
        <div class="flex flex-col justify-center">
            <div class="mb-6">
                <input
                  v-model = "name"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            <div class="mb-6">
                <input
                v-model = "email"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <div class="mb-6">
                <input
                  v-model = "password"
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            <button
            @click="submit"
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Login
            </button>
        </div>
    </div>
</template>

<script>
  export default{
    name : "register",
    data(){
      return {
        name: "",
        email: "",
        password: ""
      }
    },
    methods: {
      submit(){
        this.submitRequest().then((result) => {
          console.log(result)
          alert("Registed!")
          this.$router.push("/login")
        }).catch((error) => {
          console.error('Cant Login', error)
        })
      },
      async submitRequest(){
        await $fetch('http://localhost:8000/auth/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>