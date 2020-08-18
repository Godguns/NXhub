<template>
<div >
    <div class="new" v-for="(item,i) in items" :key="i">
            <div  class="item">
                 <el-popover
                        class="info"
                        placement="left-end"
                        visible-arrow=true
                        :offset="30"
                       
                        width="400"
                        trigger="hover">
                        
                        <div class="peason">
                            <img   class="avaterinfo" :src="item.avatar" alt="">
                            <h4>{{item.username}}</h4>
                            
                        </div>
                        
                        
                       <div class="itemtitle" slot="reference">
                        <img   class="avater" :src="item.avatar" alt="">
                            <p>{{item.username}}</p>
                       </div> 
                        
                 </el-popover>
                       
                        <span class="time">{{item.published_time}}</span>
                        
            </div>
           
  
             <b-card class="card"  img-alt="Card image" img-top>
                <b-card-text class="text">
                    
                   {{item.content}}
                 </b-card-text>
                     <div class="action">
                            <i class="el-icon-star-on">{{item.visits}}</i>
                            <i class="el-icon-share">{{item.thump_up}}</i>
                            <i class="el-icon-chat-dot-square">{{item.share}}</i>
                            </div>
                            <el-collapse >
                            <el-collapse-item  name="1">
                                 <template slot="title"> <span>显示所有评论</span><i class="header-icon el-icon-info"></i></template>
                               <div class="pinlun">
                                <div><img   class="avater" src="peko.jpg" alt=""></div>
                                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                 
                               </div>
                                 <div class="pinlun">
                                <div><img   class="avater" src="tower.jpg" alt=""></div>
                                <div>说的好！牛逼牛逼</div>
                                 
                               </div>
                            </el-collapse-item>
                            </el-collapse>
                 
             </b-card>
               
                  
                 
              <hr>
    </div>

    
    </div>
</template>
<style  scoped>
@media screen and (max-width: 800px) {
    .new{
       display: none;
    }
     .item{
       display: none;
    }
}
.text{
    color:rgb(70, 77, 86) ;
    text-align: left;
    font-size: 10px;
}
.new{
   margin-left: -30px;
     overflow: hidden;
    
}
.action{
    
    display: flex;
   color: #a2a7af;
    justify-content:flex-end ;
   
}
.pinlun{
    display: flex;
    
}
.pinlun div{
    line-height: 42px;
}
.pinlun img{
    margin-top: 0;
    margin-right: 10px;
}
.peason{
    display: flex;
    justify-content: flex-start;
    
}
.peason h4{
    margin-left: 20px;
    line-height:60px ;
    color: black;
    font-size: 20px;
}
i{
     color: #a29bfe;
    cursor: pointer;
    margin: 10px;
}
i:hover{
    color: hotpink;
}
.zan{
    width: 40px;
    height: 30px;
}
.time{
    
   position: relative;
   left: 50%;
  
}
.itemtitle{
    display: flex;
    line-height: 25px;
}
.itemtitle p{
   margin-top: 5px;
}
    .item{
        margin-top: 0px;
        display: flex;
        width: 100%;
    }
    .avater{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-top: 10px;
    }
    p{  
        color: black;
        font-size: 13px;
        font-weight: 700;
        margin-left: 10px;
        line-height: 32px;
    }
    p:hover{
        color: rgb(17, 80, 206);
    }
    span{
        margin-left: 20px;
        font-size: 12px;
        line-height: 43px;
       
        color: rgb(162, 167, 175);
    }
    .card{
      margin-top: -20px;
       margin-left: 65px;
        width: 90%;
        box-shadow: .5;
       
    }
    .avaterinfo{
        border: solid 1px grey;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
 
   
</style>
<script>
export default {
    props:['imglist','items'],
    data(){
        return{
           
        }
    },
    mounted(){
        console.log(this.imglist)
    },methods:{
        
    }
}
</script>