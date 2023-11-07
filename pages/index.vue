<template>
  <div class="px-8 pt-12 transform">
    <div>
      <div class="flex flex-col justify-start">
        <img src="@/assets/images/logoPartner.png" class="w-2/5" alt="">
        <p class="mt-6 mr-6 text-sm text-gray-600">
          Bienvenue dans l'application <b>BinBudget Partner</b>, où vous pouvez gérer vos commandes et recevoir des
          notifications
          !
        </p>
      </div>
      <div class="w-auto px-2 py-3 mt-8 bg-gray-100 rounded-xl">
        <p class="mx-6 text-2xl font-semibold text-center text-purple-600 ">Se connecter</p>
        <div class="px-6 mt-4">
          <p class="mb-1 text-sm font-semibold text-gray-600">Nom d'utilisateur</p>
          <input v-model="username" type="email"
            class="w-full h-10 mx-auto bg-white border-2 rounded-lg focus:border-purple-600" name="">
        </div>
        <div class="px-6 mt-4">
          <p class="mb-1 text-sm font-semibold text-gray-600">Mot de passe</p>
          <input v-model="password" type="password"
            class="w-full h-10 mx-auto bg-white border-2 rounded-lg focus:border-purple-600" name="">
        </div>

        <div class="flex justify-center mt-6">
          <button class="w-1/2 py-2 mx-12 text-sm font-bold text-white bg-purple-600 rounded-lg p-x3" @click="test()">Sign
            in</button>
        </div>
        <div class="mt-6 mb-2 text-center">
          <p class="text-xs text-gray-400">Vous avez oublié votre mot de passe ?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: "BinBudget"
    }
  },
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    test() {
      console.log(this.username);
      console.log(this.password);
      this.$router.push("/app")
    }
  },
  

}
</script>

