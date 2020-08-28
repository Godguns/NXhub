<template>
    <div class="home">
        <NXnav style="position:fixed;width:100vw; z-index:99;"></NXnav>
    <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000; height:350px"
    fade
    indicators
    img-width="1024"
    img-height="350"
  >
    <b-carousel-slide
    class="lbitem"
      caption="First slide"
      img-src="http://dongdove.cn/A63CC6AB483D1D3CA2232659740EFFE7.jpg"
    ></b-carousel-slide>
  
  </b-carousel>
</div>

 <b-card-group class="tags" >
     <el-tag class="tag">#メルトリリス </el-tag>
<el-tag class="tag" type="success">#Fate/GrandOrder</el-tag>
<el-tag class="tag" type="info">#Fate/GO10000users入り</el-tag>
<el-tag class="tag" type="warning">#Fat</el-tag>
<el-tag class="tag" type="danger">#solo</el-tag>
<el-tag class="tag" type="success">#童貞を殺す服 #オリジナル75</el-tag>
<el-tag class="tag" type="info">#オリジナル </el-tag>
<el-tag class="tag" type="warning">#オリジナルキャラクター</el-tag>



 </b-card-group>
 <el-divider  content-position="left"><h3>Pixiv每日推荐</h3></el-divider>
     <div class="pbl">
            <b-card-group class="group"  columns>
                
                <b-card
                v-for="(item,index) in imgs" :key="index"
                img-width="300px"
                class="card"
                @click="goinfo(index)"
                :img-src="item"
                img-alt="Image"
                 overlay
                >
             
                </b-card>
                

               
            
                
            </b-card-group>
            </div>
            <el-divider  content-position="center">您已经摸到底部了，无法往下摸了哦^</el-divider>
    </div>
</template>
<style  scoped>
.tag{
   min-width: 90px;
    margin:0 20px;
    height:54px;
    line-height: 54px;
}
.tags{
    margin-top: 30px;
    height: 60px;
    display: flex;
    align-content: center;
    justify-content: center;
    background: transparent !important;
}
.el-divider__text{
     background-color: rgb(243, 246, 249);
     margin-top:20px;
     color: #606266;
}
.lbitem{
    background-size: cover;
    height: 350px;
}
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
  .home{
      /* background-image: url('http://dongdove.cn/download.jpg'); */
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
            imgs:[],
            imglist:['http://dongdove.cn/c60d5480664052f6064d8c084a15c2b8d0177234.jpg%402320w_664h.jpg','http://dongdove.cn/9531a9cdd4a3df606ec7961d32c4b56644424058.jpg%402320w_664h.jpg','http://dongdove.cn/11d1b1d61b099c2e27d071558d6bb62ed2ea0ffb.png%402320w_664h.png']
        }
    },
    methods:{
        goinfo(e){
          console.log(e)
          sessionStorage.setItem('imgsrc',this.imgs[e])
             this.$router.push({
          path: `/picinfo/${e}`,
        })
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