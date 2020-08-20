<template>
    <div class="content" >
      
         <NXnav></NXnav>
             
        <div class="home">
            <main class="col">
               
                 <iNew :items= this.$store.state.items :imglist=imglist></iNew>
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
   padding-left: 330px;
   padding-right: 260px;

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
            show:true,
            username:sessionStorage.getItem("username"),
            avater:sessionStorage.getItem("avater"),
            imglist:['https://picsum.photos/600/300/?image=26','https://picsum.photos/600/300/?image=27','https://picsum.photos/600/300/?image=28','https://picsum.photos/600/300/?image=29'],
            page:1,
            limit:20,
            items:[]
           
        }
    },

    mounted(){
    
              if(this.username==null){
           this.$router.push({path:'/'})
           console.log("error")

       }else{

          
           this.ngetalk()
           this.getuserinfo()
       }
    },
    methods:{
       async ngetalk(){
          await  this.$store.dispatch('getalk')
         // this.items=this.$store.state.items
          console.log("wait!!!",this.items)
        },
        // getalk(){
           
        //     this.$axios({
        //         methods:'get',
        //         url:'/api/v1/spit?page='+this.page+'&limit='+this.limit,
              
        //     }).then((response)=>{
               
        //        this.$store.state.items=response.data.data.items;
        //         //this.reload()
        //         this.items=this.$store.state.items
        //         console.log(this.items)
               
                
        //     })
        // },
        getuserinfo(){
              this.$store.dispatch('getuserinfo')
            //       this.$axios({
            //     methods:'get',
            //     url:'/api/v1/auth',
              
            // }).then((response)=>{
            
            //     console.log(response)
            // })
        }
    }
}
</script>