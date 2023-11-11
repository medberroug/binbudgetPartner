<template>
    <div>
        <Spinner v-if="loader"></Spinner>
        <div v-if="!loader">
            <!-- <Header></Header> -->
            <div class="flex w-screen px-6 mt-10">
                <nuxt-link :to="'/app/rc/' + $route.params.menuID" class="">
                    <div class="flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-8 h-8 p-1 text-white bg-black rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </div>

                </nuxt-link>
                <div class="flex items-center ml-28">
                    <p class="font-bold text-md">Gérer le menu</p>
                </div>
            </div>
            <div class="flex items-center justify-between px-6 mt-6 text-xl font-bold">
                <div class="flex items-center">
                    <div class="w-3 h-3 mr-3 bg-black rounded-full">
                    </div>
                    Détails du menu
                </div>
                <!-- <div class="mr-3 text-sm font-medium text-gray-400">
                    Archive
                </div> -->
            </div>
            <div class="px-4 py-4 mx-6 mt-4 bg-gray-100 rounded-lg">
                <div>
                    <p class="text-xs font-semibold text-gray-600">
                        Menu
                    </p>
                    <p class="font-semibold">
                        {{ menu.name }}
                    </p>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <div class="w-1/3">
                        <p class="text-xs font-semibold text-gray-600">
                            Code Menu
                        </p>
                        <p class="font-semibold">
                            {{ menu.code }}
                        </p>
                    </div>
                    <div class="w-1/3">
                        <p class="text-xs font-semibold text-gray-600">
                            Tarification
                        </p>
                        <p class="font-semibold" v-if="menu.menuPrice && !menu.perItem">
                            {{ menu.menuPrice.toFixed(2) }} dh
                        </p>
                        <p class="font-semibold" v-if="menu.perItem">
                            Par article
                        </p>
                    </div>
                    <div class="w-1/3">
                        <p class="text-xs font-semibold text-gray-600">
                            adress
                        </p>
                        <p class="font-semibold truncate">
                            {{ menu.address.quartier }}, {{ menu.address.city }}
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <div class="w-3/5">
                        <p class="text-xs font-semibold text-gray-600">
                            Réserver
                        </p>
                        <p class="font-semibold">
                            {{ menu.hoursBeforeBlock }} <span class="ml-1 text-xs font-light text-gray-600">heures avant</span>
                        </p>
                    </div>
                    <div class="w-1/5">
                        <p class="text-xs font-semibold text-gray-600">
                            Début
                        </p>
                        <p class="font-semibold">
                            {{ menu.startOfTaking.split(":")[0] + ":" + menu.startOfTaking.split(":")[1] }}
                        </p>

                    </div>
                    <div class="w-1/5">
                        <p class="text-xs font-semibold text-gray-600">
                            Fin
                        </p>
                        <p class="font-semibold">
                            {{ menu.endOfTaking.split(":")[0] + ":" + menu.endOfTaking.split(":")[1] }}
                        </p>

                    </div>
                </div>
                <hr class="my-4">
                <div class="mt-3">
                    <p class="text-xs font-semibold text-gray-600">
                        Description
                    </p>
                    <p class="text-xs font-semibold">{{ menu.description }}</p>
                </div>
            </div>
            <div class="flex items-center justify-between px-6 mt-6 text-xl font-bold">
                <div class="flex items-center">
                    <div class="w-3 h-3 mr-3 bg-purple-600 rounded-full">
                    </div>
                    Menus des jours
                </div>
                <div class="mr-3 text-sm font-medium text-gray-400">
                    Archive
                </div>
            </div>
            <div class="px-4 py-4 mx-4 my-4 bg-gray-100 rounded-lg" v-if="rcDays.futurDays"
                v-for="(day, index) in rcDays.futurDays" :key="index">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs font-semibold text-gray-600">
                            Jour
                        </p>
                        <p class="text-lg font-bold">
                            {{ day.dateText }}
                        </p>
                    </div>
                    <div>
                        <nuxt-link :to="'/app/rc/'+$route.params.menuID+'/manageMenu/editDay/'+day.day.id">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </nuxt-link>
                    </div>
                </div>
                <div v-for="(choices, index2) in day.day.choices" :key="index2">
                    <div class="flex items-center my-2">
                        <div class="flex-grow mr-2 border-t border-gray-300"></div>
                        <span class="flex items-center text-sm text-gray-600 ">{{ choices.name }}

                            <svg v-if="choices.required" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1 text-red-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <svg v-if="!choices.required" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>


                        </span>
                        <div class="flex-grow ml-2 border-t border-gray-300"></div>
                    </div>
                    <div class="flex items-center justify-between px-4 py-2 mx-6 mb-2 bg-gray-200 rounded-lg"
                        v-for="(item, index3) in choices.items">
                        <p class="text-xs font-semibold">{{ item.name }}</p>
                        <p class="text-xs text-gray-800">{{ item.price }} dh</p>
                    </div>
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
            title: "Orders",
        }
    },
    data() {
        return {
            loader: true,
            menu: [],
            rcDays: [],
            specialSpinner: true,
            days: []
        }
    },
    async mounted() {
        try {
            this.menu = await this.$axios.$get("/rcmenus/" + this.$route.params.menuID)
            console.log(this.menu);
            this.rcDays = await this.$axios.$get("/getRcMenuDayForPartner/" + this.menu.id)
            this.loader = false
            this.specialSpinner = false
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async getOneRcMenuDay(rcMenuDayID) {
            let rcMenuDay = await this.$axios.$put("/rcmenudays/" + rcMenuDayID)
            // console.log(rcMenuDay);
            return rcMenuDay
        }
    }
}

</script>
  