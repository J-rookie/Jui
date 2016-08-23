<template>
	<header :class="{'Jui-header':true,'Jui-header-fixed':fixed}" :style="{'backgroundColor':color}">
		<div class="Jui-header-left">
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
		height: 40px;
   		line-height:40px;
		.Jui-header-left{
			flex:1;
			text-align: left;
		}
		.Jui-header-right{
			flex:1;
			text-align: right;
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
		  }
	}
	
</script>