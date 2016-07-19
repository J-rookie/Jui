
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
					<p>{{message}}</p>
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
	 		}
	 	},
	 	methods: {
	 		closeFn(){
	 			this.$remove();
	 		},
	 		shadeCloseFn(){
	 			if(this.shadeClose) return this.$remove();
	 		},
	 		noFn(){
	 			if(typeof this.no=="function") return this.yes();
	 			this.$remove();
	 		},
	 		yesFn(){
	 			if(typeof this.yes=="function") return this.yes();
	 			this.$remove();
	 		}
	 	}
	 }
</script>
