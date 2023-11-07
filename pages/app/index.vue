<template>
    <div>
        <Spinner v-if="loader"></Spinner>
        <div v-if="!loader">
            <Header></Header>
            <div class="flex items-center justify-between px-4 text-xl font-bold mt-14">
                <div class="flex items-center">
                    <div class="w-2 h-2 mr-3 bg-green-600 rounded-full animate-ping">
                    </div>
                    Restauration Collective
                </div>
                <div class="mr-3 text-sm font-medium text-gray-400">
                    Voir plus
                </div>
            </div>

            <!-- <nuxt-link to="/app">
            <div class="w-auto px-4 py-4 mx-6 mt-4 bg-gray-100 border-l-4 border-green-600 rounded-2xl">
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold">
                        Mardi 8 Nov.
                    </p>
                    <p class="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded-full">En cours</p>
                </div>
                <div class="flex items-center justify-between mt-3">
                    <div class="w-2/3">
                        <p class="text-sm font-bold ">
                            Menu
                        </p>
                        <p class="truncate">
                            Menu personel MTEDD
                        </p>
                    </div>
                    <div class="w-1/3">
                        <p class="text-sm font-bold ">
                            Client
                        </p>
                        <p class="truncate">
                            MTEDD
                        </p>
                    </div>
                </div>
                <div class="mt-4 ">
                    <p class="text-sm font-bold ">
                        En cuisine
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-center justify-center mr-2">
                            <p class="text-lg font-bold">120</p>
                            <p class="text-xs text-red-600">A préparer</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <div class="flex flex-col items-center justify-center mr-2">
                            <p class="text-lg font-bold">120</p>
                            <p class="text-xs text-blue-600">Préparé</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <div class="flex flex-col items-center justify-center mr-2">
                            <p class="text-lg font-bold">120</p>
                            <p class="text-xs text-green-600">Servis</p>
                        </div>
                    </div>
                </div>
                <div class="flex mt-4">
                    <div class="w-1/3">
                        <p class="text-sm font-bold ">
                            Revenu
                        </p>
                        <p class="truncate">
                            <span class="font-bold text-green-600">4509,00</span>
                            <span class="text-xs text-gray-600">dh</span>
                        </p>
                    </div>
                    <div class="flex items-center justify-between w-2/3 px-4 py-1 border-2 rounded-lg">
                        <p class="mr-2 text-sm font-bold">
                            Com.
                        </p>
                        <p class="truncate">
                            <span class="text-xl">320</span>
                            <span class="text-xs text-gray-600">/340</span>
                        </p>
                    </div>

                </div>
            </div>
        </nuxt-link> -->
            <nuxt-link :to="'/app/rc/'+menu.id" v-for="(menu, index) in menus" :key="index">
                <div class="w-auto px-4 py-4 mx-6 mt-4 bg-gray-100 border-l-4 border-green-600 rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="w-2/3">
                            <p class="text-sm font-bold ">
                                Menu
                            </p>
                            <p class="truncate">
                                {{ menu.menuName }}
                            </p>
                        </div>
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="w-8 h-8 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </nuxt-link>
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
    data() {
        return {
            loader: true,
            menus: []
        }
    },
    async mounted() {
        try {
            this.menus = await this.$axios.$get("/getRCForPartner")
            this.loader = false
        } catch (error) {

        }
    },
}

</script>
  