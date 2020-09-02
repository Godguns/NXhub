<template>
    <div class="side">
  <b-card
   
   img-src="http://tva2.sinaimg.cn/large/006BFMdqly1gi17nb5nooj315o0th7wh.jpg"
   img-height="100px"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >     
      <div @click="gopeason" class="icon">
          <img :src="this.$store.state.img" >
      </div>
      
      <h5>{{this.name}}</h5>
      
     <ul class="like">
       <li>{{gz}}<br>关注</li>
       <li>{{fans}}<br>粉丝</li>
       <li>--<br>XX</li>
     </ul>
 

   
  </b-card>
     <el-card shadow="hover" class="box-card">
  <div slot="header" class="clearfix">
    <span>推荐关注</span>
    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
  </div>
  <div v-for="(o,index) in TJ" :key="index" class=" item">
    <!-- <el-avatar style=" border:1px solid #ccc;" :src="o.avater">  </el-avatar> -->
    <el-image
      style="width: 43px; height: 43px;border:1px solid #ccc; border-radius:50%;"
      :src="o.avater"
      fit="cover"></el-image>
    <div class="text"> {{o.username}}</div>
  </div>
</el-card>
<!-- <pcard></pcard> -->
</div>
</template>
<style  scoped>
@media screen and (max-width: 600px) {
   .mb-2 {
         display: none;
    }
}
@media screen and (max-width: 800px) {
   .mb-2 {
         width: 30vw;
    }
}
 .mb-2{
   position: relative;
       width: 300px;
     margin-top: 0px;
   height: 190px;
 border-radius: 5px !important;

    
 }
 .mb-3{
   width: 300px;
 }
   .text {
   
    line-height: 40px;
    margin: 10px;
  }

  .item {
   
     font-size: 14px;
     line-height: 40px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
  }
 .like{
   width: 100%;
  
   list-style: none;
   display: flex;
    position: absolute;
    left: 0px;
    top:96px ;
  
 }

 .like li{
    margin:10px 20px;
 
   
 }

 .icon img{

   max-width: 100%;
   max-height: 100%;
 }
 .icon{
  
   border:1px solid #E4E7ED;
   border-radius: 50%;
   overflow: hidden;
   position: absolute;
   left: 40px;
   top: 24px;
   width: 52px;
   height: 52px;
 }
 h5{
   color: white;
   position: absolute;
   line-height: 52px;
   top: 24px;
   left: 104px;
 }
 .side{
     
      width: 300px;
       height: 110vh;
       margin-left: -100%;
        position: relative;
        top: 20px;
        right:330px;
 }

 .fabiao{
   position: absolute;
   top: 0;
   left: 0;
   /* margin-left:140px ;
   margin-top: -10px; */
     width: 70px;
     height: 30px;
     
 }

</style>
<script>
 //import pcard from "@/components/pcard"

export default {
  components:{
    
  },
  data(){
    return {
      TJ:[],
      fans:sessionStorage.getItem('fans')==[]?0:sessionStorage.getItem('fans'),
      gz: sessionStorage.getItem('gz')==[]?0:sessionStorage.getItem('gz'),
      name:sessionStorage.getItem('username')
    }
  },
  beforeMount(){
    this.getuserfork();
    this.getTJ()
  },
    methods:{
      gopeason(){
        this.$router.push({path:'/peason'})
      },
                getuserfork(){
          this.$axios({
            method:'get',
            url:'/getuserforks',
            params:{
              username:sessionStorage.getItem('username')
            }
          }).then((response)=>{
           //this.gz=response.data.forks.length
          sessionStorage.setItem('gz',response.data.forks.length)
          sessionStorage.setItem('fans',response.data.data.length)
          })
        },
      open() {
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
      },
      getTJ(){
        this.$axios({
          url:'/get_TJ',
          method:'get',

        }).then(response=>{
          this.TJ=response.data.data
        })
      }
    }
}
</script>