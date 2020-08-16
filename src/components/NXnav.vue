<template>
    <div>
  <b-navbar class="nxnav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NXhub</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>

        <b-nav-form  >
          <b-form-input size="sm"  class="mr-sm-2" placeholder="Search"></b-form-input>
         
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
   
          
       
             <b-nav-item-dropdown   no-caret right>
            <template v-slot:button-content>
                <b-icon  class="mb-2" style="color: #fff;" icon="plus"></b-icon>
     
            </template>
            
          
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
           <b-img class="avater" v-bind="mainProps" :src="avater" rounded="circle" ></b-img>
          </template>
          <b-dropdown-item href="#">个人主页</b-dropdown-item>
          <b-dropdown-item href="#">退出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style  scoped>
.ml-auto{
    line-height: 20px !important;
}
.add{
    font-size: 20px;
}
    .avater{
        width: 20px;
        height: 20px;
    }
    .nxnav{
        line-height: 1.5em;
        height: 53px !important;
        background-color: rgb(27, 31, 35) !important;
    }
    .mr-sm-2{
        margin-left: 50px;
        background-color: rgb(48, 52, 56);
        outline: none;
        border:none;
        width: 245px !important;
    }
     
</style>
<script>
  
export default {
    data(){
        return {
            avater:sessionStorage.getItem('avater')
        }
    },
    methods:{
       
    }
}
</script>