
<template>
    <jui-header title="grids" back></jui-header>
    <div class="page-grids-box">
    <div class="page-grids-title">等分网格有边框</div>
        <jui-grids :options="options" :cols="2" border></jui-grids>
    </div>

    <div class="page-grids-box">
    <div class="page-grids-title">等分网格无边框</div>
        <jui-grids :options="options1" :cols="2"></jui-grids>
    </div>

    <div class="page-grids-box">
    <div class="page-grids-title">等分网格有图标有边框</div>
        <jui-grids :options="options2" :cols="3" border></jui-grids>
    </div>

    <div class="page-grids-box">
    <div class="page-grids-title">等分网格有图标无边框</div>
        <jui-grids :options="options2" :cols="3"></jui-grids>
    </div>
</template>

<style lang="sass">
.page-grids-box{
    padding:10px;
    .page-grids-title{
        color:#999;
        font-size:14px;
        padding:10px;
    }
}
</style>

<script> 
    //es6
    export default {
    	data() {
		    return {
		      options: ['一格','二格'], 
              options1: ['一格','二格','三格'],
              options2: [ 
                {title:'一格',image:'./example/temp/images/icon.jpg'},
                {title:'二格',image:'./example/temp/images/icon.jpg'},
                {title:'三格',image:'./example/temp/images/icon.jpg'},],
            }
		  },
    }

</script>                           