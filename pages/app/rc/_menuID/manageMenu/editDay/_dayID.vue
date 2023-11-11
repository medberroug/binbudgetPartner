<template>
    <div>
        <!-- MODALS  -->
        <div class="fixed flex items-center justify-center w-screen h-screen bg-black/50 backdrop-blur"
            v-if="newArticle.modal">
            <LocalSpinner v-if="newArticle.spinner"></LocalSpinner>
            <div class="w-screen px-4 py-6 mx-6 bg-white rounded-2xl" v-if="!newArticle.spinner">
                <!-- <input type="text" name="" id=""> -->
                <p class="mb-3 text-xl font-semibold text-center">Ajouter un article</p>
                <p class="font-semibold text-gray-600">Article</p>
                <input type="text" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="Nom de l'article..."
                    v-model="newArticle.name">
                <p class="font-semibold text-gray-600">Prix</p>
                <input type="number" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="29..."
                    v-model="newArticle.price">
                <div class="flex items-center justify-center mt-4">
                    <button type="button"
                        @click="newArticle.modal = false; newArticle.name = null; newArticle.price = null; newArticle.choicesID = null"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-black rounded-lg">Annuler</button>
                    <button type="button" @click="addItem()" v-if="newArticle.name"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-green-600 rounded-lg">Ajouter</button>
                </div>
            </div>
        </div>
        <div class="fixed flex items-center justify-center w-screen h-screen bg-black/50 backdrop-blur"
            v-if="editArticle.modal">
            <LocalSpinner v-if="editArticle.spinner"></LocalSpinner>
            <div class="w-screen px-4 py-6 mx-6 bg-white rounded-2xl" v-if="!editArticle.spinner">
                <!-- <input type="text" name="" id=""> -->
                <p class="mb-3 text-xl font-semibold text-center">Modifier un article</p>
                <p class="font-semibold text-gray-600">Article</p>
                <input type="text" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="Nom de l'article..."
                    v-model="editArticle.name">
                <p class="font-semibold text-gray-600">Prix</p>
                <input type="number" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="29..."
                    v-model="editArticle.price">
                <div class="flex items-center justify-center mt-4">
                    <button type="button"
                        @click="editArticle.modal = false; editArticle.name = null; editArticle.price = null; editArticle.choicesID = null"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-black rounded-lg">Annuler</button>
                    <button type="button" @click="deleteItem()" v-if="editArticle.howMany > 1"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-red-600 rounded-lg">Supprimer</button>
                    <button type="button" @click="editItem()" v-if="editArticle.name"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-green-600 rounded-lg">Modifier</button>

                </div>
            </div>
        </div>
        <div class="fixed flex items-center justify-center w-screen h-screen bg-black/50 backdrop-blur"
            v-if="newChoice.modal">
            <LocalSpinner v-if="newChoice.spinner"></LocalSpinner>
            <div class="w-screen px-4 py-6 mx-6 bg-white rounded-2xl" v-if="!newChoice.spinner">
                <!-- <input type="text" name="" id=""> -->
                <p class="mb-3 text-xl font-semibold text-center">Ajouter un choix</p>
                <p class="font-semibold text-gray-600">Nom Choix</p>
                <input type="text" class="w-full h-10 px-2 my-2 bg-gray-100 rounded-lg" placeholder="Plats..."
                    v-model="newChoice.name">
                <label class="relative inline-flex items-center mt-4 cursor-pointer">
                    <input type="checkbox" newChoice.required class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600">
                    </div>
                    <span class="ml-3 text-sm font-medium text-gray-900 ">Obligatoire</span>
                </label>
                <div class="flex items-center justify-center mt-4">
                    <button type="button"
                        @click="newChoice.modal = false; newChoice.name = null; newChoice.required = false"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-black rounded-lg">Annuler</button>
                    <button type="button" @click="addChoice()" v-if="newChoice.name"
                        class="px-4 py-1 mx-2 font-semibold text-white bg-green-600 rounded-lg">Ajouter</button>

                </div>
            </div>
        </div>
        <!-- FIN MODALS  -->
        <Spinner v-if="loader"></Spinner>
        <div v-if="!loader">
            <!-- <Header></Header> -->
            <div class="flex w-screen px-6 pt-10">
                <nuxt-link :to="'/app/rc/' + $route.params.menuID + '/manageMenu'" class="">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-8 h-8 p-1 text-white bg-black rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </div>

                </nuxt-link>
                <div class="flex items-center ml-20">
                    <p class="font-bold text-md">Gérer un menu du jour</p>
                </div>
            </div>
            <div class="" v-for="(choice, index) in rcDay.choices">
                <div class="flex items-center justify-between px-6 mt-6 text-xl font-bold">
                    <div class="flex items-center">
                        <div class="w-3 h-3 mr-3 bg-black rounded-full">
                        </div>
                        <p>{{ choice.name }}</p>
                        <svg @click="deleteChoice(choice.id)" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="px-1 py-1 mx-4 text-white bg-red-600 rounded-full w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </div>
                    <div @click="changeRequiredStatus(choice.id)">
                        <svg v-if="choice.required" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" class="w-5 h-5 ml-1 text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <svg v-if="!choice.required" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" class="w-5 h-5 ml-1 text-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <!-- <div class="mr-3 text-sm font-medium text-gray-400">
                    Archive
                </div> -->
                </div>
                <div class="flex items-center justify-between px-2 py-4 pr-4 mx-6 mt-4 bg-gray-100 rounded-lg"
                    v-for="(item, index2) in choice.items">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center text-white bg-blue-600 rounded-full w-7 h-7"
                            @click="editArticle.modal = true; editArticle.choicesID = choice.id; editArticle.itemID = item.id; editArticle.name = item.name; editArticle.price = item.price; editArticle.howMany = choice.items.length">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>

                        </div>
                        <div>
                            <p class="text-xs font-semibold text-gray-600">
                                Article
                            </p>
                            <p class="text-xs font-semibold disabled:bg-gray-100">{{ item.name }}</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-xs font-semibold text-gray-600">
                            Prix
                        </p>
                        <p class="text-xs font-semibold disabled:bg-gray-100">{{ item.price }} dh</p>

                    </div>
                </div>
                <div class="flex items-center justify-center mx-12 mt-4">
                    <button type="button" @click="newArticle.choicesID = choice.id; newArticle.modal = true"
                        class="px-2 py-1 mx-2 text-xs font-semibold text-white bg-blue-600 rounded-lg">Ajouter un
                        article</button>
                </div>

            </div>
            <div class="flex items-center justify-center mx-12 my-14">
                <button @click="newChoice.modal = true" type="button"
                    class="px-3 py-2 mx-2 font-semibold text-white bg-purple-600 rounded-lg">Ajouter un
                    choix</button>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'IndexPage',
    head() {
        return {
            title: "Orders",
        }
    },
    transition: 'fade',
    data() {
        return {
            loader: true,
            menu: [],
            rcDays: [],
            specialSpinner: true,
            days: [],
            rcDay: null,
            newArticle: {
                modal: false,
                name: null,
                price: null,
                choicesID: null,
                spinner: false
            },
            editArticle: {
                modal: false,
                name: null,
                price: null,
                itemID: null,
                choicesID: null,
                spinner: false,
                howMany: 0
            },
            newChoice: {
                modal: false,
                name: null,
                required: false,
            }
        }
    },
    async mounted() {
        try {
            this.rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            this.loader = false
            this.specialSpinner = false
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async addItem() {
            this.newArticle.spinner = true
            let rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            for (let choice of rcDay.choices) {
                if (choice.id == this.newArticle.choicesID) {
                    choice.items.push({
                        name: this.newArticle.name,
                        price: this.newArticle.price
                    })
                }
            }
            let newChoices = rcDay.choices.map(obj => {
                return {
                    required: obj.required,
                    name: obj.name,
                    items: obj.items.map(article => {
                        return {
                            name: article.name,
                            price: article.price
                        }
                    })
                }
            })
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + this.$route.params.dayID, {
                choices: newChoices
            })
            this.newArticle = {
                modal: false,
                name: null,
                price: null,
                choicesID: null,
                spinner: false
            }
            this.$router.go()
        },
        async editItem() {
            this.editArticle.spinner = true
            let rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            let newChoices = rcDay.choices.map(obj => {
                return {
                    required: obj.required,
                    name: obj.name,
                    items: obj.items.map(article => {
                        if (article.id == this.editArticle.itemID) {
                            article = {
                                name: this.editArticle.name,
                                price: this.editArticle.price
                            }
                        }
                        return {
                            name: article.name,
                            price: article.price
                        }
                    })
                }
            })
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + this.$route.params.dayID, {
                choices: newChoices
            })
            this.newArticle = {
                modal: false,
                name: null,
                price: null,
                choicesID: null,
                spinner: false
            }
            this.$router.go()
        },
        async deleteItem() {
            this.editArticle.spinner = true
            let rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            let newChoices = rcDay.choices.map(obj => {
                return {
                    required: obj.required,
                    name: obj.name,
                    items: obj.items.filter(article => {
                        return article.id != this.editArticle.itemID
                    }).map(article2 => {
                        return {
                            name: article2.name,
                            price: article2.price
                        }
                    })
                }
            })
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + this.$route.params.dayID, {
                choices: newChoices
            })
            this.editArticle = {
                modal: false,
                name: null,
                price: null,
                choicesID: null,
                spinner: false
            }
            this.$router.go()
        },
        async changeRequiredStatus(choiceID) {
            let rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            let newChoices = rcDay.choices.map(obj => {
                if (obj.id == choiceID) {
                    obj.required = !obj.required
                }
                return {
                    required: obj.required,
                    name: obj.name,
                    items: obj.items.map(article => {
                        return {
                            name: article.name,
                            price: article.price
                        }
                    })
                }
            })
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + this.$route.params.dayID, {
                choices: newChoices
            })
            this.$router.go()
        },
        async deleteChoice(choiceID) {
            let rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            let newChoices = rcDay.choices.filter(obj => {
                return obj.id != choiceID
            }).map(obj => {
                return {
                    required: obj.required,
                    name: obj.name,
                    items: obj.items.map(article => {
                        return {
                            name: article.name,
                            price: article.price
                        }
                    })
                }
            })
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + this.$route.params.dayID, {
                choices: newChoices
            })
            this.$router.go()
        },
        async addChoice() {
            this.newChoice.spinner = true
            let rcDay = await this.$axios.$get("/rcmenudays/" + this.$route.params.dayID)
            rcDay.choices.push({
                name: this.newChoice.name,
                required: this.newChoice.required,
                items: [{
                    name: "Modifier le nom de l'article!",
                }]
            })
            let newChoices = rcDay.choices.map(obj => {
                return {
                    required: obj.required,
                    name: obj.name,
                    items: obj.items.filter(article => {
                        return article.id != this.editArticle.itemID
                    }).map(article2 => {
                        return {
                            name: article2.name,
                            price: article2.price
                        }
                    })
                }
            })
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + this.$route.params.dayID, {
                choices: newChoices
            })
            this.newChoice = {
                spinner: false,
                modal: false,
                name: null,
                required: false,
            }
            this.$router.go()
        }
    }
}

</script>
  