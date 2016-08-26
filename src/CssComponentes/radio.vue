<template>
	<div class="Jui-radiolist">
		<jui-cell v-for="option in options" :title="option.label||option.value||option">
			<input type="radio" slot="icon" class="Jui-radio-core" :value="option.value||option" :disabled="option.disabled" v-model="value">
		</jui-cell>
	</div>
</template>
<style lang="sass">
	.Jui-radiolist .Jui-cell{
		padding: 0;
	}
	.Jui-radiolist .Jui-cell-title{
		padding: 16px 10px;
	}
	.Jui-radio-core{
		border: none;
	    -webkit-appearance: none;
	    background: none;
	    outline: 0;
	}
	.Jui-radio-core{
		width:20px;
		height:20px;
		border-radius: 20px;
		background-color:#fff;
		margin-right:5px;
		border:1px solid #ccc;
		position: relative;
	}
	.Jui-radio-core:after{
		content:'\20';
		width: 8px;
		height:8px;
		border-radius: 10px;
		position: absolute;
		top:5px;
		left:5px;
	}
	.Jui-radio-core:checked {
    	background-color: #26a2ff;
    	border-color: #26a2ff;
	}
	.Jui-radio-core:checked:after{
		background-color:#fff;
	}
	.Jui-radio-core:disabled{
		background-color: #d9d9d9;
    	border-color: #ccc;
	}
</style>
<script>
	import cell from '../../src/CssComponentes/cell';  
	export default {
		name:'jui-radio',
		props: {
			options:{
				type: Array,
      			required: true
  			},
		    title: String,
		    value: String,
		  },
		components: {
            juiCell:cell,
        },
	}
	
</script>