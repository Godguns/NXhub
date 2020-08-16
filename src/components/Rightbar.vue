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
     width: 20vw;
     height: 100vh;
 }
 .card{
     width: 20vw;
    color: black;
     padding: 16px;
     margin-top: 20px;
 }
 .card2{
      width: 20vw;
    color: white;
     padding: 16px;
     margin-top: 20px;
 }
</style>