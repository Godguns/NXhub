<template>
    <div >
        <div>
  <b-jumbotron class="lb">
    <template style="font-weight:900;" v-slot:header>NXPixiv</template>

    <template v-slot:lead>
      NXPixiv是一个粉丝交流平台，在这里
粉丝可以通过长期地赞助创作者，支持其创作活动。<br>
 那么,现在就开始吧·
    </template>
        <div class="box">
            <el-button type="info" class="bt"  @click="gosign" >注册</el-button>
        </div>
    


  
  </b-jumbotron>
</div>
        <newhome></newhome>
  <!-- <b-jumbotron class="ad" header="NXhub" lead="Bootstrap v4 Components for Vue.js 2">
    <p>NXhub是一个社交项目</p>
       <hr class="my-4">
    <b-button variant="primary" href="#">更多</b-button>
  </b-jumbotron> -->
      
</div>


</template>
<style  scoped>
.box{
   
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    transform: translateY(12px);
   

}
.bt{
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: none;
    width: 280px;
    height: 60px;
    background-color: rgb(108, 204, 235);
    font-size: 16px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    backface-visibility: hidden;
    box-shadow: rgba(108, 204, 235, 0.8) 0px 10px 20px;
    border-radius: 30px;
    transition: box-shadow 0.3s cubic-bezier(0.85, 1.97, 0.46, 0.4) 0s, transform;
}
.lb{
    position: relative;
       
    background: linear-gradient(108.54deg, rgb(220, 255, 203), rgb(225, 255, 237), rgb(184, 229, 255));

}
    .ad{
        border-radius: 0;
        color: white;
        margin-bottom: 0;
        background-clip: border-box;
        background-size: cover;
       height: 100vh;
        background-image: url('http://dongdove.cn/tower.jpg') !important;
    }
</style>
<script>
import newhome from '../views/index'
export default {
    name:"Lg",
    components:{
        newhome

    },
    methods:{
         gosign(){
            this.$router.push({path:'/sign'})
        },
    }
}
</script>