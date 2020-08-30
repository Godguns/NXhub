<template>
    <div class="home">
         <div >
            
        </div>
        <el-card v-for="(item,index) in talks" :key="index" class="card" shadow="never">
            <div class="usertitle">
                <el-image
                style="border:1px solid #ccc;border-radius:50%;width: 30px; height: 30px"
                :src="item.avater"
                fit="cover"></el-image>
                <h6>{{item.username}} <span style="color:#606266; font-size:3px;" >{{item.content}}</span></h6> 

            </div>
              <div class="time">
                    <p>{{item.time}}</p>
                     <div class="replay">
                    <i class="el-icon-chat-line-square"></i>
                     </div>
              </div>

              <!-- <div class="hf">
                  <div class="hfusertitle">
                <el-image
                style="border:1px solid #ccc;border-radius:50%;width: 30px; height: 30px"
                :src="item.avater"
                fit="cover"></el-image>
                <h6 >{{item.username}}<span style="color:#409EFF;"> @{{item.username}}</span> <span style="color:#606266; font-size:3px;" >{{item.content}} <span style="color:#ccc;">{{item.time}}</span></span></h6>   
            </div>
              </div> -->
             
               
        </el-card>
      
      
    </div>
</template>
<style  scoped>
.replay{
    margin-left: 10px;
    margin-top: -15px;
}
i{
    font-size: 1px;
   
    color: #ccc;
}
.hfusertitle{
  
   margin-top: -20px;
    display: flex;
    margin-left: -5vw;
    transform: scale(.8);
}
.home{
    /* height: 40vh; */
    
}
.card{
    border: none;
    margin-top: -30px;
   
}
.pinlun{
 
    margin-top: -10px;
    margin-left: 5vw;
    display: flex;
    justify-content: flex-start;
}
.time p:first-child{
    color: #ccc;
    font-size: 6px;
}
.time{
    line-height: 34px;
    width: 400px;
    font-size: 1px;
    margin-top: -20px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-left: 6vw;
}
h6{
    margin-left: 10px;
   font-size: 4px;
   font-weight: 500;
}
.usertitle{
     margin-left: 3vw;
    display: flex;
    
}
</style>
<script>
export default {
    props:[
        'talks'
    ],
    data(){
        return {
            avater:sessionStorage.getItem('avater')
        }
    }
}
</script>