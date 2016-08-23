
<template>
<div class="cell-box">
    <juicell href="http://www.baidu.com"  title="跳去百度吧"></juicell>
    <juicell title="标题文字" value="副标题"></juicell>
    <juicell title="标题文字" value="有链接图标" link></juicell>
    <juicell title="标题文字" link>
        <span style="color: #419EFE">这里是自定义元素</span>
    </juicell>
    <juicell title="标题文字" value="前头自定义图片">
        <span class="icon"slot="icon"></span>
    </juicell>
</div>
<div class="cell-box">
     <juicell href="http://www.baidu.com"  title="单独一个"></juicell>
</div>
</template>
<style lang="sass">
.cell-box{
    margin:10px 0;
}
.icon{
    width:20px;
    height:20px;
    background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTdGOUJFMDY4RTMxMUU2QjNGOUNBQkMyRUIyQjE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTdGOUJFMTY4RTMxMUU2QjNGOUNBQkMyRUIyQjE3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5N0Y5QkRFNjhFMzExRTZCM0Y5Q0FCQzJFQjJCMTc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5N0Y5QkRGNjhFMzExRTZCM0Y5Q0FCQzJFQjJCMTc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mXDJyQAAA85JREFUeNrsmFlIFWEUx13SblauGUVQSVhZhBQlSbZRUSn5EPbS/tBGQpnRgrQQ2EYP1UOZLdqqPgSSGRklVEZl9ZDYXmoQlSluqBezdPp/9J/4mGbu3O4drrfowI/51jvnnjnLN+OrKIqPN4ufj5eL1yvYS9NfCQJ7WKdOcFbt+Gp8sBmE9LCCLSDUyIKq1IBGDysWDqLMHrEqO8AjD1pTWC0OXHJWQSFHQJKHFLwG8lyN4ixwAbTpzLWCHFDNvqJxkzOg3cBip6mY22nmCVgOhoBT0vhdMII3iqIisSCZ88PBURANHkr7TvK3VoPPpncXUSzRrPyUxaCY7SLNmlTQDiLYL+S6PGlNBcdy2B8E7NyrrgkEX7iumPdUqMOv+zljQeGHk6X+MZAOGkAAmMfxCmmN2k4B/qAWbOJeVVaAgVY8Yj868GBpLJtXMWZjW/ZRtd1f2pctzY8Gh6wsdcLHburkqW9SW7ZGsNT+rtkj/LbE2RTmjIJdYA0DoEYzV89IFjJTGp8oRXm9Zk8VGAX2W6XgYUZvl86csM4Jtqcy2c6gAmqK0tv3FWSAc396WNCTAqaZRBAD+tHpbzGZi6ozAcwC08Aw7isFO8EAsJWKR9A/X4Cr4CCDxeU00wneKcbyCcSDILAK2EAoWMexBNDgYP9r0OYozZhZMIBO3Q3ugXJaIAxMAZNoyVgmbCEdfOxjwQ0QBB6QJlpRWHscGGnFIxayEFzRGRc3WgA+6sxVU9F8ViOt7AJ7rEoz1Qbjrbx5p8HB8zmoM9j71pUTtZHcAbmgkjU3mFG7RBx6wVPwTLNnPKPfDi6yHtvpHnEMPHMxCZIO8MGBkzeC+cAfLGJ9DQdJ/L0U1mAjqTKrxWYW7E0fmw5ms2yFMfmWMkc28R1iKUhlcKwH25lGxMF3M0jgUV6sfw+K6SKX3X3E4jFu4dFJTzKpXDddQC1/B8BLUAQ2GuwtsSJI0sAyB2koje3roIyHVDWo0g32iRPOXjDXCgWFlc+Dx8xhsohH3pft+7x2S2klSuf3YvgHMqw8zdTSig0O1jRJbUfrxGNfq3PKcUtBcTx/JfXn8FonHQb6SPM2aV6VZI3v7bNKwTJGnCqJfD20sazd5rhctqKl9xb1/SRf+mM+jPAWKxQskHxR+E0hiGTtFUoel8qh8NExIJ5juazFWbyKiN7A5G5n320FQxhxVbwGSulHVJChnIukf5UzSt+wVldK7y02piuxbxsDyu23Ok+IS5VE5LfdHv704XQlyeyhj0e/yV/3+S3NSz5gGlrw/zfqf07BHwIMAHzhCABjPe3fAAAAAElFTkSuQmCC" ) no-repeat center;
    background-size:cover;
    background-color:#419EFE;
    margin-right: 5px;
}
</style>
<script>
    import Vue from 'vue'; 
    import cell from '../../src/CssComponentes/cell';  
    //es6
    export default {
        components: {
            juicell:cell,
        },
        methods:{
            back(){
                alert("你点击了返回")
            }
        }
    }

</script>