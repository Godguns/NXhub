<template>
    <div class="home">
        <NXnav class="nxnav"></NXnav>
          <div>
<div class="nav">
    <el-tabs class="navc" v-model="activeName" >
    <el-tab-pane class="navcc1" label="个人信息" name="first">
          <b-list-group>
  
  <b-list-group-item variant="primary">Primary list group item</b-list-group-item>
  <b-list-group-item variant="secondary">Secondary list group item</b-list-group-item>
  <b-list-group-item variant="success">Success list group item</b-list-group-item>
  <b-list-group-item variant="danger">Danger list group item</b-list-group-item>
  <b-list-group-item variant="warning">Warning list group item</b-list-group-item>
  <b-list-group-item variant="info">Info list group item</b-list-group-item>
 
  
</b-list-group>
    </el-tab-pane>
    <el-tab-pane class="navcc1" label="我的动态" name="second">
         
                 <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
                {{tag.name}}
              </el-tag>
               
            
    </el-tab-pane>
    <el-tab-pane class="navcc1" label="角色管理" name="third">
      <el-card class="box-card"></el-card>
    </el-tab-pane>
    <el-tab-pane class="navcc1" label="定时任务补偿" name="fourth">
      定时任务补偿
    </el-tab-pane>
  </el-tabs>
</div>

  
<div class="content">
      <div class="peason">
                <el-upload
        class="avatar-uploader"
        action="http://upload.qiniup.com"
        :show-file-list="false"
        :on-success="handleSuccess"
        :data="{token: token}"
        >
          <!-- <button  class="edit">编辑头像_</button> -->
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
             <el-tooltip class="item" effect="dark" content="编辑头像" placement="bottom-end">
       <el-image
       class="avater"
      
      :src="avater"
      fit="scale-down"></el-image></el-tooltip>
      </el-upload>
   
      <div class="avater2">😂</div>
      <h3>{{this.$store.state.username}}<br><h4>{{this.$store.state.username}}</h4></h3>
        <button  class="edit">编辑头像_</button>
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
.pinlun{
    display: flex;
    
}
.pinlun div{
    line-height: 42px;
}
.pinlun img{
    margin-top: 0;
    margin-right: 10px;
}
.navc{
  margin-left: 30vw;
  width: 70vw;
  height: 100vh;
}
.navcc1{
  margin-right: 10vw;
}
.avaterpl{
   width: 38px;
        height: 38px;
        border-radius: 50%;
        margin-top: 10px;
}
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
  line-height: 30px;
  border-radius: 50%;
  background: white;
  border:1px solid #ccc;
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
       /* border-bottom: 1px solid #ccc; */
   }
   .navc ::after{
     display: none !important;
    
   }
   .nav{
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
          activeName: 'second',
           token:"",
           imageUrl:"",
           list:[1,2,3,4,5],
            tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
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
                this.$message({
                   message: '正在保存..',
                    type: 'warning'
                });
     this.imageUrl = 'http://oss.seefs.cn/'+res.hash
     console.log(this.imageUrl)
     this.$axios({
       method:'post',
       url:'/api/v1/auth/change_info',
       data:{
         avatar:this.imageUrl
       }
     }).then( async (res)=>{
       await    this.$message({
                   message: '保存成功',
                    type: 'success'
                });
      await this.$store.dispatch('getuserinfo')
       console.log(res)
        this.$router.replace({path:'/blank'})
     })
    },
    }
}
</script>