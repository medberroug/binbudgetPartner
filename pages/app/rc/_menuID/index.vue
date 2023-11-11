<template>
    <div>
        <Spinner v-if="loader"></Spinner>
        <div v-if="!loader">
            <!-- <Header></Header> -->
            <div class="flex w-screen px-6 mt-10">
                <nuxt-link to="/app" class="">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-8 h-8 p-1 text-white bg-black rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </div>

                </nuxt-link>
                <div class="flex items-center ml-28">
                    <p class="font-bold text-md">Menu RC</p>
                </div>
            </div>
            <div class="px-6 mt-8">
                <div class="w-auto px-4 py-2 bg-gray-100 rounded-xl">
                    <div>
                        <p class="text-xs text-gray-600">Menu</p>
                        <p class="font-semibold">{{ menu.name }}</p>
                    </div>
                    <div class="flex mt-3">
                        <div class="w-1/3 ">
                            <p class="text-xs text-gray-600">Tarification</p>
                            <p class="text-sm font-semibold " v-if="menu.perItem">Par article</p>
                            <p class="text-sm font-semibold " v-if="!menu.perItem">{{ menu.menuPrice }} dh</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-xs text-gray-600">Code</p>
                            <p class="text-sm font-semibold">{{ menu.code }}</p>
                        </div>
                        <div class="w-1/3 ">
                            <p class="text-xs text-gray-600">Adresse</p>
                            <p class="text-sm font-semibold truncate">{{ menu.address.quartier }}, {{ menu.address.city }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex px-6 mt-2 space-x-2">
                <div class="flex flex-col items-center justify-center w-1/3 px-4 py-2 text-white bg-blue-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mt-2 w-9 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <p class="my-2 text-sm font-semibold">Commandes</p>
                </div>

                <div class="flex flex-col items-center justify-center w-1/3 px-4 py-2 text-white bg-purple-600 rounded-xl"
                    @click="$router.replace('/app/rc/' + $route.params.menuID + '/manageMenu')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mt-2 w-9 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <p class="my-2 text-sm font-semibold">Menu</p>
                </div>

                <div class="flex flex-col items-center justify-center w-1/3 px-4 py-2 text-white bg-green-600 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mt-2 w-9 h-9">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>

                    <p class="my-2 text-sm font-semibold">Service</p>
                </div>

            </div>
            <div class="flex items-center justify-between px-6 mt-6 text-xl font-bold">
                <div class="flex items-center">
                    <div class="w-3 h-3 mr-3 bg-purple-700 rounded-full">
                    </div>
                    Jours
                </div>
                <div class="mr-3 text-sm font-medium text-gray-400">
                    Archive
                </div>
            </div>

            <div role="status" v-if="specialSpinner" class="flex items-center justify-center mt-6">
                <LocalSpinner></LocalSpinner>
            </div>

            <div v-if="!specialSpinner" class="mb-10">
                <nuxt-link :to="'/app/rc/' + $route.params.menuID + '/' + day.dateLong" v-for="(day, index) in rcDays"
                    :key="index">
                    <div class="w-auto px-4 py-4 mx-6 mt-4 bg-gray-100 border-l-4 border-green-600 rounded-2xl">
                        <div class="flex items-center justify-between">
                            <p class="text-2xl font-bold">
                                {{ day.date }}
                            </p>
                            <p class="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded-full">En cours</p>
                        </div>

                        <div class="flex mt-4">
                            <div class="w-1/3">
                                <p class="text-sm font-bold ">
                                    Revenu
                                </p>
                                <p class="truncate">
                                    <span class="font-bold text-green-600">{{ day.revenu.toFixed(2) }}</span>
                                    <span class="text-xs text-gray-600">dh</span>
                                </p>
                            </div>
                            <div class="flex items-center justify-between w-2/3 px-4 py-1 border-2 rounded-lg">
                                <p class="mr-2 text-sm font-bold">
                                    Com.
                                </p>
                                <p class="truncate">
                                    <span class="text-xl">{{ day.stats.total - day.stats.notReserved
                                        - day.stats.notConsumed }}</span>
                                    <span class="text-xs text-gray-600">/{{ day.stats.total }}</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </nuxt-link>
            </div>

            <!-- <nuxt-link to="/app">
                <div class="w-auto px-4 py-4 mx-6 mt-4 bg-gray-100 border-l-4 border-green-600 rounded-2xl">
                    <div class="flex items-center justify-between">
                        <p class="text-2xl font-bold">
                            Mardi 8 Nov.
                        </p>
                        <p class="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded-full">En cours</p>
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
            menu: [],
            rcDays: [],
            specialSpinner: true
        }
    },
    async mounted() {
        try {
            this.menu = await this.$axios.$get("/rcmenus/" + this.$route.params.menuID)

            this.loader = false
            this.rcDays = await this.$axios.$get("/getRcMenuDaysForPartner/" + this.$route.params.menuID)
            this.specialSpinner = false
            console.log(this.rcDays);
        } catch (error) {
            console.log(error);
        }
    },
}

</script>
  