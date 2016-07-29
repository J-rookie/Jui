<template>
	<div class="jui-swipe-container">
		<nav class="swipe-wrapper" :class="{duration:animation}" :style="{width:swipeitem.length * 100 + '%',transform: 'translate3d('+swipeWidth+'px, 0px, 0px)'}" v-on:touchstart="_start($event)">
			<a class="swipe-slide" v-for="item in swipeitem" :href="item.link" ">
			<img :src="item.image"></a>
		</nav>
		<nav class="swipe-pagination" v-if="pagination">
			<a v-for="item in swipeitem" :class="{'active':$index==swipeIndex}"></a>
		</nav>
	</div>
</template>
<style lang="sass">
	.swipe-container{
		width:100%;
		overflow:hidden;
	}
</style>
<script type="text/javascript">
	import './swipe.scss';
	import _event from '../../lib/event';

	 export default {
	 	props: {
		    swipeitem:'',
		    shuffling:'',
            pagination:'',
		  },
         data () {
            return {
            	sWidth:document.documentElement.clientWidth||document.body.clientWidth,
            	swipeIndex:0,
                swipeWidth:0,
            	swipetimer:'',
                animation:true,
            	eventKey:{
            		startX:0,
            		moveX:0,
            		startT:0,
            		endT:0,
                    left:0,
            	}
            }
        },
        watch: {
        'shuffling': function (val) {
            console.log(val)
                if(val){
                    this.swipetimer = setInterval(this._animate,2000)
                }else{
                    clearInterval(this.swipetimer)
                }
            }
        },
        methods:{
            _animate(){
                this.swipeIndex >= this.swipeitem.length-1 ? this.swipeIndex = 0 : this.swipeIndex++;
                this.swipeWidth = this.sWidth*this.swipeIndex*-1
            },
        	_start(e){
                this.animation = false;
        		var self = this.eventKey;
				self.startX = e.touches[0].pageX;
				self.startT = new Date().getTime();
                self.left = this.swipeWidth;
				_event._bind(e.target,'touchmove',this._move);
                _event._bind(e.target,'touchend',this._end);
                clearInterval(this.swipetimer)
        	},
        	_move(e){
        		var self = this.eventKey;
				self.moveX = e.touches[0].pageX;
                this.swipeWidth = self.left + self.moveX - self.startX;	
                this.swipeIndex = parseInt(Math.abs(this.swipeWidth)/this.sWidth);		
        	},
            _end(e){
                this.animation = true;
                var self = this.eventKey;
                self.endT = new Date().getTime();
                var speed = self.endT - self.startT;
                    if(this.swipeWidth>0){
                    this.swipeWidth = 0;
                    }else if(this.swipeWidth <-(this.swipeitem.length-1)*this.sWidth){
                        this.swipeWidth = -(this.swipeitem.length-1)*this.sWidth;
                    }else{
                        if(speed<300){
                            if(self.moveX-self.startX>0){                 
                                this.swipeWidth = this.swipeWidth-this.swipeWidth%this.sWidth;
                            }else{
                                this.swipeWidth = this.swipeWidth-this.swipeWidth%this.sWidth-this.sWidth;
                            }
                        }else{
                            if(Math.abs(this.swipeWidth%this.sWidth)<=this.sWidth/2){
                                this.swipeWidth = this.swipeWidth-this.swipeWidth%this.sWidth
                            }else{
                                this.swipeWidth = this.swipeWidth-this.sWidth-this.swipeWidth%this.sWidth;
                            }
                        }
                    }
                this.swipeIndex = parseInt(Math.abs(this.swipeWidth)/this.sWidth);
                _event._unbind(e.target,'touchmove',this._move);
                _event._unbind(e.target,'touchend',this._end);
                if(this.shuffling){
                    this.swipetimer = setInterval(this._animate,2000)
                }
            }
        }
    }
	
</script>