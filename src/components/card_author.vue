<template>
    <div class="home">
          <div class="img">
              <el-image
            style="border-radius:14px;width: 184px; height: 184px"
            :src="list"
            @click="bigshow(list)"
             :preview-src-list="alist"
            fit="cover"></el-image>
          </div>
            <div class="title">
               <!-- <div>
                    <el-image
                   
                    style=" border-radius:50%;width: 24px; height: 24px;display:inline-block;"
                    :src="avater"
                    fit="cover">
                     </el-image>
               </div>
               
                <p>Godguns</p> -->

            </div>

    </div>
</template>
<style  scoped>


.home{
    width: 184px;
    height: 238px;
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
<script>
export default {
    props:['list'],
    data(){
        return {
            alist:[ 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'],
            avater:sessionStorage.getItem('avater')
        }
    },
    methods:{
        bigshow(e){
            this.alist[0]=e;
        }
    }
}
</script>