<template>
  <div>
<<<<<<< HEAD
  	<router-view></router-view>

=======
  	<transition name="fade" mode="out-in">
  		<router-view></router-view>
  	</transition>
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex'


export default {
  methods: {
    
  }
}
</script>
<<<<<<< HEAD
=======
<style type="text/css">
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>
>>>>>>> 1c985563f97d8fd530de84d6a95610afde16e8aa
