<template>
    <Banner />
    <Body />
    <Footer />
</template>

<script>
import Body from "./Body.vue";
import Banner from "./Banner.vue";
import Footer from "../nav/Footer.vue";

export default {
    name: 'Home',

    components: {
        'Body': Body,
        'Banner': Banner,
        'Footer': Footer
    }
}
</script>

