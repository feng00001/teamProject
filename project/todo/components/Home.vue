<template>
  <div>
  	<transition name="fade" mode="out-in">
  		<router-view></router-view>
  	</transition>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'


export default {
  methods: {
    
  }
}
</script>
<style type="text/css">
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>
