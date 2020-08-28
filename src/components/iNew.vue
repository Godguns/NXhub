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
                            <el-image fit="cover"   class="avaterinfo" :src="item.avater" alt=""></el-image>
                            <h4>{{item.username}}</h4>
                            
                        </div>
                        
                        
                       <div class="itemtitle" slot="reference">
                        <el-image fit="cover" @click="gopeason(item.username)" class="avater" :src="item.avater" alt=""></el-image>
                            <p>{{item.username}}</p>
                       </div> 
                        
                 </el-popover>
                       
                      
                        
            </div>
           
  
             <b-card class="card"  img-alt="Card image" img-top>
                 
                <b-card-text  v-if="!item.img" class="text">
                    
                   {{item.content}}
                 </b-card-text>
                             <div class="imgitem"  v-if="item.img">
                                <b-card no-body class="overflow-hidden" style=" margin-left:20px; background-size:cover;  margin-top:6px;max-height:400px">
                                    <b-row  class="itembody" no-gutters>
                                    
                                    <b-col class="md6" md="6">
                                        <b-card-img :src="item.img" id="rounded-0"></b-card-img>
                                         
                                    </b-col>
                                        <b-col md="6">
                                        <b-card-body >
                                        <b-card-text class="itemtext">
                                            {{item.content}}
                                        </b-card-text>
                                        </b-card-body>
                                    </b-col>
                                    </b-row>
                                </b-card>
                                </div>
                 
                     <div class="action">
                          <span class="time">{{item.time}}</span>
                            <i @click="star(item.id)" class="el-icon-star-on">{{item.thump_up }}</i>
                            <i class="el-icon-share">{{item.visits}}</i>
                            <i class="el-icon-chat-dot-square">{{item.share}}</i>
                            </div>
                             
                     
                 
             </b-card>
               
                  
                 
              
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

.itemtext{
      position: relative;
  left: 70px;
     font-weight: 350;
    margin-bottom: 0;
    color:#606266 ;
    text-align: left;
    font-size: 14px;
}
#rounded-0{
  border-radius: 5px;

}
.text{
 margin-left: 30px;
    font-weight: 350;
    margin-bottom: 0;
    color:#606266 ;
    text-align: left;
    font-size: 15px;
   
    
}
.new{
   margin-left: -30px;
    
    
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
      color: hotpink;
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
    
  color: hotpink; 
  
  
}
.itemtitle{
    display: flex;
    line-height: 25px;
}
.itemtitle p{
   margin-top: 5px;
}
    .item{
        margin-top: 20px;
        display: flex;
        width: 100%;
    }
    .avater{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-top: 10px;
          border: solid .5px #ccc !important;

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
       margin-left: 55px;
       box-sizing: border-box;
       transform: scale(.95);
       
         padding: 5px !important;
        border:none;
    }
   
    .card-body{
       margin-left: -20px;
         padding: 0px !important;
    }
    .avaterinfo{
        border: solid 1px black !important;
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
            srcList:[],
            picshow:true,
           activeNames:['1']
        }
    },
    mounted(){
       
        console.log(this.imglist)

    },methods:{
        star(e){
            this.$axios({
                method:'post',
                url:'/api/v1/spit/thump_up?id='+e,

            }).then(()=>{
                alert("成功！")
            })
        },
        gopeason(e){
           
            if(e!==sessionStorage.getItem('username')){
                 this.$router.push({path:`/people/${e}`})
            }else{
                 this.$router.push({path:`/peason`})
            }
        }
    }
}
</script>