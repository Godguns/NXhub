<template>
    <div class="home">
          <div class="img">
              <el-image
             
              lazy
            style="width: 184px; height: 184px"
            :src="list.imgsrc"
           
            
            fit="cover"></el-image>
          </div>
           
            <div class="title">
                
               <div style="display:flex;">
                    <el-image
                    lazy
                    style=" border-radius:50%;width: 24px; height: 24px;display:inline-block;"
                    :src="list.avater"
                    fit="cover">
                     </el-image>
                      <span style="font-size:14px; line-height:24px;">{{list.author}}</span>
                    
               </div>
               <p style="color:#409EFF; line-height:24px;">#{{list.info}}</p>
               

            </div>

    </div>
</template>
<script>
export default {
    props:['list'],
    data(){
        return {
           
        }
    },
    methods:{
  
    }
}
</script>
<style scoped>
.home{
    width: 184px;
    height: 238px;
    margin-bottom: 10px;
    border-radius: 14px;
    overflow: hidden;
   
}
.img{
    transition: .3s;
}
.img:hover{
    transform: scale(.98);
}
.home:hover{
    border: none;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 2px;
}
.title{
  display: flex;
}
    p{
        margin-left: 10px;
       display: inline;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 24px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.88);
    overflow: hidden;
    text-decoration: none;
    transition: color 0.2s ease 0s;
    }
</style>