<template>
    <div class="content" >
        <!-- <h1>welcome</h1>
        <h1>登录成功,这是首页</h1>
        <h2>{{username}}</h2>
        <img :src="avater" alt=""> -->
         <NXnav></NXnav>
        <div class="home">
            <main class="col">
               
                 <iNew  :imglist=imglist></iNew>
            </main>
            <NXside class="col"></NXside>
            <Rightbar id=right class="col"></Rightbar>
        </div>
        <article>

        </article>
       
      
    </div>
</template>
<style  scoped>
@media screen and (max-width: 800px) {
    #right {
      
          display: none;
      
    }
}
*{
     background: rgb(243, 246, 249);
}
.col{
    float: left;
}
article{
    clear: both;
}
.home{
   padding-left: 280px;
   padding-right: 250px;

}
main{
    
    width: 100%;
    height: 100vh;
    background: rgb(243, 246, 249);
}
    img{
        width: 50px;
        height: 50px;
    }
   
</style>
<script>
    import iNew from "@/components/iNew"
    import Rightbar from "@/components/Rightbar"
    import NXside from "@/components/NXside"
    import NXnav from "@/components/NXnav"
export default {
   components:{
       NXnav,
       NXside,
       Rightbar,
       iNew



   },

    data(){
        return{
            username:sessionStorage.getItem("username"),
            avater:sessionStorage.getItem("avater"),
            imglist:['https://picsum.photos/600/300/?image=26','https://picsum.photos/600/300/?image=27']
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