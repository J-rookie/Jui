<template>
	<div class="Jui-switch">
		<input type="checkbox" class="Jui-switch-core">
	</div>
</template>
<style lang="sass">
.Jui-switch-core{
	width: 60px;
    height: 30px;
    position: relative;
    z-index: 2;
    border: 0;
    background: 0 0;
    -webkit-appearance: none;
    outline: 0;
	&:checked:before{
    -webkit-box-shadow: #62cc56 0 0 0 16px inset;
    box-shadow: #62cc56 0 0 0 16px inset;
    background-color: #62cc56;
    transition: border .4s,box-shadow .4s,background-color 1.2s;
    -webkit-transition: border .4s,-webkit-box-shadow .4s,background-color 1.2s;
    background-color: #62cc56;
	}
	&:before{
	content: '';
   	width: 60px;
    height: 30px;
    border: 1px solid #dfdfdf;
    background-color: #a0a0a0;
    border-radius:30px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    border-color: #dfdfdf;
    -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    -webkit-transition: border .4s,-webkit-box-shadow .4s;
    transition: border .4s,box-shadow .4s;
    -webkit-background-clip: content-box;
    background-clip: content-box;
	}
	&:checked:after{
		left:32px;
	}
	&:after{
	content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 1px;
    left: 0px;
    border-radius: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.4);
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    -webkit-transition: left .2s;
    transition: left .2s;	
	}
}
</style>
<script>
	export default {
		name:'juicell',
		props: {
			link: Boolean,
		    title: String,
		    value: String,
		  }
	}	
</script>