<template>
    <div class="side">
  <b-card
   
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
     <b-button class="fabiao" @click="open" size="sm" href="#" variant="primary">New
         
     </b-button>
    <b-card-text class="text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

   
  </b-card>
</div>
</template>
<style  scoped>
@media screen and (max-width: 600px) {
   .mb-2 {
         display: none;
    }
}
@media screen and (max-width: 800px) {
   .mb-2 {
         width: 30vw;
    }
}
 .mb-2{
       width: 330px;
     margin-top: 0px;
   height: 100vh;
 border-radius: 0 !important;
    
    
 }
 .side{
     
      width: 330px;
       height: 110vh;
       margin-left: -100%;
        position: relative;
        right:345px;
 }

 .fabiao{
   /* margin-left:140px ;
   margin-top: -10px; */
     width: 70px;
     height: 30px;
     
 }

</style>
<script>
export default {
    methods:{
       
      open() {
        this.$prompt('New', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          
          
        }).then(({ value }) => {
     
                      this.$axios({
                    method:'post',
                     url:'/api/v1/spit?content='+value,
                }).then((response)=>{
                    this.$message({
                        type: 'info',
                        message: 'action: ' + response
                    });
                })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
}
</script>