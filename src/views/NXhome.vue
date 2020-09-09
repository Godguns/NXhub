<template>
    <div class="content" >
      
      
             
        <div class="home">
            <main class="col">
               <div class="fa">
                   <el-card shadow="never" class="box-card">
                     <div style=" transform: translateX(-10px); width:530px;" class="cardbody">
                           <textarea @focus="inputmsg"  placeholder="分享你的新鲜事把！" class="textarea" v-model="value" ></textarea>
                         <el-button class="fabubt" @click="fabu" type="danger">发布</el-button>
                     </div>
                      <div class="row">

                            
                        <el-row >
                     
                             <el-upload
                            
                              v-show="show"
                             ref="upload"
                              @click="addpic"
                              :limit="1"
                               :multiple="false"
                                action="http://upload-z2.qiniup.com"
                                :on-remove="remove"
                                :on-success="handleSuccess"
                                :data="{token: token}"
  list-type="text"
 >
   <el-tooltip class="item" effect="dark" content="添加图片" placement="right">
          <i slot="default" class="el-icon-plus"></i>
    </el-tooltip>                 
</el-upload>
                        </el-row>
                      
                      </div>
                      
                    </el-card>
               </div>
             
                 <iNew style="transform: translateX(-40px); " :items= this.$store.state.items :imglist=imglist></iNew>
            </main>
            <NXside style="  margin-top:-40px; transform: scale(.9);"  class="col"></NXside>
            <Rightbar id=right style=" "  class="col" ></Rightbar>
        </div>
        <article>

        </article>
       
      
    </div>
</template>
<style  scoped>
>>>  .el-upload--picture-card{
  
    transform: scale(.7);
    
}

.fabubt{
    width: 100px;
     border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      margin-left: -10px;
}
.cardbody{
    display: flex !important;
    align-content: center !important;
    justify-content: center;
   
}
.box-card{
    display: flex;
    justify-content: center;
   background: transparent;
   
    display: flex;
    align-items: center;
    border: none;
    margin-left: 10px;
   
   
}

@media screen and (max-width: 800px) {
    #right {
      
          display: none;
      
    }
}
textarea{
    
    background: white !important;
    padding-left: 20px;
    /* padding-top: 10px; */
   height: 50px;
   line-height: 50px;
    border: none;
     background: transparent;
    border-right: none;
    padding-right: 10px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    outline: none;
      min-width: 360px;
       
     
   
}

.row{
    margin-top: 10px;
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    justify-content: space-between;
}
.col{
   
   background: transparent;
    float: left;
}

article{
    clear: both;
}
.fa{
   
    margin-bottom: 10px;
    margin-left: 5px;

  
}
.home{
   padding-left: 360px;
   padding-right: 300px;

}
main{
    
    width: 100%;
   
    background: rgb(243, 246, 249);
}
    img{
        width: 50px;
        height: 50px;
    }
   .content{
     
    
       /* background-image: url('http://dongdove.cn/download-1.png') ; */
       background: rgb(236, 249, 253);
     /* background:rgba(232, 252, 244, 0.9); */
   }
</style>
<script>
    import iNew from "@/components/iNew"
    import Rightbar from "@/components/Rightbar"
    import NXside from "@/components/NXside"
  
     import io from "socket.io-client"
export default {

   components:{
      
       NXside,
       Rightbar,
       iNew
   },
     beforeRouteUpdate () {
       //this.$store.dispatch('socketinfo')
  },
    data(){
        
        return{
          online:this.$store.state.online,
             socket: io('http://localhost:4001'),
            pic:"",
            value:"",
            show:false,
            username:sessionStorage.getItem("username"),
            avater:sessionStorage.getItem("avater"),
            imglist:['https://picsum.photos/600/300/?image=26','https://picsum.photos/600/300/?image=27','https://picsum.photos/600/300/?image=28','https://picsum.photos/600/300/?image=29'],
            page:1,
            limit:20,
            items:[],
            token:""
           
        }
    },

    created(){
  
             
              
          this.$emit('header',false);      

        
    
      
        // console.log(this.$store.state.online)
    //this.socketin()
              if(this.username==null){
           this.$router.replace({path:'/'})
           console.log("error")

       }else{
this.$emit('header',true);
          
           this.ngetalk()
           this.getuserinfo()
       }
         this.$axios({
            method:'get',
            url:'/api/v1/file/token'
        }).then(response=>{
         
            this.token=response.data.token;
             sessionStorage.setItem('token',this.token)
            
           
        });
     
    },
    methods:{
       hidden(){
           this.show=false
       },
        inputmsg(){
            this.show=true;
        },
           fabu() {
              
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
                                            url:'/api/v1/spit2?username='+sessionStorage.getItem('username')+'&avater='+sessionStorage.getItem('avater')+'&content='+this.value+'&time='+nowDate+'&img='+this.pic,
                                        }).then(()=>{
                                            this.$message({
                            message: '恭喜你，这是一条成功消息',
                            type: 'success'
                            });
                              this.$refs.upload.clearFiles()
                             this.show=false;
                             this.value=""
                                        this.$store.dispatch('getalk')
                                            
                                        })
  },
       async ngetalk(){
          await  this.$store.dispatch('getalk')
          this.items=this.$store.state.items
          console.log("wait!!!",this.items)
        },
  
        getuserinfo(){
              this.$store.dispatch('getuserinfo')
          
        },
        addpic(){
        console.log("???")
        this.show=!this.show;
        console.log(this.show)
         this.$message({
          message: '图片已上传',
          type: 'success'
        });
    },
    remove(){
        this.show=false
    },
    handleSuccess(res){
      
        this.pic = 'http://dongdove.cn/'+res.hash
        console.log("上传地址为",this.pic)
       
    },
   
    },

  
}
</script>