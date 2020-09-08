<template>
    <div class="home">
       
          <div>
<div class="nav">
    <el-tabs class="navc" v-model="activeName" >
    <el-tab-pane class="navcc1" label="TA的信息" name="first">
       <el-divider content-position="left" style="color:rgb(218,242,207)">个性标签</el-divider>
                 <el-tag
                 class="tip"
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
                {{tag.name}}
              </el-tag>
       <el-divider content-position="left" style="color:rgb(218,242,207)">TA的动态</el-divider>
            <el-timeline class="timelinecontent" >
             
            <el-timeline-item class="timeline"
              v-for="(activity, index) in list"
              :key="index"
               color="rgb(218,242,207)"
              :timestamp="activity.time">
                                <div>
                        <b-card  no-body class="overflow-hidden" style="background-size:cover; margin-top:30px;max-height:300px">
                          <b-row no-gutters>
                            <b-col md="6">
                              <b-card-img  v-if="activity.img" :src="activity.img" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="6">
                              <b-card-body >
                                <b-card-text>
                                 {{activity.content}}
                                </b-card-text>
                              </b-card-body>
                            </b-col>
                          </b-row>
                        </b-card>
                      </div>
              <!-- {{activity.content}} -->
                      <!-- <el-image
              v-if="activity.img"
              style="max-width:400px;transform:scale(.5);display:block; "
              :src="activity.img"
              fit="cover"></el-image> -->
            </el-timeline-item>
          </el-timeline>
          <hr style="clear:both">
    </el-tab-pane>
    <el-tab-pane class="navcc1" label="TA收藏" name="second">
         
          
           
            
    </el-tab-pane>
    
  </el-tabs>
</div>

  
<div class="content">
      <div class="peason">
           <el-image
       class="avater"
      
      :src="avater"
      fit="scale-down"></el-image>
   
      <div class="avater2">😂</div>
      <h3>{{this.$route.params.username}}<br><h4>{{this.$route.params.username}}</h4></h3>
      <el-tooltip :content="msg" placement="right-start">
        <el-button v-show="!fork" type="danger" class="focus" @click="addfork" icon="el-icon-plus" circle></el-button>
        
      </el-tooltip>
      <el-tooltip :content="msg" placement="right-start">
       <el-button v-show="fork" type="success" class="focus"   icon="el-icon-check" circle></el-button>
      </el-tooltip>
        <div class="msg">
          <ul>
            <li>one:xxx</li>
            <li>two:xxxx</li>
            <li> <i class="el-icon-edit"></i></li>
            
          </ul>
       
            
        </div>
           <el-divider content-position="left">TA的粉丝</el-divider>
          <div class="gzitem">
      <el-image
      v-for="(i,index) in forkimg " :key=index
      class="gzimg"
      style="  width: 45px; height: 45px;border-radius:50%"
      :src="i"
       @click="gopeople(forks[index])"
      fit="cover"></el-image>
    
 
    </div>
    
       
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
.gzimg{
  margin: 5px;
}
.gzitem{
  display: flex;
  justify-content: flex-start;
}
.gzitem :hover{
transform: scale(1.2);
transition: .8s;
}
.home{
  min-height: 100vh;
}
.timeline{
  text-align: left;
  display: block;
  transform: scale(.9);
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
   margin-top: 10px;
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



export default {
    
    components:{
      
       
  
       

    },
    
    data(){
       return{
         forks:[],
         User_gz:[],
           msg:"关注",
           fork:false,
           forklist:[],
           forkimg:[],
         username:"",
         password:"",
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
            avater:""
       } 
    },
    mounted(){
      this.getpeopleinfo()
      this.getuserfork();
            this.$axios({
                method:'get',
                url:'/getpeopleinfo?username='+sessionStorage.getItem('username'),

                  }).then(response=>{
                 
                  this.User_gz=response.data.info.fork;
                  
                
             
        })
    },
  
    created(){
       this.$emit('header',true);
      // this.$store.dispatch('getuserinfo')
    },
    
    methods:{
       gopeople(e){
        console.log(e)
        if(e==sessionStorage.getItem('username')){
          this.$router.push({path:'/peason'})
        }else{
          this.$router.push({
          path:`/people/${e}`
        })
        location.reload()
        }
      },
        getpeopleinfo(){
                            this.$axios({
                method:'get',
                url:'/getpeopleinfo?username='+this.$route.params.username,

                  }).then(response=>{
                  this.list=response.data.data.reverse()
                  this.avater=response.data.info.avater;
                  this.forklist=response.data.info.fans;
                 // this.User_gz=response.data.info.fork;
                  
                  sessionStorage.setItem('gz',this.forklist.length)
                  console.log(response.data.info.fork)
                  response.data.info.fans.forEach((item)=>{
                      if(item!==sessionStorage.getItem('username')){
                            this.fork=false
                          console.log("没关注")

                          this.msg="关注"
                          
                      }else{
                          this.msg="取消关注"
                          this.fork=true
                      }
                  })
                  console.log(response)
        })
        },
        getuserfork(){
          this.$axios({
            method:'get',
            url:'/getuserforks',
            params:{
              username:this.$route.params.username
            }
          }).then((response)=>{
           
            for (var n of response.data.data) {
              console.log(n)
              this.forkimg.push(n.avater)
              this.forks.push(n.username)
            }

          })
        },
      addfork(){
       this.User_gz.push(this.$route.params.username)
     //this. User_gz.push(this.$route.params.username)
       this.forklist.push(sessionStorage.getItem('username'))
        console.log("这里是添加关注方法哟",this.forklist)
        this.$axios({
            method:'get',
            url:'/addfork?username='+this.$route.params.username+"&fork="+this.forklist+"&user="+sessionStorage.getItem('username')+"&usergz="+this.User_gz,
      
        }).then((response)=>{
            console.log(response)
            this.getpeopleinfo()
            this.getuserfork()

        })
      },

    }
}
</script>