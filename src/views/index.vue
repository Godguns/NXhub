<template>
    <div class="home">
                <div>
                   
                </div>
            <div style=" margin-top: 30px !important;">
            <h4 style=" margin-left:50px; text-align:left;color:#606266;">推荐作品</h4>
            </div>
            <div class="content" style="margin-top:20px;">
                  <newcard   v-for="(item,index) in list" :key="index" :list="item"></newcard>
            </div>
       

    </div>
</template>
<script>
import newcard from '@/components/home_card'

export default {
    components:{
        newcard,
      
    },
    data(){
        return{
            list:[],
            imgs:[],
            list2:[]
        }
    },
    created(){
      
        this.$emit('header',true);
        this.$axios({
            url:'/getpics',
            method:'get',
           
        }).then(response=>{
            console.log(response)
            this.list=response.data.data.reverse()
               for(var i=0;i<20;i++){
                this.imgs.push(response.data.data[i].imgsrc)
               
            }
        })
        //  this.$axios({
        //         method:'get',
        //         url:'/getR_album',

        //     }).then(response=>{
        //         this.list2=response.data.data.reverse()
        //       console.log(this.list2)

        //     })
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

                          sessionStorage.setItem('imgsrc',this.imgs[e])
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
.avater{
    filter: blur(2px);
}
.avaters{
    display: flex;
    justify-content: center;
    align-items: center;
}


.adbox{
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