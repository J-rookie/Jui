<template>
	<div class="Jui-picker-slot" v-on:touchstart.prevent="_start($event)">
	<nav class="Jui-picker-options" :class="{duration:animation}" v-bind:style="{transform : sTransformY}">
		<a v-for="item in data.values" v-bind:class="{selected:selected==$index}">{{item}}</a>
	</nav>
	</div>
</template>

<script type="text/javascript">
	import "./picker-slot.scss";
	import _event from '../../lib/event';

	export default{
		props:['data'],
		data(){
			return {
                sTransformY:'translate3d(0px, 0px, 0px)',
                animation:true,
            	eventKey:{
            		startY:0,
            		moveY:0,
                    distance:0,
            		startT:0,
            		endT:0,
            	}
			}
		},
        computed:{
            selected(){
                return this.data.values.indexOf(this.data.value);
            },
            TransformY(){
                return -this.selected*40+80+this.eventKey.distance;
            }
        },
		watch:{
            TransformY(){
                this.sTransformY = 'translate3d(0px, '+this.TransformY+'px, 0px)';
            },
		},
        ready(){
            this.sTransformY = 'translate3d(0px, '+this.TransformY+'px, 0px)';
            if(this.data.reset){
                this.data.reset(this.data);
            };
        },
		methods:{
			_start(e){
                this.animation = false;
        		let self = this.eventKey;
				self.startY = e.touches[0].pageY;
				self.startT = new Date().getTime();
				_event._bind(e.target,'touchmove',this._move);
                _event._bind(e.target,'touchend',this._end);             
        	},
        	_move(e){
        		let self = this.eventKey;
				self.moveY = e.touches[0].pageY;
                self.distance = self.moveY - self.startY;		
        	},
            _end(e){
                this.animation = true;
                let self = this.eventKey;
                let transformValue = this.TransformY;
                let limitTop = 80;
                let limitBottom = -(this.data.values.length-1)*40+80;
                self.endT = new Date().getTime();
                let speed = self.endT - self.startT;

                if(transformValue-transformValue%40 >= limitTop){
                    transformValue = limitTop;
                }else if(transformValue-transformValue%40 < limitBottom){
                    transformValue = limitBottom;
                }else{
                    if(speed<300){
                        if(self.moveY-self.startY>0){                 
                            transformValue = transformValue-transformValue%40;             
                        }else{
                            transformValue-transformValue%40-40 < limitBottom?transformValue = limitBottom:transformValue = transformValue-transformValue%40-40;
                        }
                    }else{                     
                        if(Math.abs(transformValue%40)<=40/2){                          
                            transformValue = transformValue-transformValue%40;                  
                        }else{  
                            transformValue-transformValue%40 >= 0 ?transformValue = transformValue-transformValue%40+40:transformValue = transformValue-transformValue%40-40;
                        }
                    }
                }
                self.distance = 0;
                this.data.value =  this.data.values[Math.abs(transformValue/40-2)];

                _event._unbind(e.target,'touchmove',this._move);
                _event._unbind(e.target,'touchend',this._end);

                var that = this;
                setTimeout(function(){
                    that.animation = false;
                    if(that.data.reset){
                    that.data.reset(that.data);
                        }
                    },200)              
            },
		},
	}
</script>