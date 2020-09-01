<template>
    <div class="home">
        <div style="background: transparent; border-radius:10px; background:url('http://tva2.sinaimg.cn/large/006BFMdqly1gi17nb5nooj315o0th7wh.jpg')">
                    <!-- <el-card shadow="hover"  class="box-card">
                <div slot="header"   class="clearfix">
                      <el-image
                        style="border-radius:50%; border:1px solid #ccc; width: 52px; height: 52px"
                        :src="avater"
                        fit="cover"></el-image>
                    <span >{{username}}</span>
                 
                </div>
                <ul class="list">
                    <li>粉丝 {{fans}}</li>
                    <li>关注{{gz}} </li>
                    <li>收藏 --</li>
                </ul>
        </el-card> -->
                   <b-card
  class="card2"
  style=" background: transparent; border-radius:10px;"
    overlay
    img-src="http://tva2.sinaimg.cn/large/006BFMdqly1gi17nb5nooj315o0th7wh.jpg"
    img-alt="Card Image"
    text-variant="white"
  >
  <div  class="title2">
       <el-image
                        @click="gopeople(username)"
                        style="border-radius:50%; border:1px solid #ccc; width: 52px; height: 52px"
                        :src="avater"
                        fit="cover"></el-image>
                    <span >{{username}}</span>
  </div>
    <ul class="list">
                    <li>粉丝 {{fans}}</li>
                    <li>关注{{gz}} </li>
                    <li>收藏 --</li>
                </ul>
      
  </b-card>
               <!-- <b-card
  class="card2"
    overlay
    img-src="http://tva2.sinaimg.cn/large/006BFMdqly1gi0u1zrhr6j30jt0rsaqn.jpg"
    img-alt="Card Image"
    text-variant="white"
    
    
  >
    <b-card-text class="info2">
        Animex动漫站<br>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card> -->
        </div>
         <el-divider content-position="left">他的相关推荐</el-divider>
        <div class="others1">

            <el-image v-for="(item,index) in history" :key="index"
                        style="  width: 84px; height: 84px"
                        :src="item"
                        @click="goinfo(item)"
                        fit="cover"></el-image>
           
        </div>


    </div>
</template>
<style  scoped>
.card-img{
    border-radius: 15px;
    border:none;
    background: transparent;
}
.info2{
    margin-top: 50px;
    color: black;
}
.title2{
    display: flex;
    justify-content: center;
}
.header{
    position: relative;
}
.home{
    margin-top: 10px;
}
.others1{
    width: 256px;
   
   margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
}
.list{
    margin-top: 30px;
    padding-left: 0;
    display: flex;
    list-style: none;
    justify-content: center ;
}
.list li{
    margin:0 10px;
}

.clearfix{
  
    display: flex;
    flex-direction: row;
    
}
.addfork p{
    font-size: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
 span{
     margin-left: 30px;
     line-height: 52px;
     display: block;
 }
 .addfork{
     position: absolute;
     width: 12px;
     height: 12px;
     top: 50px;
     left: 75px;
     transform: scale(.8);

 }
 .card-body{
    
 }
</style>
<script>

export default {
    components:{
       
    },
    props:['name'],
    data(){
        return {
            history:JSON.parse(sessionStorage.getItem('history')),
            fans:sessionStorage.getItem('fans')===[]?0:sessionStorage.getItem('fans'),
      gz: sessionStorage.getItem('gz')===[]?0:sessionStorage.getItem('gz'),
            username:sessionStorage.getItem('username'),
            avater:sessionStorage.getItem('avater'),
            imglist:[1,2,3,4,5,6]
        }
    },
    mounted(){
       
       this.$axios({
           method:'get',
           url:'/usermsg',
           params:{
               img:sessionStorage.getItem('imgsrc')
           }
       }).then(response=>{
          this.history=response.data.data.history;
          this.avater=response.data.data.avater;
          this.username=response.data.data.username;
            this.gz=response.data.data.fork.length;
            this.fans=response.data.data.fans.length
       })
    },
    methods:{
           goinfo(e){
        
        this.$axios({
          method:'get',
          url:'/toinfopic',
          params:{
            img:e
          }
        }).then(response=>{
          console.log(response.data.data)
          this.$router.push({path:`/picinfo/${response.data.data}`})
           location.reload()
        
        })
      },
         gopeople(e){
        console.log(e)
        if(e==sessionStorage.getItem('username')){
          this.$router.push({path:'/peason'})
        }else{
          this.$router.push({
          path:`/people/${e}`
        })
        location.reload()
        }
      },
    }
}
</script>