<template>
  <div id="app">
    <NXnav v-if="header_show"></NXnav>
    <router-view v-on:header="header" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  


      import NXnav from '@/components/NXnav'
      
export default {
   components:{
     NXnav
   },
 data(){
  
   return {
    header_show:false,
   }
 },
 mounted(){
   
     
 },
 methods:{
   header:function (bool) {
        this.header_show = bool;
      }
 }
}
</script>