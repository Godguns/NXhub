<template>
<div >
    <div class="new" v-for="(item,i) in imglist" :key="i">
            <div  class="item">
                <img class="avater" :src="item" alt="">
                <div><p>Godguns</p></div>
                <span>2020-08-16</span>
                <p>发表观点</p>
                
            </div>
           
              <!-- <b-card no-body class="overflow-hidden"  style="max-width: 100%;height:100%">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="item" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card> -->
             <b-card class="card"  img-alt="Card image" img-top>
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.<br>
                    This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.
                 </b-card-text>
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
    .item{
        margin-top: 10px;
        display: flex;
        width: 100%;
    }
    .avater{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    p{
        margin-left: 10px;
        line-height: 32px;
    }
    span{
        margin-left: 20px;
        line-height: 32px;
        color: rgb(162, 167, 175);
    }
    .card{
      
       margin-left: 35px;
        width: 95%;
        box-shadow: .5;
    }
   
</style>
<script>
export default {
    props:['imglist'],
    data(){
        return{
           
        }
    },
    mounted(){
        console.log(this.imglist)
    }
}
</script>