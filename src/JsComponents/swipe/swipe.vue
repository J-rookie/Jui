<template>
	<div class="Jui-swipe-container" v-el:juiswipe>
		<nav class="swipe-wrapper" :class="{duration:animation}" :style="{width:sWipeStyleW,transform:sWipeTransform}" v-on:touchstart="_start($event)">
			<a class="swipe-slide" v-for="item in swipeitem" :href="item.link">
			<img :src="item.image"></a>
		</nav>
		<nav class="swipe-pagination" v-if="pagination">
			<a v-for="item in swipeitem" :class="{'active':$index==swipeIndex}"></a>
		</nav>
	</div>
</template>
<script type="text/javascript">
	import './swipe.scss';
	import _event from '../../lib/event';

	 export default {
        name:'jui-swipe',
	 	props: {
		    swipeitem:'',
		    shuffling:'',
            pagination:'',
		  },
         data () {
            return {
            	swipetimer:'',
                animation:true,
                sWidth:document.documentElement.clientWidth||document.body.clientWidth,
                sWipeTransform:'translate3d(0px, 0px, 0px)',
                transformValue:0,
            	eventKey:{
            		startX:0,
            		moveX:0,
            		startT:0,
            		endT:0,
                    left:0,
                    distance:0,
            	}
            }
        },
        computed:{
            sWipeStyleW(){
                return 100*this.swipeitem.length+"%";
            },
            swipeIndex(){
                return -~~(this.transformValue/this.sWidth);
            },
            TransformX(){
                return -this.swipeIndex*this.sWidth+this.eventKey.distance;
            }
        },
        ready(){
            this.sWidth = this.$els.juiswipe.offsetWidth;
        },
        watch: {
        shuffling(val) {
                if(val){
                    this.swipetimer = setInterval(this._animate,2000)
                }else{
                    clearInterval(this.swipetimer)
                }
            },
        TransformX(){
            this.sWipeTransform = 'translate3d('+this.TransformX+'px, 0px, 0px)';
            }
        },
        methods:{
            _animate(){
                this.swipeIndex >= this.swipeitem.length-1 ? this.transformValue = 0 : this.transformValue-=this.sWidth;
            },
        	_start(e){
                this.animation = false;
        		let self = this.eventKey;
				self.startX = e.touches[0].pageX;
				self.startT = new Date().getTime();
				_event._bind(e.target,'touchmove',this._move);
                _event._bind(e.target,'touchend',this._end);
                clearInterval(this.swipetimer)
        	},
        	_move(e){
        		let self = this.eventKey;
				self.moveX = e.touches[0].pageX;
                self.distance = self.moveX - self.startX;		
        	},
            _end(e){
                this.animation = true;
                let self = this.eventKey;
                self.endT = new Date().getTime();
                let speed = self.endT - self.startT;
                let tansformRight = -this.sWidth*(this.swipeitem.length-1);
                this.transformValue = this.TransformX;
                if(this.transformValue>=0){
                        this.transformValue = 0;
                    }else if(this.transformValue < tansformRight){
                        this.transformValue = tansformRight;
                    }else{
                         if(speed<300){
                            if(self.distance<0){ 
                               this.transformValue = this.transformValue-this.sWidth;
                            }
                         }else{
                             if(this.transformValue%this.sWidth <= -this.sWidth/2){
                                this.transformValue = this.transformValue-this.sWidth;
                            }
                    }
                }
                self.distance = 0;
                this.transformValue = this.TransformX;
                _event._unbind(e.target,'touchmove',this._move);
                _event._unbind(e.target,'touchend',this._end);
                if(this.shuffling){
                    this.swipetimer = setInterval(this._animate,2000)
                }
            }
        }
    }
	
</script>