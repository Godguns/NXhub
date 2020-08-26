<template>
    <div>
        <el-card shadow="never" class="box-card">
                <div slot="header" class="clearfix">
                      <el-image
                        style="border-radius:50%; border:1px solid #ccc; width: 52px; height: 52px"
                        :src="avater"
                        fit="cover"></el-image>
                    <span >{{username}}</span>
                   <el-button type="danger" class="addfork"  circle><p>+</p></el-button>
                </div>
                <ul class="list">
                    <li>粉丝 {{fans}}</li>
                    <li>关注{{gz}} </li>
                    <li>收藏 --</li>
                </ul>
        </el-card>
         <el-divider content-position="left">他的相关推荐</el-divider>
        <div class="others1">

            <el-image v-for="(item,index) in 8" :key="index"
                        style="  width: 84px; height: 84px"
                        src="http://dongdove.cn/FvEv2oxvtAjxKpSeIFMrapRpAuFg"
                        fit="cover"></el-image>
           
        </div>
       
    </div>
</template>
<style  scoped>
.header{
    position: relative;
}
.el-divider__text{
    /* background: rgb(243, 246, 249); */
}
.others1{
    width: 256px;
   
   margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
}
.list{
    padding-left: 0;
    display: flex;
    list-style: none;
    justify-content: center ;
}
.list li{
    margin:0 10px;
}
.clearfix{
    display: flex;
    flex-direction: row;
    
}
.addfork p{
    font-size: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
 span{
     margin-left: 30px;
     line-height: 52px;
     display: block;
 }
 .addfork{
     position: absolute;
     width: 12px;
     height: 12px;
     top: 50px;
     left: 75px;
     transform: scale(.8);

 }
</style>
<script>
export default {
    data(){
        return {
            fans:sessionStorage.getItem('fans'),
            gz:sessionStorage.getItem('gz'),
            username:sessionStorage.getItem('username'),
            avater:sessionStorage.getItem('avater'),
            imglist:[1,2,3,4,5,6]
        }
    }
}
</script>