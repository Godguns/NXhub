<template>
    <div @click="refrash" class="home">
        
        
        <div class="content1">
           
               <el-image  :preview-src-list="imglist"  class="left" fit="scale-down" :src="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
             
            <msgbar  :name="this.img" class="col"></msgbar>
            
            
        </div>
          
        <div class="articletk">
             
               <div class="heart">
                
                    
                </div> 

        </div>
         <div class="info">
                  <ul>
                    <li><h6>Pixiv每日推荐    <el-button style="transform:scale(.8)" :type="color" @click="tocollect" round>{{iscollect}}</el-button></h6><span style="color:#F56C6C;">{{title}}   {{info}}   <el-tag  >{{tags[0]}}</el-tag>
                      <el-tag class="tag" v-if="tags[1]" type="success">{{tags[1]}}</el-tag>
                      <el-tag class="tag" v-if="tags[2]" type="info">{{tags[2]}}</el-tag></span></li>
                   
                    <!-- <li><span style="color:#F56C6C;">{{title}}   {{info}}   <el-tag  >{{tags[0]}}</el-tag>
                      <el-tag class="tag" v-if="tags[1]" type="success">{{tags[1]}}</el-tag>
                      <el-tag class="tag" v-if="tags[2]" type="info">{{tags[2]}}</el-tag></span></li> -->
                    <!-- <li><span style="color:#409EFF;">{{info}}</span></li> -->
                    <!-- <li>
                      <el-tag  >{{tags[0]}}</el-tag>
                      <el-tag class="tag" v-if="tags[1]" type="success">{{tags[1]}}</el-tag>
                      <el-tag class="tag" v-if="tags[2]" type="info">{{tags[2]}}</el-tag>
                    </li> -->
                  </ul>
          </div>
            <el-divider  content-position="left">最新评论</el-divider>
          <br>
          <Talklist :talks=talks></Talklist>

            <div class="plbar">
               <el-divider style="width:70vw;" content-position="left">添加评论</el-divider>
        </div>
          <div class="fabu" @click="show">
            <i class="el-icon-edit"></i>写评论
          </div>
          <el-dialog
              title="添加评论"
              :visible.sync="dialogVisible"
              width="30%"
             >
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addtalk()">确 定</el-button>
              </span>
            </el-dialog>
           
    </div>
</template>
<style  scoped>

.fabu{
  display: flex;
  justify-content: flex-start;
  color: #ccc;
  margin-left: 5vw;
  margin-top: 10px;
  margin-bottom: -20px;
  cursor: pointer;
}
.tag{
  margin-left: 10px;
}
ul{
  width: 80vw;
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

import Talklist from "@/components/Talklist"

export default {
  
  components:{
   
    msgbar,
    Talklist,
    

  },
  data(){
    return {
     
       table: false,
      dialog: false,
      loading: false,
  
      /////
      dialogVisible:false,
      color:"danger",
      iscollect:"+收藏",
      imglist:[],
      img:"",
      title:"",
      tags:[],
      info:"",
      text:"",
      id:"",
      talks:[],
      one:true
    }
  },
  methods:{
    refrash(){
    
    },
     handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(() => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    //++++++++++++++++++++++++++++++++++
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
    },
    show(){
      this.dialogVisible=true;
    },
    gettalk(){
      this.$axios({
        url:'/get_talklist',
        method:'get',
        params:{
          _id:this.id
        }
      }).then(response=>{
        console.log("获取结果",response)
        this.talks=response.data.data
      })
    },
    addtalk(){
      this.dialogVisible=false;
        this.$axios({
          url:'/addtalk',
          method:'get',
          params:{
            imgsrc:this.img,
            username:sessionStorage.getItem('username'),
            avater:sessionStorage.getItem('avater'),
            content:this.text,
            time:this.getNowFormatDate(),
            reback:[]

          }
        }).then(response=>{
           this.$message({
          message: '添加评论成功',
          type: 'success'
        });
        this.gettalk()
          console.log("添加成功"+response.data.data)
        })
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

  },
  async  beforeMount(){
      this.$emit('header',true);
     
      await  this.$axios({
            url:'/getpics',
            method:'get',

        }).then((response)=>{
           var index=this.$route.params.id
          
                this.img=(response.data.data[index].imgsrc)
                this.imglist.push(this.img)
                this.title=response.data.data[index].title
                this.info=response.data.data[index].info
                this.tags=response.data.data[index].tag
                this.id=response.data.data[index]._id
            JSON.parse(sessionStorage.getItem('collect'))  .forEach((item)=>{
                if(item==this.img){
                   this.iscollect="已收藏"
                    this.color="success"
                    console.log("??")
                }
              })
           
        })
       await  this.gettalk()

        
    },
    

  
}
</script>