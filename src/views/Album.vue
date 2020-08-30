<template>
    <div class="home" >
        <NXnav></NXnav>
        <div style=" margin-top: 30px !important;">
             <el-divider  content-position="left"><h3 style="color:#606266;">插画专辑</h3></el-divider>
        </div>
         
        <div class="content">
           
             <card :list=item class="cd" v-for="(item,index) in list" :key="index"></card>
        </div>
        
       
    </div>
</template>
<style  scoped>
.home{
    /* background: rgb(34, 34, 34); */
}
/* >>> svg{
     color: white !important;
}
>>> .nav-link{
    color: white !important;
}
>>> .navbar-brand{
    color: white !important;
}

      >>>   .mr-sm-2[data-v-7ea12a8e]{
                color:white;
                background-color: rgb(10,35,50)!important;
        }
    >>> .nxnav[data-v-7ea12a8e] {
        color: white;
    background-color:rgb(10,35,50)!important;
} */
.cd{
    display: inline-block;
    border-radius: 15px;
    margin-top: 20px;
  
}
.content{
    width: 100vw;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    /* width:auto;
    white-space:nowrap;
   overflow-x: auto;
     */
    
}
.el-divider__text{
   
    background-color:rgb(243, 246, 249) ;
}
</style>
<script>
import card from '@/components/RCard'
import NXnav from '@/components/NXnav'

export default {
    components:{
        card,
        NXnav
    },
    data(){
        return {
            list:{},
            Album_info:'',
            Album_author:'',
            master_img:'',
            Album_name:'',
            Album_time:'',
            Album_imgs:[]
        }
    },
    beforeMount(){
        this.getalbum()
    },
    methods:{
        getalbum(){
            this.$axios({
                method:'get',
                url:'/get_album',

            }).then(response=>{
                this.list=response.data.data
                this.Album_info=response.data.data.Album_info;
                this.Album_author=response.data.data.Album_author;
                this.master_img=response.data.data.master_img;
                this.Album_time=response.data.data.Album_time;
                this.Album_imgs=response.data.data.Album_imgs

            })
        }
    }
}
</script>