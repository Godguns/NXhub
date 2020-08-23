import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
axios.defaults.baseURL="https://nxhub.seefs.cn/";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:"",
    password:"",
    nickname:"",
    mail:"",
    img:"",
    items:[],
    page:1,
    limit:20
  },
  mutations: {
      talk(n){
        this.state.items=n
        
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
      }

  },
  actions: {
    getalk(){//获取吐槽列表
           
     return  axios({
          methods:'get',
          url:'/api/v1/spit'
        
      }).then((response)=>{
       
        //context.commit("talk",response.data.data.items)
         this.state.items=response.data.data.reverse();
          //this.reload()
          console.log("hgagag",this.state.items)

      })
  },
  getuserinfo(){
 
        axios({
    method: 'get',
    url: '/api/v1/auth',
    params:{
      username: sessionStorage.getItem('username'),
      password:sessionStorage.getItem('password')
    }
 
})
.then( (response)=> {
  console.log(response);
       //document.cookie="session_id=8f6efba5-f8cc-44d5-90ed-fedecffc2403;domain=test.seefs.cn";
       this.state.username=response.data.username;
      this.state.nickname=response.data.nickname;
       this.state.password=response.data.password;
      this.state.img=response.data.avater;
    sessionStorage.setItem('username',this.state.username)
    sessionStorage.setItem('nickname', this.state.nickname)
     sessionStorage.setItem('avater', this.state.img)
     sessionStorage.setItem('password', this.state.password)
 //console.log(response.data);

})
.catch(function (error) {
    console.log(error);
});
    
  }
  },
  modules: {
  }
})
