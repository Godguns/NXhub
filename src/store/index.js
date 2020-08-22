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
        
      }
  },
  actions: {
    getalk(){//获取吐槽列表
           
     return  axios({
          methods:'get',
          url:'/api/v1/spit?page='+this.state.page+'&limit='+this.state.limit,
        
      }).then((response)=>{
        console.log("hgagag"+response)
        //context.commit("talk",response.data.data.items)
         this.state.items=response.data.data.items;
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
