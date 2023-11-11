<template>
    <div>
        <!-- Floating Div -->
        <!-- <nuxt-link to="/">
            <div class="fixed inset-x-0 flex items-center justify-center w-auto h-12 mx-4 text-center text-white rounded-full -z-40 bottom-4 backdrop-blur-sm bg-black/30 ">
                XX
            </div>
        </nuxt-link> -->
        <!-- Modal -->
        <transition enter-active-class="transition duration-300 transform" enter-class="translate-x-full"
            enter-to-class="translate-x-0" leave-active-class="transition duration-300 transform"
            leave-class="translate-x-0" leave-to-class="translate-x-full">


            <div class="fixed flex items-center justify-center w-screen h-screen bg-white/80 backdrop-blur"
                v-if="rightMenu.modal">
                <!-- <LocalSpinner v-if="rightMenu.spinner"></LocalSpinner> -->
                <div class="w-screen h-screen px-4 py-6 ">
                    <!-- <input type="text" name="" id=""> -->
                    <div class="flex items-center justify-between">
                        <div @click="rightMenu.modal = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <!-- <p class="text-xl font-semibold text-center ">Ajouter un article</p> -->
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                @click="signOut()" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>

                        </div>
                    </div>
                    <div class="px-4 mt-10">
                        <div class="flex flex-col items-center">
                            <img src="iconPartner.png" alt="" class="w-16 h-16 border-2 border-purple-600 rounded-full">
                            <p class="mt-2 text-xl font-bold">{{ user.username }}</p>
                        </div>

                    </div>
                    <!-- <p class="font-semibold text-gray-600">Article</p>
                <input type="text" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="Nom de l'article..."
                    v-model="rightMenu.name">
                <p class="font-semibold text-gray-600">Prix</p>
                <input type="number" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="29..."
                    v-model="rightMenu.price">
                <div class="flex items-center justify-center mt-4">
                    <button type="button"
                        @click="rightMenu.modal = false; rightMenu.name = null; rightMenu.price = null; rightMenu.choicesID = null"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-black rounded-lg">Annuler</button>
                    <button type="button" @click="addItem()" v-if="rightMenu.name"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-green-600 rounded-lg">Ajouter</button> -->
                    <!-- </div> -->
                </div>
            </div>
        </transition>

        <!-- Top Header of the App -->
        <div class="flex items-center justify-between px-6 pt-4">
            <div class="text-2xl font-bold">
                <nuxt-link to="/">
                    <img src="@/assets/images/logoPartner.png" class="">
                </nuxt-link>
            </div>
            <div class="flex items-center justify-center bg-gray-100 rounded-3xl w-14 h-14 "
                @click="rightMenu.modal = true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="text-black w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'IndexPage',
    // head() {
    //     return {
    //         title: "Orders"
    //     }
    // },
    data() {
        return {
            rightMenu: {
                modal: false
            },
            user: null,
        }
    },
    async mounted() {
        // let clients = await this.$axios.$get("/clients")
        // console.log(clients);
        // let user = await this.$axios.$get("/us")
        this.user = this.$localController("get", { key: "authData" })
        this.user = this.user.data.user
    },
    methods: {
        signOut() {
            this.$localController("delete", { key: "authData" })
            this.$router.push("/")
        }
    }
}

</script>
  