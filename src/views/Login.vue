<template>
  <div class="about">
    <div>
      <h2>登录到NXhub</h2>
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
      :state="nameState"
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

    <label for="input-live">用户名:</label>
    <b-form-input
      id="input-live"
      v-model="pass"
      :state="nameState"
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

    <b-button @click="login"  class="bt" href="#" size="lg" >Go somewhere</b-button>
     
  </b-card>
</div>
  </div>
</template>
<style  scoped>
.bt{
 height: 50px !;
  
  
}
h2{
  font-weight: 400;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%,-50%);
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
  font-size: 5px;
    position: absolute;
    left: 0;
    top: -20px;
    font-weight: 600;
}

</style>
<script>
import axios from 'axios'
export default {
  data(){
    return {
        username:"",
        pass:"",
        msg:""
    }
  },
  methods:{
    
    login(){
       var that=this
        axios({
    method: 'post',
    url: 'http://103.123.160.132:8090/api/v1/auth/login',
    data: {
        username: this.username,
        password: this.pass,
       
    }
})
.then(function (response) {
    console.log(response);
     that.msg=response.data.msg;
     that.$router.push({path:'/nxhome'})
})
.catch(function (error) {
    console.log(error);
});
    }
  }
}
</script>