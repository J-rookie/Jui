
<template>

</template>

<script type="text/javascript">
	 import './toast.scss';
	 export default {
	 	data(){
	 		return {
	 			message:"",
	 			type:0,
	 			close:true,
	 			icon:0,
	 			shade:true,
	 			shadeClose:false,
	 			no:'',
	 			yes:'',
	 			timer:0,
	 		}
	 	},
	 	ready(){
	 		let that = this;
	 		if(that.timer){	
	          setTimeout(function(){
	            that.$destroy(true);
	          },that.timer)
	 		}
        },
	 	methods: {
	 		closeFn(){
	 			this.$destroy(true);
	 		},
	 		shadeCloseFn(){
	 			this.shadeClose ? this.$destroy(true) : '';
	 		},
	 		noFn(){
	 			typeof this.yes=="function" ? this.no():'';
	 			this.$destroy(true);
	 		},
	 		yesFn(){
	 			typeof this.yes=="function" ? this.yes():'';
	 			return this.$destroy(true);
	 			
	 		}
	 	}
	 }
</script>
