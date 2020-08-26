<template>
    <div class="home">
        <NXnav style="position:fixed;width:100vw; z-index:99;"></NXnav>

    <div>
        <el-carousel   :interval="4000" type="card" height="190px" >
            <el-carousel-item  class="item" v-for="(item,i) in imglist" :key="i">
             <el-image
               
                style=""
                :src="item"
                fit="fit"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>

     <div class="pbl">
            <b-card-group class="group"  columns>
                
                <b-card
                v-for="(item,index) in imgs" :key="index"
                img-width="300px"
                class="card"
               
                :img-src="item"
                img-alt="Image"
                 overlay
                >
             
                </b-card>
                

               
            
                
            </b-card-group>
            </div>
    </div>
</template>
<style  scoped>
.item{
     margin-top: 54px;
}
.con2{
    margin-top: 60px;
}
.home div{
    transition: .8s;
}
.pbl{
    width: 1000px;
    margin:-30px auto;
     transform: scale(.9);
   
}

.card-img{
     border-radius: 15px;
}
.card{
   
    margin-top: 10px;
    width: 300px;
    border-radius: 15px;
}
.card:hover{
    transition: .5s;
    transform: scale(1.02);
    
}
   /* .pbl:hover div {
      
        cursor: pointer;
        filter: blur(15px);
    } */
     .home div:hover {
       
        filter: none;
        z-index: 2;
    }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home{}
</style>
<script>
import NXnav from '@/components/NXnav'
export default {
    components:{
        NXnav

    },
    data(){
        return {
            imgs:[],
            imglist:['http://dongdove.cn/c60d5480664052f6064d8c084a15c2b8d0177234.jpg%402320w_664h.jpg','http://dongdove.cn/9531a9cdd4a3df606ec7961d32c4b56644424058.jpg%402320w_664h.jpg','http://dongdove.cn/11d1b1d61b099c2e27d071558d6bb62ed2ea0ffb.png%402320w_664h.png']
        }
    },
    beforeMount(){
        this.$axios({
            url:'/getpics',
            method:'get',

        }).then((response)=>{
            //console.log(response.data.data)
            for(var i=0;i<response.data.data.length;i++){
                this.imgs.push(response.data.data[i].imgsrc)
               console.log(response.data.data[i].imgsrc)
            }
            // console.log(this.imgs)
           
        })
    }
        
    
}
</script>