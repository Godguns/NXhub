<template>
    <div>
  <b-navbar class="nav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">NXhub</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
  
      <div class="sign" @click="gosign" >注册</div>
      <div  class="login" @click="gologin" >登录</div>
      
   

     
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style  scoped>
 .nav{
     height:9vh;
     background-color: rgb(27, 31, 35) !important;
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
        }
    }
}
</script>