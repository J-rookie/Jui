<template>
	<div class="Jui-switch">
		<input type="checkbox" class="Jui-switch-core" v-model="value">
        <label class="mint-switch-label">
            <slot></slot>
        </label>
	</div>
</template>
<style lang="sass">
.Jui-switch{
    display: inline-block;
}
.Jui-switch-core{
	width: 54px;
    height: 30px;
    position: relative;
    z-index: 2;
    border: 0;
    background: 0 0;
    -webkit-appearance: none;
    outline: 0;
    border: 1px solid #dfdfdf;
    border-radius: 16px;
	&:checked:before{
    -webkit-box-shadow: #419EFE 0 0 0 16px inset;
    box-shadow: #419EFE 0 0 0 16px inset;
    background-color: #419EFE;
    transition: border .4s,box-shadow .4s,background-color 1.2s;
    -webkit-transition: border .4s,-webkit-box-shadow .4s,background-color 1.2s;
    background-color: #419EFE;
	}
	&:before{
	content: '';
   	width: 54px;
    height: 30px;
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
		left:24px;
	}
	&:after{
	content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
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
		name: 'jui-switch',
		props: {
		    value: Boolean,
		  }
	}	
</script>