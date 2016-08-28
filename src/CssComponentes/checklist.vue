<template>
	<div :class="{'Jui-checklist':true,'Jui-checklist-limit':this.max == this.value.length}">
		<jui-cell v-for="option in options" :title="option.label||option.value||option">
			<input type="checkbox" slot="icon" class="Jui-checklist-core" :value="option.value||option" :disabled="option.disabled" v-model="value">
		</jui-cell>
	</div>
</template>
<style lang="sass">
	.Jui-checklist .Jui-cell{
		padding: 0;
	}
	.Jui-checklist .Jui-cell-title{
		padding: 16px 10px;
	}
	.Jui-checklist-core{
		border: none;
	    -webkit-appearance: none;
	    background: none;
	    outline: 0;
	}
	.Jui-checklist-core{
		width:20px;
		height:20px;
		border-radius: 20px;
		background-color:#fff;
		margin-right:5px;
		border:1px solid #ccc;
		position: relative;
	}
	.Jui-checklist-limit .Jui-checklist-core:checked,.Jui-checklist-core:checked {
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkQ3MjUxMjZCNUUxMUU2QTIzQkU1Q0MzODE1QTQzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkQ3MjUxMzZCNUUxMUU2QTIzQkU1Q0MzODE1QTQzRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRDcyNTEwNkI1RTExRTZBMjNCRTVDQzM4MTVBNDNEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRDcyNTExNkI1RTExRTZBMjNCRTVDQzM4MTVBNDNEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wc/+ggAAAUNJREFUeNpi/P//P8NgBkwMgxyMOnDUgaMOHHXgqANHHTj0HJgOxFeA2J4o1aDGAh1xOhD/+w8BV4jRQ88QTAbi6UDMCOXPG0whmADEf/8jQC2xeunhuFgg/oPkuAZS9NPacRFojmsh1QxiFfIBcTkQK5NgeCia4zrJ8SSxCrdCLXkCxCpEqA8C4l9IjusjNxZIdSAIPAZiJTxq/YH4J5L6CZQkE2IV8gPxKSRLHwKxAhZ1XmiOmwLEjPRwIAgLAPFZJMvvAbEskrwHmuNmUuo4cnKxEBCfR3LEHSCWAWI3IP6GJD6HGo4jt5gRBeKLSI65D8RfkfjzgZiJWkUVuRpFoXUpOlgExMzULEsp0SwOxNeQHLec2o4DYUYKhz4kgXglEN+CNqP+UruFwTg6NjPqwFEHjjpw1IGjDhx14IACgAADABN7amALQa/nAAAAAElFTkSuQmCC") no-repeat center center;
		background-size:20px 20px;
    	background-color: #26a2ff;
    	border-color: #26a2ff;
	}
	.Jui-checklist-limit .Jui-checklist-core{
		background-color: #d9d9d9;
    	border-color: #ccc;
	}
</style>
<script>
	import cell from '../../src/CssComponentes/cell';  
	export default {
		name:'jui-checklist',
		props: {
			options:{
				type: Array,
      			required: true
  			},
		    title: String,
		    value: Array,
		    max:Number,
		  },
		components: {
            juiCell:cell,
        },
        computed:{
        	limit() {
		      return this.max < this.value.length;
		    }
        },
        watch:{
        	value(){
        		if(this.limit){
        			this.value.pop();
        		}
        	}
        }
	}
	
</script>