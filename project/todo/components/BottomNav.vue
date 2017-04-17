<template>
  <div class="bottom-nav">
    <ul id="bottom">
    	<router-link to="/shopList" tag="li" active-class="special">HomePage</router-link>
    	<router-link to="/classify" tag="li" active-class="special">Classify</router-link>
    	<router-link to="/cart" tag="li" active-class="special">Cart</router-link>
    	<router-link to="/myself" tag="li" active-class="special">Mine</router-link>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'bottom-nav',
  methods: {
    
  }
}
</script>


<style scoped>

  #bottom .special {
    background: red;
  }
  #bottom {
  position: fixed;
  bottom:0;
  left:0;
  list-style: none;
  height:1.2rem;
  display: flex;
  width:100%;
  border-top:0.01rem solid #ccc;
  background: white;
  z-index: 1000
}
#bottom li{
  flex:1;
  line-height: 1.2rem;
  font-size: 16px;
  text-align: center
}
#bottom li a{
  text-decoration:none;
}
</style>