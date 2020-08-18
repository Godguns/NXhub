<template>
<div class="rightbar">
        <div>
  <b-card
  class="card"
    overlay
    img-src="peko.jpg"
    img-alt="Card Image"
    text-variant="white"
    
    sub-title="Subtitle"
  >
    <b-card-text class="info">
        Image Overlay<br>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>

    <b-card
  class="card2"
    overlay
    img-src="tower.jpg"
    img-alt="Card Image"
    text-variant="white"
    
    
  >
    <b-card-text class="info2">
        Image Overlay<br>
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
     color: black;
}
.info2{
    color: white;
}
 .rightbar{
     width: 250px;
      height: 100vh;
    position: relative;
    right: 20px;
    top: 30px;
      margin-right: -280px; 
 }
 .card{
     width: 250px;
    color: black;
     padding: 16px;
     margin-top: 0px;
 }
 .card2{
      width: 250px;
    color: white;
   
      background-color: rgb(29, 30, 32);
      background-clip: border-box;
     margin-top: 10px;
 }
</style>