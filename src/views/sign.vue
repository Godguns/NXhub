<template>
    <div>
        <Navbar></Navbar>
        <div>
        <div>
            <h1>注册成为用户</h1>
        </div>
      <div class="content" role="group">  

    <label for="input-live1">用户名:</label>
    <b-form-input
      id="input-live1"
      v-model="name"
     
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

    <!-- <label for="input-live2">昵称:</label>
    <b-form-input
      id="input-live2"
      v-model="nick"
     
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your nickname"
      trim
    ></b-form-input> -->

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
   
  </div>
  
   <div class="content" role="group">  

    <label for="input-live3">密码:</label>
    <b-form-input
      id="input-live3"
      v-model="pass"
      
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your password"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
   
  </div>
       <div class="content" role="group">  

    <!-- <label for="input-live2">邮箱:</label>
    <b-form-input
      id="input-live2"
      v-model="mail"
      
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your nickname"
      trim
    ></b-form-input> -->

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
   <b-form-text id="input-live-help">.Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</b-form-text>
  </div>

   <b-button v-b-modal="'my-modal'" @click="sign" class="lg" size="lg">Sign in</b-button>
    <b-modal  size="sm" centered id="my-modal">{{msg}}</b-modal>
    </div>
    </div>
</template>
<style  scoped>
.lg{
  margin-top: 30px;
}
.card{
    margin: 0;
    padding: 0;
    border-radius: 0;
    border: 0;
}
h1{
    margin-top: 10%;
}
.content{
    position: relative;
    width: 40vw;
    margin: 50px auto;
   
}
label{
    position: absolute;
    left: 0;
    top: -30px;
    font-weight: 500;
}

</style>
<script>
import Navbar from "@/components/Navbar"


export default {
    components:{
        Navbar

    },
    data(){
        return {
            name:"",
            nick:"",
            pass:"",
            msg:"loading..",
            mail:0,
             avater:'http://qfeuhyill.hn-bkt.clouddn.com/peko2.jpg'
        }
    },
    methods:{
        sign(){
            var that=this;
           
            
              this.$axios.get('/api/v1/user/register', {
	params : { //请求参数
    username : this.name,
    password:this.pass,
    avater:this.avater
	}
})  .then(function (response) {
                                        console.log(that.msg);
                                        
                                        that.msg=response.data.msg
                                     if(response.data.code==200)
                                     {
                                      
                                        that.$router.push({path:"/login"})
                                     }
                                        //this.$router.push({path:"/login"})
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
        }
    }
}
</script>