<template>
    <div class="home">
        
   
        <section>
            <div style=" height:70px;width:100vw;background:#fff;">
                <img src="http://dongdove.cn/file.jpeg" alt="">
            </div>

        </section>



 <!-- <h4 style="margin-left:70px;text-align:left;color:#606266;">推荐专辑</h4>
<div class="cdbody">
    
<RCard style="width: 392px !important;" @click.native="go(item)" :list=item class="cd" v-for="(item,index) in list" :key="index"></RCard>
</div> -->

  

 
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
                 <template v-slot:footer>
                             <div class="author">
                                 <div style="display:flex">
                    <el-image
                   lazy
                    style=" border-radius:50%;border:1px solid #909399;width: 35px; height: 35px"
                    :src="avater[index]"
                    fit="cover"></el-image>
                    <p style="margin-top:10px; color:#606266; margin-left:10px;">{{info[index]}}</p>
                    </div>
                    <span style="margin-top:10px; color:#909399;">{{time[index]}}</span>
               </div>
                </template>
       
                </b-card>
                

               
            
                
            </b-card-group>
            </div>
            <el-divider style="color:#ccc;"  content-position="center">您已经摸到底部了，无法往下摸了哦^</el-divider>
    </div>
</template>
<style  scoped>
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
.author{
   display: flex;
   justify-content: space-between;
   align-items: center;
}
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
     transform: scale(.8);
   
}


.card-img{
     border-radius: 15px;
     border-bottom-left-radius: 0px;
   border-bottom-right-radius: 0px;
}
.pbl .card{
   background-color: white;
   position: relative;
    margin-top: 10px;
    width: 300px;
    border-radius: 15px;
   /* border-bottom-left-radius: 0px;
   border-bottom-right-radius: 0px; */
}
.home{
   
    background-color: white;
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
  .card{
      background-color: white;
  }
</style>
<script>

//import RCard from '@/components/RCard'
export default {
   
    components:{
       
       // RCard

    },
    data(){
        return {
            list:[],
            time:[],
            info:[],
            avater:[],
            imgs:[],
            rules:[],
            imglist:['http://dongdove.cn/c60d5480664052f6064d8c084a15c2b8d0177234.jpg%402320w_664h.jpg','http://dongdove.cn/9531a9cdd4a3df606ec7961d32c4b56644424058.jpg%402320w_664h.jpg','http://dongdove.cn/11d1b1d61b099c2e27d071558d6bb62ed2ea0ffb.png%402320w_664h.png']
        }
    },
    methods:{
        go(e){
           this.$router.push({path:`/albuminfo/${e._id}`})
            //console.log(e._id)
   
        },
        goinfo(e){
          console.log(e)
          sessionStorage.setItem('imgsrc',this.imgs[e])
             this.$router.push({
         path: `/picinfo/${e}`,
        //  path: `/newblank/${e}`,
        })
        },
           getalbum(){
            this.$axios({
                method:'get',
                url:'/getR_album',

            }).then(response=>{
                this.list=response.data.data
              console.log(this.list)

            })
        }
    },
  
    beforeMount(){
      this.$emit('header',true);
        this.$axios({
            url:'/getpics',
            method:'get',

        }).then((response)=>{
            console.log(response.data.data)
            for(var i=0;i<response.data.data.length;i++){
                this.imgs.push(response.data.data[i].imgsrc)
               
                this.avater.push(response.data.data[i].avater)
                this.info.push(response.data.data[i].author)
                this.time.push(response.data.data[i].time)
               console.log(response.data.data[i].imgsrc)
            }
             console.log(this.info,"作者")
           
        })
          this.getalbum()
    }
    
        
    
}
</script>