<template>
    <div>
        <Navbar></Navbar>
        <LG></LG>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar"
import LG from "@/components/Lg"
export default {
    name:"Login",
    components:{
        Navbar,
        LG

    }
}
</script>