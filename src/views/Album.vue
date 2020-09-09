<template>
    <div class="home" >
        
        <div class="adbox">
            <img class="ad" src="http://dongdove.cn/%E6%88%AA%E5%B1%8F2020-09-02%20%E4%B8%8B%E5%8D%888.20.20.png" alt="">
        </div>
        <div style=" margin-top: 30px !important;">
            <h3 style="margin-left:50px;text-align:left;color:#606266;">插画专辑</h3>
        </div>
         
        <div class="content">
           
             <card  :list=item @click.native="go(item)" class="cd" v-for="(item,index) in list" :key="index"></card>
        </div>
        
       
    </div>
</template>
<style  scoped>
.adbox{
   
    width:100vw;
    background-color: white;
}
.ad{
    width: 100vw;
    transform: scale(.9);
   
}
.home{
    background-color: white;
    height: 500vh;
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
    transform: scale(.8);
  
}
.content{
    margin-left: 50px;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;

    /* width:auto;
    white-space:nowrap;
   overflow-x: auto;
     */
    
}
.cd{
    background: white;
}
.el-divider__text{
   
    /* background-color:rgb(243, 246, 249) ; */
}
</style>
<script>
import card from '@/components/RCard'

//import anime from 'animejs'

export default {
    components:{
        card,
       
    },
    data(){
        return {
            id:"",
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
         this.$emit('header',true);
        this.getalbum()
    },
    mounted(){
     
    },
    methods:{
        go(e){
           this.$router.push({path:`/albuminfo/${e._id}`})
            //console.log(e._id)
   
        },
        getalbum(){
            this.$axios({
                method:'get',
                url:'/get_album',

            }).then(response=>{
                this.list=response.data.data.reverse()
                this.Album_info=response.data.data.Album_info;
                this.Album_author=response.data.data.Album_author;
                this.master_img=response.data.data.master_img;
                this.Album_time=response.data.data.Album_time;
                this.Album_imgs=response.data.data.Album_imgs;
                
                // test
               



            })
        }
    }
}
</script>