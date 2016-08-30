<template>
	<header :class="{'Jui-header':true,'Jui-header-fixed':fixed}" :style="{'backgroundColor':color}">
		<div class="Jui-header-left">
			<div class="Jui-arrow-left" @click="goback" v-if="back"></div>
			<slot name="left"></slot>
		</div>
		<div class="Jui-header-title">{{title}}</div>
		<div class="Jui-header-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<style lang="sass">
	.Jui-header{
		padding:0 10px;
		background-color:#419EFE;
		display:flex;
		font-size:16px;
		color:#fff;
		height: 44px;
   		line-height:44px;
   		box-sizing: border-box;
   		-webkit-box-sizing: border-box;
		.Jui-header-left{
			flex:1;
			text-align: left;
			display: flex;
			.Jui-arrow-left{
				position:relative;
				width:44px;
				margin-left:-10px;
				&:before,&:after{
					content:'\20';
					width: 3px;
					height:14px;
					background-color:#fff;
					position:absolute;
					top:11px;
					left:18px;
					transform: rotateZ(45deg);
				};
				&:after{
					top:19px;
					transform: rotateZ(-45deg);
				}
			}
		}
		.Jui-header-right{
			flex:1;
			text-align: right;
			display: flex;
			justify-content:flex-end;
		}
		.Jui-header-title{
			flex:2;
			text-align:center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&.Jui-header-fixed{
			position: fixed;
			top:0;
			left:0;
			z-index:10;
			width:100%;
		}
	}
</style>
<script>
	export default {
		name: 'jui-header',
		props: {
		    fixed: Boolean,
		    title: String,
		    color: String,
		    back:Boolean,
		  },
		methods:{
            goback(){
                window.history.go(-1);
            }
          }
	}
	
</script>