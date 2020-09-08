import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://dongdove.cn";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    which_name:"",
    show:false,
    m_queue:[],
    p_queue:[],
    onlines:[],
    collect:[],
    history:[],
    online:"danger",
    peopleonline:"danger",
    gz:"",
    username:"",
    password:"",
    nickname:"",
    mail:"",
    img:"",
    items:[],
    page:1,
    limit:20,
    fork:[]
  },
  mutations: {
    addshow(){
      this.state.show=true
      console.log(this.state.show)
    },
      talk(n){
        this.state.items=n
        
      },
      getNowFormatDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        var currentdate = year + '-' + month + '-' + strDate;
        return currentdate;
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
    change(e){
        this.state.online=e
    },
    getalk(){//获取吐槽列表
           
     return  axios({
          methods:'get',
          url:'/api/v1/spit'
        
      }).then((response)=>{
       
        //context.commit("talk",response.data.data.items)
         this.state.items=response.data.data.reverse();
          //this.reload()
         // console.log("hgagag",this.state.items)

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

 
      console.log("历史",JSON.stringify(response.data.history))
       this.state.username=response.data.username;
      this.state.nickname=response.data.nickname;
       this.state.password=response.data.password;
      this.state.img=response.data.avater;
      this.state.fork=response.data.fork;
      this.state.history=response.data.history;
      this.state.collect=response.data.collect
    sessionStorage.setItem('username',this.state.username)
    sessionStorage.setItem('nickname', this.state.nickname)
     sessionStorage.setItem('avater', this.state.img)
     sessionStorage.setItem('password', this.state.password)
     sessionStorage.setItem('history', JSON.stringify(this.state.history) )
     sessionStorage.setItem('collect',JSON.stringify( this.state.collect))
 
})
.catch(function (error) {
    console.log(error);
});
    
  },
 
  },
  modules: {
  }
})
