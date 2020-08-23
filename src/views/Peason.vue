<template>
    <div class="home">
        <NXnav class="nxnav"></NXnav>
          <div>
<div class="nav">
    <el-tabs class="navc" v-model="activeName" >
    <el-tab-pane class="navcc1" label="个人信息" name="first">
       <el-divider content-position="left" style="color:rgb(218,242,207)">个性标签</el-divider>
                 <el-tag
                 class="tip"
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
                {{tag.name}}
              </el-tag>
       <el-divider content-position="left" style="color:rgb(218,242,207)">全部动态</el-divider>
            <el-timeline class="timelinecontent" >
             
            <el-timeline-item class="timeline"
              v-for="(activity, index) in list"
              :key="index"
               color="rgb(218,242,207)"
              :timestamp="activity.time">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
          <hr style="clear:both">
    </el-tab-pane>
    <el-tab-pane class="navcc1" label="我的收藏" name="second">
         
          
           
            
    </el-tab-pane>
    
  </el-tabs>
</div>

  
<div class="content">
      <div class="peason">
      <el-upload
        class="avatar-uploader"
        action="http://upload-z2.qiniup.com"
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
      <el-tooltip content="关注" placement="right-start">
        <el-button type="danger" class="focus" icon="el-icon-plus" circle></el-button>
      </el-tooltip>
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
.focus{
    position: absolute;
  top: 170px;
  left: 230px;
  
  
  
  
}
.home{
  min-height: 100vh;
}
.timeline{
  text-align: left;
  display: block;
}
.timelinecontent{
  height: 400px;
  overflow: scroll;
}
.navc{
  margin-left: 30vw;
  width: 70vw;
  
}
.tip{
  margin-left: 10px;
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

.content{
  display: flex;
  
  width: 100%;
  height: 100%;
}
.msg{
  margin-top: 10px;
  display: flex;
  list-style: none;
 
}
 .msg ul{
  display: flex;
  padding:0 !important;
  list-style: none;
}
hr{
  width: 286px;
}
/* li{
 margin:0 30px;
  font-size: 10px;
  font-weight: 500;
} */
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
display: none;
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
 
   
    

  
</style>
<script>
import NXnav from "@/components/NXnav"


export default {
    components:{
        NXnav
  
       

    },
    data(){
       return{
         username:sessionStorage.getItem('username'),
         password:sessionStorage.getItem('password'),
          activeName: 'first',
           token:"",
           imageUrl:"",
           list:[],
            tags: [
          { name: '技术控', type: '' },
          { name: '死肥宅', type: 'success' },
          { name: '技术第一', type: 'info' },
          { name: '拯救世界', type: 'warning' },
          { name: '哔哩哔哩干杯( ゜-゜)つロ', type: 'danger' }
        ],
            avater:sessionStorage.getItem('avater')
       } 
    },
    mounted(){
        this.$axios({
            method:'get',
            url:'/api/v1/file/token'
        }).then(response=>{
            this.token=response.data.token;
            console.log("七牛云token",response)
        });
        this.$axios({
          method:'get',
          url:'/api/peason?username='+sessionStorage.getItem('username'),

        }).then(response=>{
          this.list=response.data.data
          console.log(response)
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
     this.imageUrl = 'http://dongdove.cn/'+res.hash
     console.log(this.imageUrl)
     this.$axios({
       method:'get',
       url:'/api/v1/auth/change_info?username='+this.username+'&password='+this.password+'&avater='+this.imageUrl,
      
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