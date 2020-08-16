<template>
    <div >
        <!-- <h1>welcome</h1>
        <h1>登录成功,这是首页</h1>
        <h2>{{username}}</h2>
        <img :src="avater" alt=""> -->
         <NXnav></NXnav>
        <div class="home">
              <NXside></NXside>
        <main>

        </main>
        <Rightbar class="right"></Rightbar>
        </div>
       
      
    </div>
</template>
<style  scoped>
@media screen and (max-width: 800px) {
    .right {
      
          display: none;
      
    }
}
*{
     background: rgb(243, 246, 249);
}
.home{
    display:flex ;
}
main{
    
    height: 90vh;
    width: 80vw;
    background: rgb(243, 246, 249);
}
    img{
        width: 50px;
        height: 50px;
    }
</style>
<script>
    import Rightbar from "@/components/Rightbar"
    import NXside from "@/components/NXside"
    import NXnav from "@/components/NXnav"
export default {
   components:{
       NXnav,
       NXside,
       Rightbar


   },

    data(){
        return{
            username:sessionStorage.getItem("username"),
            avater:sessionStorage.getItem("avater")
        }
    },

    mounted(){
              if(this.username==null){
           this.$router.push({path:'/'})
           console.log("error")
       }else{
           console.log(this.username)
       }
    }
}
</script>