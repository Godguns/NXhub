<template>
    <div class="home">
        <div style="background: transparent; border-radius:10px; background:url('http://tva2.sinaimg.cn/large/006BFMdqly1gi17nb5nooj315o0th7wh.jpg')">
          
                   <b-card
  class="card2"
  style=" background: transparent; border-radius:10px;"
    overlay
    img-src="http://tva2.sinaimg.cn/large/006BFMdqly1gi17nb5nooj315o0th7wh.jpg"
    img-alt="Card Image"
    text-variant="white"
  >

  <div  class="title2">
                        
                        <el-image
                        @click="gopeople(username)"
                        style=" border-radius:50%; border:1px solid #ccc; width: 52px; height: 52px"
                        :src="avater"
                        fit="cover"></el-image>
                        
                       

                      <el-dialog  :visible.sync="dialogTableVisible">
                       
                     
                      </el-dialog>
                     
                         <el-button  style=" transform:scale(.5);width:2px;height:2px;line-height:2px; position:relative; top:30px;left:-20px;"  @click="showdiag" :type="online" circle></el-button>
                    <span style="margin-left:20px; font-size:20px;" >{{username}}</span>
  </div>
    <ul class="list">
                    <li>粉丝 {{fans}}</li>
                    <li>关注{{gz}} </li>
                    <li>收藏 --</li>
                    
                </ul>
      
  </b-card>
  
        </div>
         <el-divider content-position="left">他的相关推荐</el-divider>
        <div class="others1">

            <el-image v-for="(item,index) in history" :key="index"
                        style="  width: 84px; height: 84px"
                        :src="item"
                        @click="goinfo(item)"
                        fit="cover"></el-image>
           
        </div>

        <el-dialog style=" " title="消息详情" :visible.sync="dialogTableVisible">
          <div style="  overflow: scroll;
  max-height: 400px;" >
            <div v-for="(item,index) in messages" :key="index">
                   <div class="people" v-show="item.author!==user&&(item.to==user&&item.author==username)
                   ">
               <el-image
                  style="border:1px solid #ccc; margin:0 3px; width: 32px; height: 32px; border-radius:50%;"
                  :src="item.avater"
                  fit="cover"></el-image>
                  <div class="p_msg">
                     {{item.text}}
                  </div>
            </div>
            <div class="my" v-show="item.author==user&&(item.to==username||item.msg_key==username)">
                  <el-image
                  style="border:1px solid #ccc; margin:0 3px; width: 32px; height: 32px; border-radius:50%;"
                  :src="user_avater"
                  fit="cover"></el-image>
                  <div class="m_msg">
                     {{item.text}}
                  </div>
            </div>
            </div>
           
          
          </div>
           <div class="control"  @keyup.enter="sendmessage">
              <el-input
             style="border:none !important;"
              class="in"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 5}"
                placeholder="请输入内容"
                v-model="textarea2">
              </el-input>
           </div>
</el-dialog>
    </div>
    
</template>
<style  scoped>


.in{
  border:none !important;

}
.control{
  margin-top: 13px;
}
.p_msg{
  margin-top: 5px;
  background: wheat;
  border-radius: 15px;
  min-width: 60px;
  min-height: 40px;
  padding: 10px;
}
.people{
  display: flex;
}
.m_msg{
  margin-top: 5px;
  background: wheat;
  border-radius: 15px;
  min-width: 60px;
  min-height: 40px;
  padding: 10px;
}
.my{
  display: flex;
  flex-direction: row-reverse;
}

.send{
 float: right;
 margin-top:-56px;
  border:none;

}
>>> .form-control{
  border:none;
 
}
.card-img{
 
    border-radius: 15px;
    border:none;
    background: transparent;
}
.info2{
    margin-top: 50px;
    color: black;
}
.title2{
    display: flex;
    justify-content: center;
}
.header{
    position: relative;
}
.home{
    margin-top: 10px;
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
    margin-top: 30px;
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
 .card-body{
    
 }
</style>
<script>
import io from "socket.io-client"

  
export default {
 
    components:{
       
    },


  
    props:['name'],

    data(){
        return {
            user_avater:sessionStorage.getItem('avater'),
            messages:this.$store.state.p_queue,
          textarea2:"",
            peoplelist:[],
            socket: io('http://49.235.16.43:4001'),
            people_msg:[],
            mine_msg:[],
            dialogTableVisible:false,
            text:"",
            user:sessionStorage.getItem('username'),
            online:"danger",
            history:JSON.parse(sessionStorage.getItem('history')),
            fans:sessionStorage.getItem('fans')===[]?0:sessionStorage.getItem('fans'),
            gz: sessionStorage.getItem('gz')===[]?0:sessionStorage.getItem('gz'),
            username:"",
            avater:"",
            imglist:[1,2,3,4,5,6],
            txlist:this.$store.state.m_queue
        }
    },
  
      beforeRouteUpdate () {
            this.socketinfo()
          // this.socket.on('connect',()=>{
          //  this.socket.on('datalist',data=>{
          //         this.$store.state.onlines=data
          //           console.log(this.$store.state.onlines,"主页哈哈哈")
          //          data.forEach(element => {
                     
                     
          //             if(element==sessionStorage.getItem('username')){
          //               this.gonline="success"
          //             }
                    
          //               if(element===this.username||element==sessionStorage.getItem('username')){
          //                 this.online="success"
          //                 console.log("2",element+"和"+this.username)
          //               }
          //          });
          //         })
    // })
           
  },
  
  mounted(){
  
        this.socketinfo()
           //this.socket.on('connect',()=>{
          //  this.socket.on('datalist',data=>{
          //         this.$store.state.onlines=data
          //           console.log(this.$store.state.onlines,"主页哈哈哈")
          //          data.forEach(element => {
                     
                     
                      
                    
          //               if(element===this.username||element==sessionStorage.getItem('username')){
          //                 this.online="success"
          //                 console.log("3",element+"和"+this.username)
          //               }else{
          //                 console.log("没有发现")
          //               }
          //          });
          //         })
     //})
       this.$axios({
           method:'get',
           url:'/usermsg',
           params:{
               img:sessionStorage.getItem('imgsrc')
           }
       }).then(response=>{
         console.log("哇哈哈哈哈")
          this.history=response.data.data.history;
          this.avater=response.data.data.avater;
          this.username=response.data.data.username;
          this.$store.state.which_name=this.username
          sessionStorage.setItem('picauthor',this.username)
            this.gz=response.data.data.fork.length;
            this.fans=response.data.data.fans.length;
            if(this.username==sessionStorage.getItem('username')){
              this.online="success"
            }
            
            
       }).then(()=>{

          console.log(this.$store.state.onlines,"2020")
  
         this.socket.on('connect',()=>{
          //  this.socket.on('datalist',data=>{
          //         this.$store.state.onlines=data
          //           console.log(this.$store.state.onlines,"主页哈哈哈")
          //          data.forEach(element => {

          //               if(element===this.username||element==sessionStorage.getItem('username')){
          //                 this.online="success"
          //                 console.log("4",element+"和"+this.username)
          //               }else{
          //                 console.log("没有发现")
          //               }
          //          });
          //         })
     })
       })
       
    
    },
    
  
    methods:{
      socketinfo(){
this.socket.on('disconnect',()=>{
   this.$store.state.online="danger"
   //this.$router.go(-1)
})
     this. socket.on('welcome',()=>{
       
     });
 
                    //   this.socket.on('isconnect',()=>{
                        
                    //  })
                 
                
                  // this.socket.on('datalist',data=>{
                  //   console.log(data,"hahaha")
                  //  data.forEach(element => {
                     
                     
                  //     if(element==sessionStorage.getItem('username')){
                  //       this.gonline="success"
                  //     }
                    
                  //       if(element===this.username){
                  //         this.online="success"
                  //       }
                  //  });
                  // })
   
                  this.socket.on('out',(d)=>{
                    this.online="danger"
                    console.log(d)
                  })
 
                      window.addEventListener('beforeunload', () => {
         var data={
        username:sessionStorage.getItem('username'),
      }
       this.socket.emit("exit",data)
       })


    // })
    },
      showdiag(){
          if(this.username===sessionStorage.getItem('username')){
          this.$message({
          message: '不是吧，你还想和自己聊天呢哈？？',
          type: 'warning'
        });
       }else{
           this.dialogTableVisible = true
       }

      },
      sendmessage(){
       
          if(this.username===sessionStorage.getItem('username')){
          this.$message({
          message: '不是吧，你还想和自己聊天呢哈？？',
          type: 'warning'
        });
       }else{
         
        this.$store.state.p_queue.push(
          {
            text:this.textarea2,
            author:sessionStorage.getItem('username'),
            avater:sessionStorage.getItem('avater'),
            
             msg_key:this.username
          }
        )
       
        //this.txlist.push(this.textarea2)
         var data={
          from:sessionStorage.getItem('username'),
          to:sessionStorage.getItem('picauthor'),
          
          text:this.textarea2,
          avater:sessionStorage.getItem('avater')
        }
         this.socket.emit('sender',data);
          this.$message({
          message: '发送成功',
          type: 'success'
        });
        this.textarea2=""
       }
     
      },
      goBack() {
        console.log('go back');
      },
      gochat(e){
         this.$router.push({path:`/chat/${e}`})
         console.log(e)
      },
           goinfo(e){
        
        this.$axios({
          method:'get',
          url:'/toinfopic',
          params:{
            img:e
          }
        }).then(response=>{
          console.log(response.data.data)
          this.$router.push({path:`/picinfo/${response.data.data}`})
           location.reload()
        
        })
      },
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
    },
    beforeDestroy(){
     
    },
}
</script>