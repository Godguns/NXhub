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
     <b-button class="fabiao" size="sm" href="#" variant="primary">Go </b-button>
    <b-card-text>
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
     margin-top: 5px;
   height: 100vh;
     border-radius: 0 !important;
    
    
 }
 .side{
      width: 280px;
       height: 100vh;
       margin-left: -100%;
        position: relative;
        right: 290px;
 }
 .fabiao{
   /* margin-left:140px ;
   margin-top: -10px; */
     width: 70px;
     height: 30px;
     
 }

</style>