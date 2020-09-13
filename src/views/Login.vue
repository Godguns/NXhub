<template>
  <div class="about">
    <div>
      <h2>登录到NXPixiv</h2>
       <b-spinner v-show="show" class="prograss" type="grow" label="Spinning"></b-spinner>
  <b-card
   
  
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
 <div class="content" role="group">  

    <label for="input-live">用户名:</label>
    <b-form-input
      id="input-live"
      v-model="username"
      
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>
 
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
   
  </div>
   <div class="content" role="group">  

    <label for="input-live">密码:</label>
    <b-form-input
      id="input-live"
      v-model="pass"
      
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>
 
    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
   
  </div>
      <div>
           <el-button  class="back" @click="goindex" type="success" icon="el-icon-back
" circle></el-button>

    <b-button @click="login"  class="bt" href="#" size="lg" >Go somewhere</b-button>
      </div>
   
     
  </b-card>
</div>
  </div>
</template>
<style  scoped>
.back{
  transform: scale(.7);
  position: absolute;
  top: 28px;
  left: 18px;
  background-color: #409EFF;
  
}
.about{
  position: relative;
  
}
.bt{
 height: 50px !;
margin: 0 auto;
margin-top: 70px;
  
  
}
.prograss{
  position: relative;
  top: 50px;
}
h2{
  
  font-weight: 900;
  position: absolute;
  top: 30px;
  left: 43%;
  z-index: 9;
}
    .mb-2{
      position: relative;
      margin: 200px auto;
    }
    .content{
    position: relative;
   
    margin: 30px auto;
   
}
label{
  font-size: .7rem;
    position: absolute;
    left: 0;
    top: -20px;
    font-weight: 600;
}
.mb-2{
  margin-top: 60px;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
}

</style>
<script>
//import axios from 'axios'
export default {
  data(){
    return {
        username:"",
        pass:"",
        msg:"",
        show:false
    }
  },
  methods:{
    goindex(){
 this.$router.push({path:'/'})
    },
    login(){
      this.show=true
       var that=this
        this.$axios({
    method: 'get',
    url: '/api/v1/auth/login?username='+that.username+"&password="+that.pass,
    
})
.then( (response)=>{
  console.log(response);
  //this.$show=true
       //document.cookie="session_id=8f6efba5-f8cc-44d5-90ed-fedecffc2403;domain=test.seefs.cn";
     that.msg=response.data.msg;
     that.$store.state.username=response.data.data.username;
     that.$store.state.nickname=response.data.data.nickname;
      that.$store.state.password=response.data.data.password;
      that.$store.state.history=response.data.data.history;
      that.$store.state.collect=response.data.data.collect
     that.$store.state.img=response.data.data.avater;
     sessionStorage.setItem('username',that.$store.state.username)
     sessionStorage.setItem('nickname', that.$store.state.nickname)
      sessionStorage.setItem('avater', that.$store.state.img)
       sessionStorage.setItem('password', that.$store.state.password)
       // sessionStorage.setItem('history', that.$store.state.history)
       //  sessionStorage.setItem('collect', that.$store.state.collect)

 //console.log(response.data);
   setTimeout(()=>{
       that.show=false
     that.$router.push({path:'/newhome'})
   },500)
})
.catch(function (error) {
    console.log(error);
});
    }
  }
}
</script>