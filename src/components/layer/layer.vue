
<template>
	<div class="jui-layer">
		<div class="jui-layer-mask" v-if="shade" @click="shadeCloseFn()">
			<div class="jui-layer-close" v-if="close" @click="closeFn"></div>
		</div>
		<div class="jui-layer-content">
			<div class="jui-layer-msg" v-if="type==0">
				<div class="layer-msg-con">{{message}}</div>
			</div>
			<div class="jui-layer-alert"  v-if="type==1">
				<div class="layer-alert-con">
					<p>{{message}}</p>
					<button @click="yesFn">确认</button>
				</div>
			</div>
			<div class="jui-layer-loading"  v-if="type==2">
					<div class="icon-1" v-if="icon==0">
				          <div></div>
				          <div></div>
				          <div></div>
				          <div></div>
				          <div></div>
				          <div></div>
				          <div></div>
				          <div></div>
					</div>
					<div class="icon-2" v-if="icon==1">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div class="icon-3" v-if="icon==2">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>					
					</div>
			</div>
			<div class="jui-layer-confirm"  v-if="type==3">
				<div class="layer-confirm-con">
					<p>{{{message}}}</p>
					<nav>
						<a @click="noFn">取消</a>
						<a @click="yesFn">确定</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	 import './layer.scss';
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
