<template>
    <div>
  <b-navbar class="nav" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand style="color:black; font-weight:900;" href="/">NXPixiv</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      
       
      <b-navbar-nav class="ml-auto">
         <b-nav-form>
          <!-- <b-form-input style="height:35px; align-items: center; padding-left:20px; border-radius:25px;" size="sm" class="mr-sm-2" placeholder="搜索作者·标签"></b-form-input> -->
         
        </b-nav-form>
       <p style="margin-top:7px;">已有账号？</p>
   <el-button style="width:120px;height:35px; line-height:10px; align-items: center;" type="primary" @click="gologin" round>登录</el-button>
    <!-- <el-button type="info" style="height:35px; align-items: center; background:white !important;" round plain>注册</el-button> -->
      <!-- <div class="sign" @click="gosign" >注册</div>
      <div  class="login" @click="gologin" >登录</div> -->
      
   

     
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style  scoped>
 .nav{
     height:9vh;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px;
     background-color: transparent !important;
 }

 .sign{
    
   border-radius: 5px;
   
    width: 70px;
     height: 30px;
      font-weight: 500;
    font-size: 1em;
    outline: none;
    color: white;
   line-height: 30px;
    background-color: rgb(27, 31, 35) !important;
    cursor: pointer;
 
 }
 .sign:hover{
    
     opacity: .8;
 }
  .login:hover{
    
     opacity: .8;
 }
 .login{
     font-weight: 500;
      border:solid 1px white;
     font-size: 1em;
    border-radius: 3px;
    line-height: 30px;
     width: 70px;
     height: 30px;
     outline: none;
     color: white;
    
      background-color: rgb(27, 31, 35) !important;
      cursor: pointer;
    
 }
</style>
<script>
export default {
    methods:{
        gosign(){
            this.$router.push({path:'/sign'})
        },
        gologin(){
             this.$router.push({path:'/login'})
        }
    }
}
</script>