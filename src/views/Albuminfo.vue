<template>
    <div class="home">
       
        <section>
            <div style="height:70px;width:100vw;background:#fff;">
                <img src="http://dongdove.cn/file.jpeg" alt="">
            </div>

        </section>
      
         <el-image

                   style="width:100vw;height:108px; filter: blur(20px);"
                   :src="master_img"
                    fit="fill"></el-image>
      
        <div class="content">
            <div class="img_fm">
                <el-image

                    style="width: 125px; height: 125px; border-radius:6px;"
                     :src="master_img"
                    fit="cover"></el-image>
                    
            </div>
           <div>
                <h3>{{msg}}</h3>
                <h6 style="margin-top:-30px;">共{{list.length}}项目作品</h6>
                <span>{{time}}</span>
           </div>
            
        </div>
         <div class="lb">
             <el-tag
             style=" min-width:100px; margin:5px; height:54px;line-height:54px;"
                v-for="(item,index) in items"
                :key="index"
                :type="colors[index]"
                effect="Plain">
                {{ item }}
            </el-tag>
         </div>
         <div>
             <ul>
                 <li>插画</li>
                 <li>漫画</li>
                 <li>小说</li>
             </ul>
         </div>
       <div class="cards">
            <acard style="margin:10px 10px;" :list="item" v-for="(item,index) in list" :key="index"></acard>
       </div>
         <div class="adbox">
            <img class="ad" src="http://dongdove.cn/%E6%88%AA%E5%B1%8F2020-09-02%20%E4%B8%8B%E5%8D%888.20.20.png" alt="">
        </div>
    </div>
</template>
<script>

import acard from '@/components/card_author'
export default {
    components:{
       
        acard
        
    },
    data(){
        return {
            colors:[],
             master_img:"",
            time:"",
            msg:"",
            items:[],
            list:[]
        }
    },
    beforeMount(){
         this.$emit('header',true);
        this.$axios({
            url:'/findimgs_byid',
            method:'get',
            params:{
                _id:this.$route.params.id
            }
        }).then( response=>{
            this.list=response.data.data.Album_imgs;
            this.msg=response.data.data.Album_name;
            this.time=response.data.data.Album_time;
            this.master_img=response.data.data.master_img;
            this.items=response.data.data.Album_tags;
            var colors=['','success','info','danger','warning']
         this. items.forEach(() => {
                var random=Math.round(Math.random()*4);
              this.colors.push(colors[random])
          });
        

            //console.log("详细数据为",response.data)
        })
    },
    methods:{
        getdata(){
            // this.$axios({
            //     url:''
            // })
        }
    }
}
</script>
<style  scoped>
.home{
    background: white;
}
.adbox{
   
    width:100vw;
    background-color: white;
}
.ad{
    width: 100vw;
   
}
.cards{
    display: flex;
    flex-wrap: wrap;
    margin-left: 70px;
}
ul{
    list-style: none;
    display: flex;
    margin-left: 40px;
}
li{
     color: #606266;
    font-size: 20px;
    font-weight: 700;
     border-top: 3px solid ;
     border-color: transparent;
    width: 70px;
}
li:first-child{
      border-top-color: #67C23A;
}

.lb::-webkit-scrollbar { width: 0 !important }
.lb{
   
    margin-left: 72px;
   display: flex;
   justify-content: flex-start;
    overflow-x: scroll;
  overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
      -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    height: 80px;
    width: 100vw;
}
h3{
    line-height: 120px;
    margin-left: 30px;
}
.content{
    padding-left: 72px;
    margin-top:-20px;
  display: flex;

}
.img_fm{
    border:1px solid #fff ;
}
</style>