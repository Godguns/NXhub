<template>
    <div class="home">
        <NXnav class="nxnav"></NXnav>
          <div>
<div class="nav">
  <ul>
    <li>个人信息</li>
     <li>个人信息</li>
      <li>个人信息</li>
       <li>个人信息</li>
  </ul>
</div>

  
<div class="content">
      <div class="peason">
       <el-image
       class="avater"
      
      :src="avater"
      fit="scale-down"></el-image>
      <div class="avater2"></div>
      <h3>Godguns<br><h4>Godguns</h4></h3>
              <el-upload
        class="avatar-uploader"
        action="http://upload.qiniup.com"
        :show-file-list="false"
        :on-success="handleSuccess"
        :data="{token: token}"
        >
          <button  class="edit">编辑头像_</button>
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
      </el-upload>
        <div class="msg">
          <ul>
            <li>one:xxx</li>
            <li>two:xxxx</li>
            <li> <i class="el-icon-edit"></i></li>
            
          </ul>
        
            
        </div>
        <hr>
        <h4>阿巴阿巴阿巴～</h4>
       
  </div>
  <div class="wz"><h1></h1></div>
</div>
</div>
    </div>
</template>
<style  scoped>

.wz{
  margin-left: 100px;
}
.content{
  display: flex;
  
  width: 100%;
  height: 100%;
}
.msg{
  margin-top: 10px;
  display: flex;
 
}
ul{
  display: flex;
  padding:0 !important;
  list-style: none;
}
hr{
  width: 286px;
}
li{
 margin:0 30px;
  font-size: 10px;
  font-weight: 500;
}
.avater{
  width: 280px;
  height: 280px;
  border-radius: 50%;
  position: relative;
  top: -47px;
  border: 1px solid #ccc;
}
.avater2{
  position: absolute;
  top: 170px;
  left: 240px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
}
h4{
  color: #666;
}
h3{
  text-align: left;
  position: absolute;
  top: 240px;
}
.edit{
  border: 1px #7f8c8d solid;
  width: 280px;
  height: 35px !important;
  background-color: white;
  font-size: 5px;
  margin-top:40px ;
  outline: none;
  border-radius: 5px;
  

}
.home{
    width: 100%;
    background-color: white;
}
.peason{
 
  
  top: 20px;
  left: 70px;
  position: relative;
  width: 280px;
  height: 539px;
 
}
   
   .nav{
       display: flex;
       justify-content: center;
       width: 100vw;
     
       top: 60px;
      font-weight: 600 !important;
       height: 65px;
      line-height: 60px;
       padding-bottom: 10px;
       border-bottom: 1px solid #ccc;
   }
   .nav li{
      font-size: 16px;
      line-height: 90px;
   }
   
    

  
</style>
<script>
import NXnav from "@/components/NXnav"


export default {
    components:{
        NXnav

    },
    data(){
       return{
           token:"",
           imageUrl:"",
            avater:sessionStorage.getItem('avater')
       } 
    },
    mounted(){
        this.$axios({
            method:'get',
            url:'api/v1/file/token'
        }).then(response=>{
            this.token=response.data.data;
            console.log(this.token)
        })
    },
    beforeCreate(){
       this.$store.dispatch('getuserinfo')
    },
    methods:{
            handleSuccess(res) {
     this.imageUrl = 'http://oss.seefs.cn/'+res.hash
     console.log(this.imageUrl)
     this.$axios({
       method:'post',
       url:'/api/v1/auth/change_info',
       data:{
         avatar:this.imageUrl
       }
     }).then( async (res)=>{
       await this.$message('修改成功');
      await this.$store.dispatch('getuserinfo')
       console.log(res)
        this.$router.replace({path:'/blank'})
     })
    },
    }
}
</script>