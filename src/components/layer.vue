
<template>
	<div class="jui-layer">
		<div class="jui-layer-mask">
			<div class="jui-layer-close" v-if="close"></div>
			<div class="jui-layer-msg" v-if="type==0">
				<div class="jui-layer-msg-con">请等待。。。</div>
			</div>
			<div class="jui-layer-alert"  v-if="type==1">
				<div class="jui-layer-msg-con">
					<p></p>
					<button>确认</button>
				</div>
			</div>
			<div class="jui-layer-loading"  v-if="type==2"></div>
			<div class="jui-layer-confirm"  v-if="type==3"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	 export default {
	 	data(){
	 		return {
	 			type:1,
	 			close:false,
	 		}
	 	},
	 }
</script>

<style lang="sass">
	.jui-layer{
		position: relative;
		z-index: 19891014;
		*{
			box-sizing: border-box;
			-webkit-box-sizing:border-box;
			font-size:14px;
			line-height:1.5em;
		}
		.jui-layer-mask{
			position: fixed;
			top:0;
			left:0;
			width:100%;
			height: 100%;
			background-color:rgba(0,0,0,0.3);
			display: table;
		}
		.jui-layer-close{
			background-color:rgba(255,255,255,1);
			width:30px;
			height:30px;
			position: absolute;
			right:10px;
			top:10px;
			border-radius:30px;
			&:before,&:after{
				content:'\20';
				width: 1px;
				height:16px;
				position: absolute;
				top:7px;
				left:14px;
				background-color:#666;
				transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
			}
			&:after{
				transform: rotate(-45deg);
				-webkit-transform: rotate(-45deg);
			}
		}
		.jui-layer-msg{
			display: table-cell;
			text-align: center;
    		vertical-align: middle;
			.jui-layer-msg-con{
				background-color: #fff;
				color:#333;
				max-width: 80%;
				width: 210px;
				display: inline-table;
				border-radius: 4px;
				padding:10px;
			}
		}
	}
	
</style>