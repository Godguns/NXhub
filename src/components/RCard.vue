<template>
    <div class="card" >

 <b-card
   
  class="card2"
    overlay
   
    img-weight="392px"
    :img-src="list.master_img"
    img-alt="Card Image"
    text-variant="white"
    
    
  >
    <b-card-text class="info2">
        <h3>{{list.Album_info}}</h3><br>
     {{list.Album_time}}
    </b-card-text>
    
  </b-card>
    </div>
</template>
<style  scoped>
.card{
   
   display: flex;
    height: 289px;
    width: 392px !important;
    overflow-y: hidden;
    overflow-x: hidden;
    border: none;
    border-radius: 5px;
   margin-right: 10px;
     background: rgb(243, 246, 249);
}
.card-body{
     border-radius: 15px !important;
}
    .card2{
        background-size:cover;
        border-radius: 15px !important;
      
    
     
        border: none;
        position: relative;
        width: 392px;
        height: 288px;
        overflow: hidden;
    }
   
    .card2::before{
       
        content: "";
    z-index: 1;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.15);
    }
   
    .info2{
        position: absolute;
        z-index: 99;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>
<script>
export default {
    props:['list'],
    mounted(){
        console.log(this.list)
    }
}
</script>