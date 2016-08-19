
<template>
<div class="search">
    <div class="input" @click="iSearch"><a class="btn"></a></div>
</div>
<div class="search s1">
    <div class="input" @click="iSearch1">{{value}}<a class="btn"></a></div>
</div>
</template>
<style lang="sass">
 .search{
  padding:10px;
  background-color:#419EFE;
  .input{
    background-color: #fff;
    line-height:30px;
    height:30px;
    border-radius: 4px;
    position: relative;
    .btn{
        width:30px;
        height:30px;
        position: absolute;
        right:0;
        top:0;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDA3OEQzMDY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDA3OEQzMTY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMDc4RDJFNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEMDc4RDJGNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EBCwsgAAA7RJREFUeNrsml1IFUEUx69fGfpg3xpJKKWYoJUPhQgWZhD0WGBQUGoUUlRQBBX0ki8F9pD1EBQlRURR9GUhSlGQZJqmFBRYPWRmmlmEZWre/gfOwmWYve7u3bsfOQd+6IzOnv3vzJ6dc3ZjgrDAFLLYwBQzJVgJVoKVYCVYCVaClWDHLD6CsbQlbQF3QSt4A4bAMJgLMkEhKAHrQIIXBMdY2EuPg4ughkUasVSwHRwAM/wk+CWoAB0W/dHM14IyP9zDdbxEOyLwNwA2gX3gr5dn+Cyo4vtWZrmgCCzgizjAq+E5+KMzZis4D+IcVRyc3B6AOLouAvFgJ2gLM7YfHAdzJOOJw0GHbTLBvWCW5ESzQacJPyR8veQ4tMKavCR4s+QkC8CgBV/joFJyvBww6gXBr0GscHJpoCcCfyS6RCK6zinB4aL0GTAh9J3mwGTVKEBdAElCf60XHks3hHY+2GCDz4WgUuhrA+/cFPwWfBH6Km30WyHpe+im4FZJX6mNfpeBeUJfh5uCxdlNBEts9r1YaPe4Kfib0J5JuzKbfacJ7e9uChZTueEo+B4V2tPdFJwqtH+CQZt9vxfas90UnCPpa7bR75Akl851U/AKybK+ZqPfq5JNTZHb6SGVZRpC2tN4VjIj9DkG8vhZrxlVQfr4aeDaTqtCEmT2hMmJjVqNIJZsC/gahThhKh8eA1mSjX51BHv3Rs6jxWMmh/xeCtrdSg/v6CTuR8GESV+3QZLO8UQS+MKOOy2YrFznpFaBVwaT/ypO9gMmKQTddgo2UtP6xbXlFp0YsAZsBCvBfI7uWk2rHlwHvyVjaaMxYuCuSwYnwQ6nalpkP0CxhRnSIwM8MjmGSkR9TixpzUbALotLMyAEpV4+Zr7JsVQMvOmUYM2awXILQtPBOSHYPRUitFG28apzRHCQT7oelIGUMCeWyDN6OUyh7gUX8qzcFo+jEbSMvGuiHVg36A9JJzN5R2Vk90RB7SDX0YImN077wTGjuzQ7BNtpjaAcfDI5juptl/inbe+WnLC1oMvCy7YuTnhOSJIST89wqF0BuzmVNGPF/OIvw2+CyT5yEtNkclwKuAVW+01wgIPYKXBIZ8emZ1QV/SAW/f3wjQcVD/dysb7AxDh6Ytz3etAKZ1QCegaOBIx/m/LZz4K1amo1eAIWGfj/bL8L1ow+veicJIPK40zuvxCspY30KcY9kC78bSnfv/F+jNJGi/oN/BjL4vw9zo/PYUerlkqwEqwEK8FKsBLssP0TYABLJxQEyLBIfgAAAABJRU5ErkJggg==');
        background-size:100% 100%;
        background-color:#419EFE;
    }
  }
  &.s1{
    background-color:#000;
    .btn{
        background-color:#000;
    }
  }
}   
</style>
<script>
    import Vue from 'vue'; 
    import search from '../../src/components/search/index';
    //es6
    export default {
         data () {
            return {
                value:'',
            }
        },
        methods:{
            iSearch:function(){
                search();
            },
            iSearch1:function(){
                var self=this;
                search({
                    request:function(val,that){
                        self.value = val;
                        that.$destroy(true);
                    }
                });
            }
        }
    }

</script>