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
.info{
     color: black;
}
.info2{
    color: white;
}
 .rightbar{
     width: 320px;
     height: 100vh;
 }
 .card{
     width: 285px;
    color: black;
     padding: 16px;
     margin-top: 20px;
 }
 .card2{
      width: 285px;
    color: white;
     padding: 16px;
     margin-top: 20px;
 }
</style>