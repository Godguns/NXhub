<template>
    <div >
  <b-navbar class="nxnav" toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="#/nxhome">NXhub</b-navbar-brand>

    <!-- <b-navbar-toggle ></b-navbar-toggle> -->

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/pixiv">Pixiv社区</b-nav-item>
         <!-- <b-nav-item href="#" >实验室🧪</b-nav-item> -->
        <b-nav-item href="#/album" >专辑</b-nav-item>

        <b-nav-form  >
          <b-form-input size="sm"  class="mr-sm-2" placeholder="Search"></b-form-input>
         
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-nav-item > 
          
           <el-popover
              placement="top"
              width="160"
              v-model="visible">
                <div style="display:flex;  ">
                  <el-image
                   @click="showdiag(index)"
                  v-for="(item,index) in msglist" :key="index"
                  style="border:1px solid #ccc; margin:0 3px; width: 32px; height: 32px; border-radius:50%;"
                  :src="item"
                  fit="cover"></el-image>
                  <!-- <p style=" line-height:32px;margin-left:10px;">Godguns</p> -->
                </div>
              <div style="text-align: right; margin: 0">
                <!-- <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible = false">确定</el-button> -->
              </div>
               <!-- <el-button slot="reference" style="transform:scale(.8)" type="info" icon="el-icon-message" circle></el-button> -->
            
            </el-popover>
              <div style="display:flex; margin-top:3px; ">
                  <el-image
                   @click="showdiag(index)"
                  v-for="(item,index) in msglist" :key="index"
                  style="transfrom:scale(.8); border:1px solid #ccc; margin:0 3px; width: 32px; height: 32px; border-radius:50%;"
                  :src="item"
                  fit="cover"></el-image>
                
                </div>
         </b-nav-item>
          
             <b-nav-item-dropdown   no-caret right>
            <template v-slot:button-content>
             
              
               <el-button style="color:#606266;transform: scale(.8);border:none; background: rgb(243, 246, 249);" type="info" round>投稿作品+</el-button>
              <!-- <p style="color:#606266;border-radius:30px;padding:5px ; background: rgb(243, 246, 249); line-height:30px; margin-right:20px;margin-bottom:0px;">投稿作品</p> -->
                <!-- <b-icon  class="mb-2" style="color: rgb(128,128,128);" icon="plus"> </b-icon> -->
     
            </template>
            
          
          <b-dropdown-item href="#/userupdate">上传图片</b-dropdown-item>
          <b-dropdown-item href="#">DarkMod</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
             <el-button  style="transform:scale(.4); margin-left:20px !important;" type="primary"  circle></el-button>
             <el-image style="margin-top:5px;" fit="cover"  class="avater" :src="avater" alt=""></el-image>
           <!-- <b-img class="avater"  :src="avater" rounded="circle" ></b-img> -->
          </template>
          <b-dropdown-item href="#/peason">个人主页</b-dropdown-item>
          <b-dropdown-item href="#">退出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

<el-dialog  title="消息详情" :visible.sync="dialogTableVisible">
          <div style="  overflow: scroll;
  max-height: 400px;">
            <div v-for="(item,index) in messages" :key="index">
                  <div class="people" v-show="item.author!==user&&item.avater==new_fromavater" >
               <el-image
              
                  style="border:1px solid #ccc; margin:0 3px; width: 32px; height: 32px; border-radius:50%;"
                  :src="item.avater"
                  fit="cover"></el-image>
                  <div class="p_msg">
                     {{item.text}}
                  </div>
            </div>
            <div class="my" v-show="(item.author==user)&&(item.to==temp||item.msg_key==temp)" >
                  <el-image
                  style="border:1px solid #ccc; margin:0 3px; width: 32px; height: 32px; border-radius:50%;"
                  :src="avater"
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
  margin-top: 30px;
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
.ml-auto{
  
    line-height: 20px !important;
}
.mb-2{
  width: 30px;
  height: 30px;
}
.add{
    font-size: 20px;
}
    .avater{
      border-radius: 50%;
        width: 30px;
        height: 30px;
    }
    .nxnav{
        line-height: 1.5em;
        height: 53px !important;
        /* rgb(27, 31, 35) */
        background-color: white !important;
    }
    .mr-sm-2{
        margin-left: 50px;
        /* background-color: rgb(48, 52, 56); */
        outline: none;
        border:none;
        width: 245px !important;
    }
     
</style>
<script>
  import io from "socket.io-client"
export default {
  
     beforeRouteUpdate () {
      
  },
    data(){
        return {
          temp:"",
          show:true,
           socket: io('http://49.235.16.43:4001'),
          fromavater:[],
          new_fromavater:"",
          from:[],
          new_from:"",
          user:sessionStorage.getItem('username'),
          txlist:this.$store.state.m_queue,
          messages:this.$store.state.p_queue,
          textarea2:"",
           dialogTableVisible: false,
         msglist:[],
          visible:false,
          
          online:  this.$store.state.online,
            avater:sessionStorage.getItem('avater')
        }
    },
beforeUpdate(){
//  if(sessionStorage.getItem('username')!==null){
//         this.show=true;
//         console.log("获取用户数据:",sessionStorage.getItem('username'))
//      }
},
    beforeMount(){
           
    //  if(sessionStorage.getItem('username')==null){
    //     this.show=false;
    //     console.log("获取用户数据:",sessionStorage.getItem('username'))
    //  }
      this.socket.on('disconnect',()=>{
   this.$store.state.online="danger"
   
})

          // this.socket.on('welcome',()=>{
          //        this.online="success"
          //                this.$store.state.online="success"  
          //     })
       this.socket.on('connect',()=>{
            var socketdata={
                    username:sessionStorage.getItem('username'),
                    avater:sessionStorage.getItem('avater'),
                    socket_id: this.socket.id
                }
              
                  
                  this. socket.emit('online',socketdata);
                      })
                         
                  
           this.socket.on(sessionStorage.getItem('username'),(data)=>{
                     
  
                    
                       
                       
                            console.log("发给我的消息是",data)
                             this.$store.state.p_queue.push({
                        text:data.data.text,
                        author:data.data.from,
                        avater:data.data.avater,
                        to:data.data.to
                      });
                      
                        


                       // this.messages.push(data.data)
                      if(this.msglist.length===0){
                         this.msglist.push(data.data.avater)
                          this.from.push(data.data.from)
                          this.fromavater.push(data.data.avater)
                      }else{
                               
                    //  this.msglist.forEach(item=>{
                        if(!this.msglist.includes(data.data.avater)){
                             this.msglist.push(data.data.avater)
                             this.from.push(data.data.from)
                              this.fromavater.push(data.data.avater)
                        }
                    //  })
                      }
                  

                     })   
                        window.addEventListener('beforeunload', () => {
                          var data={
                          username:sessionStorage.getItem('username'),
                        }
                        this.socket.emit("exit",data)
                        })
 
                          // this.online=this.$store.state.online,
                          //   console.log(this.online+"kkkk")
    },
   
    methods:{
      showdiag(e){
        this.temp=this.from[e];
        console.log("零时的temp=",this.temp)
        this.dialogTableVisible = true;
      this.new_from=this.from[e]
      this.new_fromavater=this.fromavater[e]


      },
  sendmessage(){

      
     this.messages.push( {
            text:this.textarea2,
            author:sessionStorage.getItem('username'),
            avater:sessionStorage.getItem('avater'),
              to:this.new_from,
              key:this.temp
          })
     var data={
          from:sessionStorage.getItem('username'),
          to:this.new_from,
          
          text:this.textarea2,
          avater:sessionStorage.getItem('avater')
        }
         this.socket.emit('sender',data);
         console.log(data)
          this.$message({
          message: '发送成功',
          type: 'success'
        });
        this.textarea2=""
       
      },
  add() {
        this.$prompt('New', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          
          
        }).then(({ value }) => {
            // 获取当前日期
              var date = new Date();

              // 获取当前月份
              var nowMonth = date.getMonth() + 1;

              // 获取当前是几号
              var strDate = date.getDate();

              // 添加分隔符“-”
              var seperator = "-";

              // 对月份进行处理，1-9月在前面添加一个“0”
              if (nowMonth >= 1 && nowMonth <= 9) {
                nowMonth = "0" + nowMonth;
              }

              // 对月份进行处理，1-9号在前面添加一个“0”
              if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
              }

      // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
          var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
                    this.$axios({
                          method:'get',
                          url:'/api/v1/spit2?username='+sessionStorage.getItem('username')+'&avater='+sessionStorage.getItem('avater')+'&content='+value+'&time='+nowDate,
                      }).then(()=>{
                      this.$store.dispatch('getalk')
                        
                      })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消输入'
                });       
              });
  }
    }
}
</script>