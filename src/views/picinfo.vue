<template>
    <div class="home">
        <NXnav style="position:fixed;width:100vw; z-index:99;"></NXnav>
        <div class="content1">
           
               <el-image   :preview-src-list="imglist" class="left" fit="scale-down" src="http://dongdove.cn/FrwZuhQ9oC5GnHz2DpuEQerJVDYI">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
             
            <msgbar class="col"></msgbar>
            
            
        </div>
        <div class="articletk">
             
               <div class="heart">
                    <el-button type="danger" round>+收藏</el-button>
                    
                </div> 

        </div>
         <div class="info">
                  <ul>
                    <li><h6>Pixiv每日推荐</h6></li>
                    <li><span style="color:#F56C6C;">お誕生日おめでとう❣❣</span></li>
                    <li><span style="color:#409EFF;">Please follow me on these websites as well!Instagram→ https://www.instagram.com/kinokohime777</span></li>
                    <li>
                      <el-tag>#Fate/GrandOrder</el-tag>
                      <el-tag type="success">#マシュ・キリエライト</el-tag>
                      <el-tag type="info">#Fate/GO10000users入り</el-tag>
                    </li>
                  </ul>
              </div>
    </div>
</template>
<style  scoped>
ul{
  list-style: none;
  text-align: left;
  margin-left: 2vw;
}
.info{
  
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
  margin-top:60px;
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
      imglist:['http://dongdove.cn/FrwZuhQ9oC5GnHz2DpuEQerJVDYI']
    }
  }
  
}
</script>