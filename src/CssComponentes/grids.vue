<template>
	<nav :class="{'Jui-grids':true,'Jui-grids-nb':!border}">
		<a class="Jui-grid" v-for="item in options" :style="{width:gridcols}" :href="item.links" @click="succes($index)">
			<div class="Jui-grid-img" v-if="item.image">
				<img :src="item.image">
			</div>
			<div class="Jui-grid-title">{{item.title||item}}</div>
		</a>
	</nav>
</template>
<style lang="sass">
	.Jui-grids{
		position: relative;
		overflow: hidden;
		&:before{
		content: '\20';
	    width: 100%;
	    height: 1px;
		position: absolute;
		left: 0;
		top: 0;
	    border-top: 1px solid #d9d9d9;
	    transform-origin: 0 0;
	    -webkit-transform: scaleY(.5);
	    -ms-transform: scaleY(.5);
	    transform: scaleY(.5);
		};
		&:after{
		content: '\20';
	    width: 1px;
	    height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	    border-left: 1px solid #d9d9d9;
	    transform-origin: 0 0;
	    -webkit-transform: scaleX(.5);
	    -ms-transform: scaleX(.5);
	    transform: scaleX(.5);
		};
		.Jui-grid{
		outline:0;
		text-decoration: none;
		float: left;
		position: relative;
		overflow: hidden;
		padding: 10px;
		box-sizing: border-box;
		&:before{
		content: '\20';
	    width: 100%;
	    height: 1px;
		position: absolute;
		left: 0;
		bottom: 0;
	    border-bottom: 1px solid #d9d9d9;
	    transform-origin: 0 0;
	    -webkit-transform: scaleY(.5);
	    -ms-transform: scaleY(.5);
	    transform: scaleY(.5);
		};
		&:after{
		content: '\20';
	    width: 1px;
	    height: 100%;
		position: absolute;
		right: -1px;
		bottom: 0;
	    transform-origin: 0 0;
	    border-right: 1px solid #d9d9d9;
	    -webkit-transform: scaleX(.5);
	    -ms-transform: scaleX(.5);
	    transform: scaleX(.5);
		};
		}
		.Jui-grid-img{
			img{
				display: block;
				margin: auto;
				height: 40px;
			}
		}
		.Jui-grid-title{
			width: 100%;
			text-overflow: ellipsis;
			overflow: hidden;
			text-align: center;
			font-size: 14px;
			color: #999;
		}
		&.Jui-grids-nb{
			&:before,&:after,*:before,*:after{
				display:none;
			}
		}
	}
</style>
<script>
	export default {
		name: 'jui-grids',
		props: {
		    grids: Array,
		    cols:Number,
		    options: Array,
		    border:Boolean,
		  },
		computed:{
			gridcols(){
				return 100/this.cols+"%"
			}
		},
		methods:{
			succes(index){
				if(this.options[index].succes){
					this.options[index].succes();
				}	
			}
		}
	}
	
</script>