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
                    <p class="font-bold text-md">Jour RC</p>
                </div>
            </div>
            <div class="w-auto px-4 py-4 mx-6 mt-8 bg-gray-100 rounded-2xl">
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold">
                        {{ oneDay.dateText }}
                    </p>
                    <!-- <p class="px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded-full">En cours</p> -->
                </div>
                <div class="mt-4 ">
                    <p class="text-sm font-bold ">
                        Statut
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-center justify-center mr-2">
                            <p class="text-lg font-bold">{{ oneDay.stats.notReserved }}</p>
                            <p class="text-xs text-red-600">Non réservé</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <div class="flex flex-col items-center justify-center mr-2">
                            <p class="text-lg font-bold">{{ oneDay.stats.reserved }}</p>
                            <p class="text-xs text-blue-600">Réservé</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <div class="flex flex-col items-center justify-center mr-2">
                            <p class="text-lg font-bold">{{ oneDay.stats.consumed }}</p>
                            <p class="text-xs text-green-600">Consommé</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <div class="flex flex-col items-center justify-center py-1 pl-3 pr-2 bg-red-400 rounded-l-xl">
                        <p class="text-lg font-bold">{{ oneDay.stats.notConsumed }}</p>
                        <p class="text-xs text-black">Non consommé</p>
                    </div>


                    <div
                        class="flex flex-col items-center justify-center py-1 pl-3 pr-2 mr-2 text-white bg-red-700 rounded-r-xl">
                        <p class="text-lg font-bold">{{ oneDay.stats.wasted }}</p>
                        <p class="text-xs">Gaspillé</p>
                    </div>
                </div>
                <div class="flex mt-4">
                    <div class="w-1/3">
                        <p class="text-sm font-bold ">
                            Revenu
                        </p>
                        <p class="truncate">
                            <span class="font-bold text-green-600">{{ oneDay.revenu ? oneDay.revenu.toFixed(2) : 0 }}</span>
                            <span class="text-xs text-gray-600">dh</span>
                        </p>
                    </div>
                    <div class="flex items-center justify-between w-2/3 px-4 py-1 border-2 rounded-lg">
                        <p class="mr-2 text-sm font-bold">
                            Com.
                        </p>
                        <p class="truncate">
                            <span class="text-xl">{{ oneDay.stats.consumed
                                + oneDay.stats.notConsumed + oneDay.stats.reserved }}</span>
                            <span class="text-xs text-gray-600">/{{ oneDay.stats.total }}</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="flex items-center justify-between px-6 mt-6 text-xl font-bold">
                <div class="flex items-center">
                    <div class="w-3 h-3 mr-3 bg-green-600 rounded-full">
                    </div>
                    Commandes
                </div>
                <!-- <div class="mr-3 text-sm font-medium text-gray-400">
                    Archive
                </div> -->
            </div>
            <div v-if="oneDay.orders.length == 0"
                class="flex items-center justify-center px-2 py-2 mx-6 mt-4 text-xs text-center bg-gray-100 rounded-lg ">
                Aucune commande n'a été soumise pour le moment.
            </div>
            <div v-else class="mb-16">
                <div class="px-6 mt-4" v-for="(order, index) in oneDay.orders" :key="index">
                    <div class="w-auto px-4 py-2 bg-gray-100 rounded-xl">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs text-gray-600">Code Carte</p>
                                <p class="font-semibold">{{ order.cardCode }}</p>
                            </div>
                            <div class="px-2 py-1 text-xs text-white bg-green-600 rounded-xl"
                                v-if="order.status[order.status.length - 1].name == 'reserved'">
                                <span>Réservé</span>
                            </div>
                            <div class="px-2 py-1 text-xs text-white bg-red-400 rounded-xl"
                                v-if="order.status[order.status.length - 1].name == 'notReserved'">
                                <span>Non réservé</span>
                            </div>
                            <div class="px-2 py-1 text-xs text-white bg-green-600 rounded-xl"
                                v-if="order.status[order.status.length - 1].name == 'consumed'">
                                <span>Consommé</span>
                            </div>
                            <div class="px-2 py-1 text-xs text-white bg-red-700 rounded-xl"
                                v-if="order.status[order.status.length - 1].name == 'wasted'">
                                <span>Gaspillé</span>
                            </div>
                            <div class="px-2 py-1 text-xs text-white bg-black rounded-xl"
                                v-if="order.status[order.status.length - 1].name == 'notConsumed'">
                                <span>Non consommé</span>
                            </div>
                        </div>
                        <div class="flex mt-3">
                            <div class="flex-none w-1/2">
                                <p class="text-xs text-gray-600">Collaborateur</p>
                                <p class="text-sm font-semibold ">{{ order.rcemployee.lastName }}, {{
                                    order.rcemployee.firstName
                                }}
                                </p>
                            </div>
                            <div class="w-1/3 ">
                                <p class="text-xs text-gray-600">Code Com.</p>
                                <p class="text-sm font-semibold">{{ order.privacyCode }}</p>
                            </div>
                            <div class="w-1/3 ">
                                <p class="text-xs text-gray-600">À payer</p>
                                <p class="text-sm font-semibold truncate">{{ order.toPay ? order.toPay.toFixed(2)+" dh" : "Rien" }}
                                    
                                </p>
                            </div>
                        </div>
                        <hr class="my-4">
                        <div>
                            <p class="text-xs text-gray-600">Commande</p>
                            <div>
                                <p class="ml-3" v-for="(item, index2) in order.items">- {{ item.name }}</p>
                            </div>
                        </div>
                        <hr class="my-4" v-if="order.status[order.status.length - 1].name == 'reserved'">
                        <div v-if="order.status[order.status.length - 1].name == 'reserved'">
                            <p class="text-xs text-gray-600">Actions</p>
                            <div class="flex items-center justify-center my-2">
                                <button @click="controlOrderStatus(order.id, 'consume')"
                                    v-if="order.status[order.status.length - 1].name == 'reserved'"
                                    class="flex items-center justify-center px-3 py-1 font-bold text-white bg-green-600 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                        v-if="order.toPay == 0" stroke="currentColor" class="w-5 h-5 mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        v-if="order.toPay > 0" stroke="currentColor" class="w-5 h-5 mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>

                                    <p v-if="order.toPay == 0">Consommer</p>
                                    <p v-if="order.toPay > 0">Payer</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div role="status" v-if="specialSpinner" class="flex items-center justify-center mt-6">
                <LocalSpinner></LocalSpinner>
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
            oneDay: [],
            rcDays: [],
            specialSpinner: true
        }
    },
    async mounted() {
        try {
            this.oneDay = await this.$axios.$get("/getOneRCDayForPartner/" + this.$route.params.menuID + "/" + this.$route.params.day)
            console.log(this.oneDay)
            this.loader = false
            // this.rcDays = await this.$axios.$get("/getRcMenuDaysForPartner/" + this.$route.params.menuID)
            this.specialSpinner = false
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async controlOrderStatus(orderId, action) {
            for (let i = 0; i < this.oneDay.orders.length; i++) {
                if (this.oneDay.orders[i].id == orderId) {
                    console.log("Done");
                    this.oneDay.orders[i].status.push({
                        name: "consumed",
                        date: new Date()
                    })
                    let newStatus = this.oneDay.orders[i].status.map(obj => {
                        return {
                            date: obj.date,
                            name: obj.name
                        }
                    })
                    let newToPay = this.oneDay.orders[i].toPay ? 0 : null
                    await this.$axios.$put("/rcmenuorders/" + this.oneDay.orders[i].id, {
                        status: newStatus,
                        toPay: newToPay
                    })
                }
            }
        }
    }
}

</script>
  