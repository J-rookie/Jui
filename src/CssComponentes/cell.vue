<template>
	<a class="Jui-cell">
		<div class="Jui-cell-title">
			<slot name="icon"></slot>
			<slot name="title">
				<span v-text="title"></span>
			</slot>
		</div>
		<div class="Jui-cell-value">
			<slot>
				<span v-text="value"></span>
			</slot>
		</div>
		<div v-if="link" class="Jui-cell-allow-right"></div>
	</a>
</template>
<style lang="sass">
.Jui-cell{
	position: relative;
	display: flex;
	padding: 16px 10px;
	text-decoration: none;
	.Jui-cell-title{
		flex:1;
		text-align: left;
		color:#333;
		display: flex;
	}
	.Jui-cell-value{
		flex:1;
		text-align: right;
		color:#999;
	}
	.Jui-cell-allow-right{
		margin-left: 5px;
		width:10px;
		height:20px;
		align-items: center;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzA2ODgxNTY4REYxMUU2QTA1MEI1QzQ1RTZDQ0JEQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzA2ODgxNjY4REYxMUU2QTA1MEI1QzQ1RTZDQ0JEQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzMDY4ODEzNjhERjExRTZBMDUwQjVDNDVFNkNDQkRCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzMDY4ODE0NjhERjExRTZBMDUwQjVDNDVFNkNDQkRCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7Y2RGAAAAYZJREFUeNrsll0rRFEUhucgIf4RJSkkTArJxTTRFCkR+SiuiJQSkaZxQc3cUESIUpJfhMj4ON5da+r0tuucvc4oxa6nptX0zHvmrL329nzfT5RzVSTKvP6gsCqbzf5owkqQB4PqhPS5APrAgPxYPk7CQ5GVkh6AVBzhESjS4++DtFZ4IglZmgMj2pdyBnpJar5jWiGj7cMLkARvgZoH9sCotrGvQA94JekOGNfulGtJ+kLSLTCh3Xo3oNsi3QRT2r18CzpJatYGmNEOhzvQAZ6pvg7mtNPmXqRPVF8FC9rx9SDSR6qvgCXtPPSF0GkTZTWCS9BA9UWw7CpsElk91efBmut/2Cy7h2WzQVnUhC3gHNRRfVp60akPWy0y80ImbbKwhG0yI2tJZvbxtutbbhdZDcnMpNl1nTZm355aZGNhMlvCLnAMqkmWkaPAaWInLbIvOU9yUZs1mLCfZJ9gWI5T1amXkoQlWdpVxgnf5QpSlIOqEPcqYtYHGIpzWfL+r8S/T/gtwACYhFQ0/BvjsQAAAABJRU5ErkJggg==") no-repeat center center;
		background-size:cover;
	}
	&:after{
		content: '\20';
		height:1px;
		width:98%;
		position: absolute;
		background-color: #ccc;
		bottom:0;
		right:0;
		-webkit-transform-origin: 50% 100%;
		transform-origin: 50% 100%;
	}
	&:nth-of-type(1):before{
		content: '\20';
		height:1px;
		width:100%;
		position: absolute;
		background-color: #ccc;
		top:0;
		right:0;
		-webkit-transform-origin: 50% 100%;
		transform-origin: 50% 100%;
	}
	&:nth-last-of-type(1):after{
		width:100%;
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