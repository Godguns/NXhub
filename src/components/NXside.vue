<template>
    <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
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
     
   
     border-radius: 0 !important;
     width: 280px;
     height: 100%;
 }
</style>