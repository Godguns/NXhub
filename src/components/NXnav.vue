<template>
    <div>
  <b-navbar class="nxnav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#/nxhome">NXhub</b-navbar-brand>

    <!-- <b-navbar-toggle ></b-navbar-toggle> -->

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/pixiv">Pixiv社区</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>

        <b-nav-form  >
          <b-form-input size="sm"  class="mr-sm-2" placeholder="Search"></b-form-input>
         
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
   
          
       
             <b-nav-item-dropdown   no-caret right>
            <template v-slot:button-content>
                <b-icon  class="mb-2" style="color: #fff;" icon="plus"></b-icon>
     
            </template>
            
          
          <b-dropdown-item href="#/userupdate">上传图片</b-dropdown-item>
          <b-dropdown-item href="#">DarkMod</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
             <el-image fit="cover"  class="avater" :src="avater" alt=""></el-image>
           <!-- <b-img class="avater"  :src="avater" rounded="circle" ></b-img> -->
          </template>
          <b-dropdown-item href="#/peason">个人主页</b-dropdown-item>
          <b-dropdown-item href="#">退出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style  scoped>
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
        background-color: rgb(27, 31, 35) !important;
    }
    .mr-sm-2{
        margin-left: 50px;
        background-color: rgb(48, 52, 56);
        outline: none;
        border:none;
        width: 245px !important;
    }
     
</style>
<script>
  
export default {
    data(){
        return {
            avater:sessionStorage.getItem('avater')
        }
    },
    methods:{
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