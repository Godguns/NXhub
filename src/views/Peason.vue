<template>
    <div class="home">
        <!-- <NXnav class="nxnav"></NXnav> -->
        
         <b-spinner v-show="show" variant="success" style="width: 3rem; height: 3rem; margin-top:20px;" label="Large Spinner" type="grow"></b-spinner>
          <div>
<div class="nav">
    <el-tabs class="navc" v-model="activeName" >
    <el-tab-pane class="navcc1" label="个人信息" name="first">
      
       <!-- <el-divider content-position="left" style="color:rgb(218,242,207)">个性标签</el-divider>
               <el-tag
                    :key="index"
                    v-for="(tag,index) in dynamicTags"
                    closable
                    :type="type[index]"
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                  >
                  </el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button> -->
                   <div id="main" ref="chart" style=" height:250px;"></div>
       <el-divider content-position="left" style="color:rgb(218,242,207)">全部动态</el-divider>
            <el-timeline class="timelinecontent" >
             
            <el-timeline-item class="timeline"
              v-for="(activity, index) in list"
              :key="index"
               color="rgb(218,242,207)"
              :timestamp="activity.time">
                                <div>
                        <b-card  no-body class="overflow-hidden" style="background-size:cover; margin-top:30px;max-height:300px">
                          <b-row no-gutters>
                            <b-col md="6">
                              <b-card-img  v-if="activity.img" :src="activity.img" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="6">
                              <b-card-body >
                                <b-card-text>
                                 {{activity.content}}
                                </b-card-text>
                              </b-card-body>
                            </b-col>
                          </b-row>
                        </b-card>
                      </div>
             
            </el-timeline-item>
          </el-timeline>
          <hr style="clear:both">
    </el-tab-pane>
    <el-tab-pane class="navcc1" label="我的收藏" name="second">
        <el-divider content-position="left">全部收藏</el-divider>

             <div class="pbl">
            <b-card-group class="group"  columns>
                
                <b-card
                v-for="(item,index) in collect" :key="index"
                img-width="300px"
                class="card"
                @click="goinfo(item)"
                :img-src="item"
                img-alt="Image"
                 overlay
                >
             
                </b-card>
                

               
            
                
            </b-card-group>
            </div>
          
           
            
    </el-tab-pane>
      <el-tab-pane class="navcc1" label="我的发布" name="third">
        <el-divider content-position="left">全部</el-divider>

             <div class="pbl">
            <b-card-group class="group"  columns>
                
                <b-card
                v-for="(item,index) in history" :key="index"
                img-width="300px"
                class="card"
                @click="goinfo2(item)"
                :img-src="item"
                img-alt="Image"
                 overlay
                >
             
                </b-card>
                

               
            
                
            </b-card-group>
            </div>
          
           
            
    </el-tab-pane>
    
  </el-tabs>
</div>

  
<div class="content">
      <div class="peason">
      <el-upload
      :on-progress="onprograss"
        class="avatar-uploader"
        action="http://upload-z2.qiniup.com"
        :show-file-list="false"
        :on-success="handleSuccess"
        :data="{token: token}"
        >
          <!-- <button  class="edit">编辑头像_</button> -->
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
             <el-tooltip class="item" effect="dark" content="编辑头像" placement="bottom-end">
       <el-image
       class="avater"
      
      :src="avater"
      fit="scale-down"></el-image></el-tooltip>
      </el-upload>
   
      <div class="avater2">😂</div>
      <h3>{{this.$store.state.username}}<br><h4>{{this.$store.state.username}}</h4></h3>
      <el-tooltip content="关注" placement="right-start">
        <!-- <el-button type="danger" class="focus" @click="addfork" icon="el-icon-plus" circle></el-button> -->
      </el-tooltip>
        <div class="msg">
          <ul>
            <li>one:xxx</li>
            <li>two:xxxx</li>
            <li> <i class="el-icon-edit"></i></li>
            
          </ul>
       
            
        </div>
         <el-divider content-position="left">我的关注</el-divider>
             <div class="gzitem">
      <el-image
      v-for="(i,index) in forkimg " :key=index
      class="gzimg"
      style="  width: 45px; height: 45px;border-radius:50%"
      :src="i"
      @click="gopeople(forks[index])"
      fit="cover"></el-image>
    
 
    </div>
  

       
  </div>
  <div class="wz"><h1></h1></div>
</div>

</div>

    </div>
</template>
<style  scoped>
#main{
  background-color: white;
  margin-bottom: 30px;
 
}
.pbl{
  height: 70vh;
  transform: scale(.7);
  margin-top: -90px;
}
.gzitem :hover{
transform: scale(1.2);
transition: .8s;
}
.gzimg{
  margin:5px;
}
.focus{
    position: absolute;
  top: 170px;
  left: 230px;
}
.gzitem{
  display: flex;
  justify-content: flex-start;
}
.boxcard{
  display: flex;
  flex-direction: row;
 
}
.home{
  min-height: 100vh;
}
.timeline{
  text-align: left;
  display: block;
  transform: scale(.9);
}
.timelinecontent{
  height: 400px;
  overflow: scroll;
}
.navc{
  margin-left: 30vw;
  width: 70vw;
  
}
.tip{
  margin-left: 10px;
}
.navcc1{
 overflow: scroll;
  margin-right: 10vw;
}
.avaterpl{
   width: 38px;
        height: 38px;
        border-radius: 50%;
        margin-top: 10px;
}

.content{
  display: flex;
  
  width: 100%;
  height: 100%;
}
.msg{
  margin-top: 10px;
  display: flex;
  list-style: none;
 
}
 .msg ul{
   margin-top: 10px;
  display: flex;
  padding:0 !important;
  list-style: none;
}
hr{
  width: 286px;
}
/* li{
 margin:0 30px;
  font-size: 10px;
  font-weight: 500;
} */
.avater{
  width: 280px;
  height: 280px;
  border-radius: 50%;
  position: relative;
  top: -47px;
  border: 1px solid #ccc;
}
.avater2{
  position: absolute;
display: none;
}
h4{
  color: #666;
}
h3{
  text-align: left;
  position: absolute;
  top: 240px;
}
.edit{
  border: 1px #7f8c8d solid;
  width: 280px;
  height: 35px !important;
  background-color: white;
  font-size: 5px;
  margin-top:40px ;
  outline: none;
  border-radius: 5px;
  

}
.home{
    width: 100vw;
    background-color: white;
}
.peason{
 
  
  top: 20px;
  left: 70px;
  position: relative;
  width: 280px;
  height: 539px;
 
}
   
   .nav{
       display: flex;
       justify-content: center;
       width: 100vw;
     
       top: 60px;
      font-weight: 600 !important;
       height: 65px;
      line-height: 60px;
       padding-bottom: 10px;
       /* border-bottom: 1px solid #ccc; */
   }
   .navc ::after{
     display: none !important;
    
   }
   .nav{
     border-bottom: 1px solid #ccc;
   }
 
   
    
 .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  
</style>
<script>



export default {
    components:{
       
  
       

    },
    data(){
       return{
         cdata:"",
          type:['primary','success','warning','danger','info','primary','success','warning','danger','info','primary','success','warning','danger','info'],
         forks:[],
         history:JSON.parse(sessionStorage.getItem('history')),
         collect:JSON.parse(sessionStorage.getItem('collect')),
         show:false,
         forkimg:[],
         username:sessionStorage.getItem('username'),
         password:sessionStorage.getItem('password'),
          activeName: 'first',
           token:"",
           imageUrl:"",
           list:[],
          dynamicTags: [],
        inputVisible: false,
        inputValue: '',
            avater:sessionStorage.getItem('avater')
       } 
    },
  
    mounted(){

      console.log("这是个人收藏",this.collect)
        this.$axios({
            method:'get',
            url:'/api/v1/file/token'
        }).then(response=>{
         
            this.token=response.data.token;
             sessionStorage.setItem('token',this.token)
            console.log("七牛云token",response)
        });
        this.$axios({
          method:'get',
          url:'/api/peason?username='+sessionStorage.getItem('username'),

        }).then(response=>{
          this.list=response.data.data.reverse()
          console.log(response)
        })
    },
    created(){
       this.$emit('header',true);
       this.$store.dispatch('getuserinfo')
       //this.getuserfork()
       this.$nextTick(function () {
            this.draw();
        });
       
    },
    beforeMount(){
       this.getuserfork()
        this.$axios({
        url:'get_tags',
        method:'get',
        params:{
          tags:this.dynamicTags,
          username:sessionStorage.getItem('username')
        }
      }).then(response=>{
       this.dynamicTags.push(...response.data.tags)
      })
    },
    beforeDestroy(){
     
      this.$axios({
        url:'set_tags',
        method:'get',
        params:{
          tags:this.dynamicTags,
          username:sessionStorage.getItem('username')
        }
      }).then(response=>{
       // alert(response.data)
       console.log(response.data)
      })
    },
    methods:{
      getVirtulData(year) {
    year = year || '2017';
    var date = +this.$echarts.number.parseDate(year + '-01-01');
    var end = +this.$echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            this.$echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
},
      draw(){
        this.cdata= [
          ['2016-03-20', 7000],['2016-05-02', 7000],['2016-01-02', 7000], ['2016-03-02', 7000], ['2016-07-02', 7000]];
         let myChart = this.$echarts.init(this.$refs.chart);
      let   option = {
    backgroundColor: '#fff',
   pointSize: 1,
    title: {
        top: 30,
        text: '本年度贡献量',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#111'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
       show:"none"
    },
    calendar: [{
       dayLabel: {
        nameMap: 'cn'
    },
        top: 100,
        left: 'center',
        range: ['2016-01-01', '2016-8-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                width: .5,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: ' ',
            textStyle: {
                color: '#ccc'
            }
        },
        itemStyle: {
          
            color: '#fff',
            borderWidth: .5,
            borderColor: '#ccc'
        }
    },],
    series: [
    
       
        {
          
           
            name: ' 12月',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: this.cdata.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
              width:'1',
                color: '#42b983',
                shadowBlur: 15,
                
                shadowColor: '#fff'
            },
            zlevel: 1
        }
    ]
};
myChart.setOption(option);
      },
       handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
        
      },
          goinfo2(e){
        
        this.$axios({
          method:'get',
          url:'/toinfopic',
          params:{
            img:e
          }
        }).then(response=>{
          console.log(response.data.data)
            sessionStorage.setItem('imgsrc',e)
          this.$router.push({path:`/picinfo/${response.data.data}`})
        
        })
      },
      goinfo(e){
        
        this.$axios({
          method:'get',
          url:'/toinfopic',
          params:{
            img:e
          }
        }).then(response=>{
          console.log(response.data.data)
            sessionStorage.setItem('imgsrc',e)
          this.$router.push({path:`/picinfo/${response.data.data}`})
        
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
      onprograss(){
        this.show=true;
        
      },
            getuserfork(){
          this.$axios({
            method:'get',
            url:'/getuserforks',
            params:{
              username:sessionStorage.getItem('username')
            }
          }).then((response)=>{
           
            for (var n of response.data.forks) {
              console.log(n.avater)
              this.forks.push(n.username)
              this.forkimg.push(n.avater)
            }

          })
        },
      addfork(){
        console.log("这里是添加关注方法哟")
      },
   handleSuccess(res) {
                this.$message({
                   message: '正在保存..',
                    type: 'warning'
                });
     this.imageUrl = 'http://dongdove.cn/'+res.hash
     console.log(this.imageUrl)
     this.$axios({
       method:'get',
       url:'/api/v1/auth/change_info?username='+this.username+'&password='+this.password+'&avater='+this.imageUrl,
      
     }).then( async (res)=>{
       await    this.$message({
                   message: '保存成功',
                    type: 'success'
                });
      await this.$store.dispatch('getuserinfo')
       console.log(res)
        this.$router.replace({path:'/blank'})
     })
    },
    }
}
</script>