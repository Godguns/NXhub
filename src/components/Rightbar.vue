<template>
<div class="rightbar">
        <div>
  <b-card
  class="card"
    overlay
    img-src="http://www.acgjc.com/wp-content/uploads/2020/08/c4ca4238a0b923820dcc509a6f75849b-10-500x500.jpg"
    img-alt="Card Image"
    text-variant="white"
    
    
  >
    <b-card-text class="info">
       友情链接<br>
     ACG漫音社
    </b-card-text>
  </b-card>

    <b-card
  class="card2"
    overlay
    img-src="https://acg.blue/wp-content/uploads/2018/11/9358d109b3de9c820165076e6081800a18d843cb.jpg"
    img-alt="Card Image"
    text-variant="white"
    
    
  >
    <b-card-text class="info2">
        ACG宅<br>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
    </div>
</div>
</template>
<style  scoped>
@media screen and (max-width: 800px) {
   .card {
         display: none;
    }
    .card2 {
         display: none;
    }
}
.info{
  margin-top: 100px;
     color: white;
     font-weight: 600;
}
.info2{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
}
 .rightbar{
     width: 250px;
      height: 100vh;
    position: relative;
    right: 20px;
    top: 20px;
      margin-right: -280px; 
 }
 .card{
   padding: 0 !important;
  
     width: 250px;
    color: black;
     padding: 16px;
     margin-top: 0px;
 }
 .card-body{
    padding: 0 !important;
 }
 .card2{
   position: relative;
      width: 250px;
    color: white;
   
      
      background-clip: border-box;
     margin-top: 10px;
 }
</style>