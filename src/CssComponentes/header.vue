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
				background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUU5NTdBMTY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUU5NTdBMjY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RTk1NzlGNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RTk1N0EwNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LCOx1wAAAP5JREFUeNrs1j0OAUEYxnGrITpBsXEAGyegQ0lBKH30buMKKgcgCjqJ1h1EQoRNfHQU45HsG5PNmv3I25CZ5Fft5J/d2Z3JGkKIGOeIx5iHDurgrwULkOEKlmABYzCVM9972UcFduIzRqr5frEa7KXYBqyowTqcpdga8n5P9O1CE2wptgIzwPJ4BttwkWJLyAaJeQW7cJdic0gHjbmDfVdsFjZGwQQM4eGEnjCBVNgYBYtwk+7sCLkoMQomue+QDFxrOI26hrIe51smHbhyfYekxblTSINzL8unzYHrtCFVzvOQlGHrbEflWhoh/r4sOIGtmmTo3zkd/MfgS4ABAG+sh5ILSHqlAAAAAElFTkSuQmCC") no-repeat center center;
			    width:44px;
			    height:44px;
			    margin-left:-10px;
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