<template>
    <div></div>
</template>
<script>
export default {
    mounted(){
       setTimeout(()=>{
            this.$router.replace({path:'/peason'})
       },1000)
    }
}
</script>