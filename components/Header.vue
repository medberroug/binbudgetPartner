<template>
    <div>
        <!-- Floating Div -->
        <nuxt-link to="/">
            <div class="fixed inset-x-0 z-50 flex items-center justify-center w-auto h-12 mx-4 text-center text-white rounded-full bottom-4 backdrop-blur-sm bg-black/30 ">
                <!-- Content of floating div -->
                XX
            </div>
        </nuxt-link>
        <!-- Top Header of the App -->
        <div class="flex items-center justify-between px-6 pt-4">
            <div class="text-2xl font-bold">
                <nuxt-link to="/">
                    <img src="@/assets/images/logoPartner.png" class="">
                </nuxt-link>
            </div>
            <div class="flex items-center justify-center bg-gray-100 rounded-3xl w-14 h-14 ">
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
    async mounted() {
        // let clients = await this.$axios.$get("/clients")
        // console.log(clients);
    }
}

</script>
  