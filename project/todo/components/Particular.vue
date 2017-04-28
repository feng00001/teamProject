<template>
  <div class="particular">
    <img :src="$store.state.testImg[15]"/>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'

export default {
  name: 'particular',
  methods: {
    
  }
}
</script>


<style scoped>
 .particular{
 	height: 100%;
 	width: 7.5rem;
 }
 img{
 	width: 100%;
 	height: 100%;
 }
</style>