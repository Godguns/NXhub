<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="102"
      img-height="80"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide

        caption="First slide"
       
        img-src="tower.jpg"
      >
         <b-jumbotron class="ad" header="NXhub" lead="Bootstrap v4 Components for Vue.js 2">
    <p>NXhub是一个社交项目</p>
       <hr class="my-4">
    <b-button variant="primary" href="#">更多</b-button>
  </b-jumbotron>
      
      </b-carousel-slide>

      <!-- Slides with custom text -->
  

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="280"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->

    </b-carousel>

 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style  scoped>
#carousel-1{
    height: 76vh !important;
    overflow: hidden;
    background-size: contain;
}


</style>