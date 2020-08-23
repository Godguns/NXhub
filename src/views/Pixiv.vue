<template>
    <div class="home">
        <NXnav></NXnav>
     <div class="pbl">
            <b-card-group columns>
                
                <b-card
                img-width="300px"
                class="card"
               
                img-src="http://dongdove.cn/76868418_p0.jpg"
                img-alt="Image"
                img-top
                >
                 <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>
                <b-card  img-width="300px"  class="card"  img-src="http://dongdove.cn/FgzyzNMOJz-UUYYDP-gLnJwCsqP3" img-alt="Image" img-top>
                </b-card>
                <b-card img-src="http://dongdove.cn/76868418_p0.jpg" img-width="300px"  class="card">
              
                <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>

                <b-card img-width="300px"  class="card" img-src="http://dongdove.cn/peko2.jpg" img-alt="Image" overlay> <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template></b-card>

                <b-card img-width="300px"  class="card" img-src="http://dongdove.cn/2.jpg" img-alt="Image" img-top>
              
                <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>
            <b-card
                img-width="300px"
                class="card"
               
                img-src="http://dongdove.cn/1.png"
                img-alt="Image"
                img-top
                >
                 <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>
                <b-card  img-width="300px"  class="card"  img-src="http://dongdove.cn/82473173_p0_master1200.jpg" img-alt="Image" img-top>
                 <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>
                <b-card img-width="300px" img-src="http://dongdove.cn/81750293_p0_master1200.jpg" class="card">
              
                <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>

                <b-card img-width="300px"  class="card" img-src="http://dongdove.cn/4.jpg" img-alt="Image" overlay></b-card>

                <b-card img-width="300px"  class="card" img-src="http://dongdove.cn/57561242_p0_master1200.jpg" img-alt="Image" img-top>
              
                <template v-slot:footer>
                    <small class="text-muted">Footer Text</small>
                </template>
                </b-card>
            </b-card-group>
            </div>
    </div>
</template>
<style  scoped>
.pbl{
    width: 1000px;
    margin:0 auto;
}
.card{
    width: 300px;
}
.home{
   
}
</style>
<script>
import NXnav from '@/components/NXnav'
export default {
    components:{
        NXnav

    }
        
    
}
</script>