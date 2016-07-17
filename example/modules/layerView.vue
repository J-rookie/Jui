
<template>
    <nav class="list">
        <a v-for="item in list">{{item.title}}</a>
      </nav>
    <Layer></Layer>
      
</template>
<style lang="sass">
 .list{
  background-color:#fff;
  color:#323232;
  a{
    display: block;
    line-height:30px;
  }
}
   
</style>
<script>
    import Layer from '../../src/components/layer.vue';
    //es6
    export default {
         components: {
          Layer
          // Button
          },
         data () {
            return {
                list:[
                {title:'message',link:'/layer'},
                {title:'alert',link:'/shuffling'},
                {title:'loading',link:'/shuffling'},
                {title:'confirm',link:'/shuffling'},
                ]
            }
        }
    }
</script>