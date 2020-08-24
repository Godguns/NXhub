<template>
    <div class="side">
  <b-card
   
   img-src="banner.png"
   img-height="100px"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >     
      <div class="icon">
          <img :src="this.$store.state.img" >
      </div>
      
      <h5>{{this.name}}</h5>
      
     <ul class="like">
       <li>10<br>关注</li>
       <li>05<br>收藏</li>
       <li>--<br>XX</li>
     </ul>
 

   
  </b-card>
  <div>
  <b-card
    title="推荐关注"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-3"
  >
    <!-- <b-card-text>
     推荐关注
    </b-card-text> -->

    
  </b-card>
</div>
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
export default {
  data(){
    return {
      name:sessionStorage.getItem('username')
    }
  },
    methods:{
       
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
  }
    }
}
</script>