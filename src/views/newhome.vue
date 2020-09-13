<template>
    <div class="home">
         
      
                <div class="cdbody">
    
                <RCard style="width: 392px !important;" @click.native="go(item)" :list=item class="cd" v-for="(item,index) in list2" :key="index"></RCard>
                </div>
            
            <div class="content">
                  <newcard  @click.native=" goinfo(index)" v-for="(item,index) in list" :key="index" :list="item"></newcard>
            </div>
         <div class="adbox">
            <img class="ad" src="http://dongdove.cn/%E6%88%AA%E5%B1%8F2020-09-02%20%E4%B8%8B%E5%8D%888.20.20.png" alt="">
        </div>
 <div class="cdbody">
    
                <!-- <RCard style="width: 392px !important;" @click.native="go(item)" :list=item class="cd" v-for="(item,index) in list2" :key="index"></RCard> -->
                </div> 
            

    </div>
</template>
<script>
import newcard from '@/components/home_card'
import RCard from '@/components/RCard'
export default {
    components:{
        newcard,
       RCard
    },
    data(){
        return{
            list:[],
            imgs:[],
            list2:[],
            gs:[],
            token:""
        }
    },
    created(){
                this.$axios({
            method:'get',
            url:'/api/v1/file/token'
        }).then(response=>{
         
            this.token=response.data.token;
             sessionStorage.setItem('token',this.token)
            
           
        });
     
                     window.addEventListener('beforeunload', () => {
         var data={
        username:sessionStorage.getItem('username'),
      }
       this.socket.emit("exit",data)
       })
        this.$emit('header',true);
        this.$axios({
            url:'/getpics',
            method:'get',
           
        }).then(response=>{
            console.log(response)
            this.list=response.data.data
               for(var i=0;i<response.data.data.length;i++){
                this.gs.push(i)
               
            }
        })
         this.$axios({
                method:'get',
                url:'/getR_album',

            }).then(response=>{
                this.list2=response.data.data
              console.log(this.list2)

            })
    },
    methods:{
         go(e){
          if(sessionStorage.getItem('username')){

               this.$router.push({path:`/albuminfo/${e._id}`})
          }else{
               this.$message({
          message: '请先登录',
          type: 'warning'
        });
          }
           
   
        },
           goinfo(e){
       
          if(sessionStorage.getItem('username')){

            sessionStorage.setItem('imgsrc',this.list[e].imgsrc)
            console.log(this.list[e])
             this.$router.push({
         path: `/picinfo/${e}`,
       
        })
          }else{
               this.$message({
          message: '请先登录',
          type: 'warning'
        });
          }
      
        },
    }
}
</script>
<style  scoped>
.adbox{
    margin-top: 60px;
   margin-left: -50px;
    width:95vw;
    background-color: white;
}
.ad{
    width: 100vw;
    transform: scale(.9);
   
}
.cdbody::-webkit-scrollbar { width: 0 !important }
.cdbody{
   /* display: flex;
   justify-content: flex-start; */
   margin-left: -40px;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    transform: scale(.8);
   width:auto;
    white-space:nowrap;
   overflow-x: auto;
}

.cd{
     border-radius: 15px !important;
    margin-top: 10px;
   
display: inline-block;

}
.card-footer{
    background:transparent;
    border: none;
    position: relative;
}
.content{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
    .home{
        background: white;
        margin-left:50px;
    }
</style>