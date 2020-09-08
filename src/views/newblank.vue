<template>
    <div></div>
</template>
<script>
export default {
    mounted(){
       setTimeout(()=>{
            this.$router.push({path:`/picinfo/`+this.$route.params.id})
       },0)
    }
}
</script>