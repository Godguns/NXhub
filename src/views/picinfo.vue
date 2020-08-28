<template>
    <div class="home">
        <NXnav style="position:fixed;width:100vw; z-index:99;"></NXnav>
        <div class="content1">
           
               <el-image   class="left" fit="scale-down" :src="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
             
            <msgbar :name="this.img" class="col"></msgbar>
            
            
        </div>
        <div class="articletk">
             
               <div class="heart">
                
                    
                </div> 

        </div>
         <div class="info">
                  <ul>
                    <li><h6>Pixiv每日推荐    <el-button style="transform:scale(.8)" :type="color" @click="tocollect" round>{{iscollect}}</el-button></h6></li>
                   
                    <li><span style="color:#F56C6C;">{{title}}</span></li>
                    <li><span style="color:#409EFF;">{{info}}</span></li>
                    <li>
                      <el-tag  >{{tags[0]}}</el-tag>
                      <el-tag class="tag" v-if="tags[1]" type="success">{{tags[1]}}</el-tag>
                      <el-tag class="tag" v-if="tags[2]" type="info">{{tags[2]}}</el-tag>
                    </li>
                  </ul>
          </div>
          
    </div>
</template>
<style  scoped>
.tag{
  margin-left: 10px;
}
ul{
  list-style: none;
  text-align: left;
  margin-left: 2vw;
}

.heart{
  margin-right: 10px;
  margin-top: -40px;
}
.el-icon-star-off{
 font-size: 25px;
 color: #ccc;

}
.home{
  width: 100vw;
  background-color: white;
  
}
.articletk{
  margin-left: 5vw;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  width: 75vw;
 
}
.content1{
  
  display: flex;
}
.left{
  margin-top: 63px;
  /* border: 1px solid #ccc; */
  margin-left: 5vw;
  width: 75vw;
  height: 80vh;
  /* background: rgb(242, 245, 249); */

}
.col{
  background-color: white;
  margin-top:70px;
}
</style>
<script>
import msgbar from '../components/msgbar'
import NXnav from '../components/NXnav'
export default {
  components:{
    NXnav,
    msgbar

  },
  data(){
    return {
    
      color:"danger",
      iscollect:"+收藏",
      imglist:[],
      img:"",
      title:"",
      tags:[],
      info:""
    }
  },
  methods:{
    tocollect(){
      this.$axios({
        url:'/tocollect',
        method:'get',
        params:{
          username:sessionStorage.getItem('username'),
         img: this.img
        }
      }).then(response=>{
        if(response.data.data=="OK"){
            this.iscollect="已收藏"
             this.$store.dispatch('getuserinfo')
             this.color="success"
        }

      })
    }

  },
    beforeMount(){
      this.$store.dispatch('getuserinfo')
        this.$axios({
            url:'/getpics',
            method:'get',

        }).then((response)=>{
           var index=this.$route.params.id
          
                this.img=(response.data.data[index].imgsrc)
                this.imglist.push(this.img)
                this.title=response.data.data[index].title
                this.info=response.data.data[index].info
                this.tags=response.data.data[index].tag
            JSON.parse(sessionStorage.getItem('collect'))  .forEach((item)=>{
                if(item==this.img){
                   this.iscollect="已收藏"
                    this.color="success"
                    console.log("??")
                }
              })
           
        })

        
    }
  
}
</script>