
<template>
    <div class="page-header">   
    <jui-header title="header" fixed back></jui-header>

    <jui-header title="自定义颜色及自带返回" back color="#f18a2f"></jui-header>
    <div class="page-header-interval"></div>

    <jui-header title="这是一个很长很长的标题这是一个很长很长的标题"></jui-header>
    <div class="page-header-interval"></div>
    
    <jui-header title="完整版自定义背景颜色" color="#f6194d">
        <div slot="left" @click="back"><span>返回</span></div>
        <div slot="right" @click="next"><span>下一步</span></div>
    </jui-header>
    <div class="page-header-interval"></div>   
    
    <jui-header title="自带返回及自定义左侧" back>
        <div slot="left" @click="back" class="btn-box1"><span>返回</span></div>
    </jui-header>
    <div class="page-header-interval"></div>

    <jui-header title="自定义左侧" color="#51c448">
        <div slot="left" @click="back" class="btn-box"><div class="left-btn"></div><span>(⊙o⊙)</span></div>
    </jui-header>
    <div class="page-header-interval"></div>

    <jui-header title="只有右侧">
        <div slot="right" @click="back"><span>返回</span></div>
    </jui-header>
    </div>
</template>
<style lang="sass">
.page-header{
    padding-top:60px;
    .page-header-interval{
        height:10px;
    }
}
.btn-box{
    overflow:hidden;
}
.btn-box1{
    margin-left:-10px;
}
.left-btn{
    background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUU5NTdBMTY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUU5NTdBMjY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RTk1NzlGNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RTk1N0EwNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LCOx1wAAAP5JREFUeNrs1j0OAUEYxnGrITpBsXEAGyegQ0lBKH30buMKKgcgCjqJ1h1EQoRNfHQU45HsG5PNmv3I25CZ5Fft5J/d2Z3JGkKIGOeIx5iHDurgrwULkOEKlmABYzCVM9972UcFduIzRqr5frEa7KXYBqyowTqcpdga8n5P9O1CE2wptgIzwPJ4BttwkWJLyAaJeQW7cJdic0gHjbmDfVdsFjZGwQQM4eGEnjCBVNgYBYtwk+7sCLkoMQomue+QDFxrOI26hrIe51smHbhyfYekxblTSINzL8unzYHrtCFVzvOQlGHrbEflWhoh/r4sOIGtmmTo3zkd/MfgS4ABAG+sh5ILSHqlAAAAAElFTkSuQmCC") no-repeat center;
    width:20px;
    height:44px;
    float: left;
}
</style>
<script> 
    //es6
    export default {
         data () {
            return {
                list:[
                {title:'文字提示'},
                {title:'图文提示'},
                {title:'图片提示'},
                ],
                position:["top","center","bottom"]
            }
        },
        methods:{
            back(){
                alert("你点击了整个左部")
            },
            next(){
                alert("你点击了下一步")
            }
        }
    }

</script>