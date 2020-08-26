<template>
    <div class="content" >
      
         <NXnav></NXnav>
             
        <div class="home">
            <main class="col">
               <div class="fa">
                   <el-card shadow="hover" class="box-card">
                       <textarea class="textarea" v-model="value" ></textarea>
                      <div class="row">

                            
                        <el-row >
                            <el-upload
                               
                                action="http://upload-z2.qiniup.com"
                                :on-remove="remove"
                                :on-success="handleSuccess"
                                :data="{token: token}"
                                >

                                 <el-tooltip class="item" effect="dark" content="添加图片" placement="right">
                               <el-button type="primary" @click="addpic" icon="el-icon-picture" circle></el-button>
                               </el-tooltip>


                               <el-button type="success" disabled icon="el-icon-share" circle></el-button>
                                <el-button type="info" disabled icon="el-icon-message" circle></el-button>
                                <el-button type="warning" disabled icon="el-icon-star-off" circle></el-button>
                             </el-upload>
                        </el-row>
                        <el-button @click="fabu" type="danger">发布</el-button>
                      </div>
                        <el-image
                            v-show="show"
                            style="transform:scale(.7);width: 20%; height: 20%"
                            :src="this.pic"
                            fit="fit">
                             <div slot="error" class="image-slot">
       
                                </div>
                            </el-image>
                    </el-card>
               </div>
             
                 <iNew :items= this.$store.state.items :imglist=imglist></iNew>
            </main>
            <NXside class="col"></NXside>
            <Rightbar id=right class="col"></Rightbar>
        </div>
        <article>

        </article>
       
      
    </div>
</template>
<style  scoped>
@media screen and (max-width: 800px) {
    #right {
      
          display: none;
      
    }
}
textarea{
        outline: none;
        border:solid 1px #ccc
}

.row{
    margin-top: 10px;
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    justify-content: space-between;
}
.col{
   
    float: left;
}
.textarea{
    width: 100%;
}
article{
    clear: both;
}
.fa{
    margin-top: 20px;
}
.home{
   padding-left: 330px;
   padding-right: 260px;

}
main{
    
    width: 100%;
    height: 100vh;
    background: rgb(243, 246, 249);
}
    img{
        width: 50px;
        height: 50px;
    }
   
</style>
<script>
    import iNew from "@/components/iNew"
    import Rightbar from "@/components/Rightbar"
    import NXside from "@/components/NXside"
    import NXnav from "@/components/NXnav"
     
export default {

   components:{
       NXnav,
       NXside,
       Rightbar,
       iNew
   },

    data(){
        
        return{
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

    mounted(){
    
              if(this.username==null){
           this.$router.push({path:'/'})
           console.log("error")

       }else{

          
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
       
    }
    },
  
}
</script>