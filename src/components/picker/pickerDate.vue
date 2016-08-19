<template>
	<picker :data.sync="datetime.slot" :default="datetime.default" :response.sync="datetime.response" :style-class="styleClass"></picker>
</template>

<script type="text/javascript">
  	import picker from './picker.vue';

	export default {
		props:['datevalues','styleClass'],
         data () {
            return {
                datetime:{
                  slot:{
                    '0':{
                      values:[],
                      value:1945,
                      reset:function(data){
                        data.values = [];
                        for(let i=data.value-25;i<data.value+25;i++){
                          data.values.push(i);
                        }
                      }
                    },
                    '1':{
                      values:[1,2,3,4,5,6,7,8,9,10,11,12],
                      value:1,
                      reset:'',
                    },
                    '2':{
                      values:[],
                      value:1
                    },
                    length:3,
                  },
                  default:"日期选择",
                  response:'',
                }
            }
        },
        components: {
            picker:picker,
        },
        ready(){
          var self = this;
          var Months = self.datetime.slot['1'];
          if(this.datevalues!= undefined){
            if(this.datevalues.data != undefined){
            this.datevalues.data = this.datetime.response;
            }      
            if(this.datevalues.default != undefined){
            this.datetime.default = this.datevalues.default;
           }
          } 
          Months.reset = function(data){
            let oDay = self.datetime.slot['2'];
            let oDayTotal = null;
            oDay.values = [];
            oDay.value = 1;
            switch(data.value){
                case 1:case 3:case 5:case 7:case 8:case 10:case 12:
                oDayTotal = 32;
                break;
                case 4:case 6:case 9:case 11:
                oDayTotal = 31;
                break;
                default:
                oDayTotal = 29;
                break;
            }
            for(let i=1;i<oDayTotal;i++){
              oDay.values.push(i);
            }
          }
        },
    }
</script>