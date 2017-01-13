<template>
	<picker :data.sync="citytable.slot" :default.sync="citytable.default" :response.sync="citytable.response" :success="citytable.success" :style-class="styleClass"></picker>
</template>

<script type="text/javascript">
  	import picker from './picker.vue';
  	import Chinesecity from './chinesecity.js';
	export default {
    name:'jui-picker-city',
		props:['cityvalues','styleClass'],
         data () {
            return {
                citytable:{
                  slot:{
                    '0':{
                      values:Chinesecity.province,
                      value:"北京市",
                    },
                    '1':{
                      values:[],
                      value:'',
                    },
                    '2':{
                      values:[],
                      value:''
                    },
                    length:3,
                  },
                  default:"城市选择",
                  response:'',
                  success:function(data){
                  	data.value = data.value.replace(/-|请选择/g,'');
                  }
                }
            }
        },
        components: {
            picker:picker,
        },
        ready(){
          let self = this;
          let city = self.citytable.slot['0']; 
          let area = self.citytable.slot['1']; 
          if(this.cityvalues!= undefined){
            if(this.cityvalues.data != undefined){
            this.cityvalues.data = this.citytable.response;
            }      
            if(this.cityvalues.default != undefined){
            this.citytable.default = this.cityvalues.default;
           }
          }     
          city.reset = function(data){
            let ocity = self.citytable.slot['1'];
            ocity.values = Chinesecity.city[city.value];
            ocity.value = Chinesecity.city[city.value][0];
          }
          area.reset = function(data){
            let oarea = self.citytable.slot['2'];
              	if(Chinesecity.area[area.value] != undefined){
				oarea.values = Chinesecity.area[area.value];
            	oarea.value = Chinesecity.area[area.value][0];
              	}else{
              		oarea.values = [];
            		oarea.value = '';
              	}
          }
        },
    }
</script>