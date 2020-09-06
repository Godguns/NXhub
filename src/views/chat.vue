<template>
   <div>
        <h1 @click="send">这是{{localname}}和{{username}}的聊天页面</h1>
        <h5 v-for="(item,index) in list" :key="index">{{item}}</h5>
   </div>
    
</template>
<script>
//import io from "socket.io-client"

  //let socket= io('http://localhost:4000')
export default {
  



    data(){
        return {
            username:this.$route.params.id,
            localname:sessionStorage.getItem('username'),
            list:[]
        }
    },
    beforeMount(){
    
     
    //   socket.on('connect',function(){
    //         socket.on('welcome',function(data){
    //             console.log(data)
    //             //this.send()
    //             var socketdata={
    //                 username:sessionStorage.getItem('username'),
    //                 avater:sessionStorage.getItem('avater'),
    //                 socket_id:socket.id
    //             }
    //               socket.emit('online',socketdata);
    //         })
         
    

    //   })
    },
    methods:{
        
    }

  



    
}
</script>