
<template>
	<div class="jui-toast" :class="position" transition="expand">
		<span class="text" v-if="type==0">{{message}}</span>
		<div class="info" v-if="type!=0">
			<img class="icon" v-if="imgSrc" :src="imgSrc">
			<span class="info-text" v-if="type!=2">{{message}}</span>
		</div>		
	</div>
</template>

<script type="text/javascript">
	 import './toast.scss';
	 export default {
	 	data(){
	 		return {
	 			message:"哈哈哈",
	 			type:0,
	 			position:'center',
	 			time:0,
	 			imgSrc:false,
	 		}
	 	},
	 	ready(){
	 		var self = this;
	 		if(self.time!=0){
	 			setTimeout(function(){
 					self.$destroy(true)
 				},self.time)
	 		}
	 	}
	 }
</script>
