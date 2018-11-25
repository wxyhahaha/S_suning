<template>
	<div class="classfy whitebox">
		<header>
			<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		 	 </router-link>
		 	 <div class="input-wrapper">
		 	 	<input type="text" placeholder="超市狂欢">
		 	 </div>

		</header>

			<div class="aside">
		 	 	<div class="aside-item">
		 	 		<ul> 		

		 	 		<li v-for="(v,i) in list" :class="{current:selected==i}"  @click="change(i,v)"> {{v}}</li>
		 	 		</ul>
		 	 	</div>
		 	</div>
		 	<div class="right-aisde">

		 		<component v-bind:is="msg" :name="fu"></component>	
		 		
		 	</div>
	</div>
</template>
<script>
	import recommend from './recommend.vue'
	import comment from './comment.vue'
	export default{
		data(){
			return{
				fu:'热门推荐	',
				msg:recommend,
				selected:0,
				list:['热门推荐',
				'大家电',
				'手机相机',
				'电脑办公',
				'厨卫大电',
				'生活家电',
				'人群偏爱',
				'食品酒水',
				'居家生活',
				'品质男装',
				'运动户外',
				'苏宁国际',
				'奶粉尿裤',
				'苏宁生鲜',
				'舒适家电',
				'二手优品',
				'智能设备',
				'钟表眼镜',
				'品质男鞋',
				'流行女装',
				'精品女鞋',
				'汽车生活',
				'珠宝首饰',
				'美妆护肤',
				'个人护理',
				'童装玩具',
				'皮具箱包',
				'内衣配饰',
				'图书音像',
				'苏宁极物',
				'礼品乐器',
				'艺术陶瓷',
				'医药馆特',
				'色馆苏宁',
				'服务苏宁',
				'金融苏宁',
				'有房'
				],
			}
		},
		methods:{
			change(n,t){
				this.selected=n;
				
				this.fu = t;

				if(n>0){
					this.msg = comment
				
				}
				else{
					this.msg = recommend
				}
			}
		}
	}
</script>
<style>
	.classfy{
		padding-left: 3.5rem;
		padding-top: 1.76rem;
	}
	.classfy header{
		z-index: 999999;
		position: fixed;
		top: 0;
		left: 0;
		-webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    background-color: #F8F8F8;
	    box-sizing: border-box;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    font-size: 14px;
	    width: 100%;
	    height: 1.76rem;
	    line-height: 1;
	    padding: 0 10px;
	    text-align: center;
	    white-space: nowrap;
	    box-shadow: 0 1px 1px #DCDCDC
	}
	.classfy .router-link-active{
		margin-right: .4rem
	}
	.classfy .mint-button--normal{
		padding:0;
	}
	.classfy button{
		box-shadow: none;
		
	}
	.input-wrapper{
		flex:1;
		border: 1px solid #ccc;
		border-radius: 3px;
		height: 1.2rem;
		line-height: 1.2rem;
		background-color: #fff;
	}
	.input-wrapper input{
		width: 100%;
		border: none;
		outline: none;
		font-size: 0.5rem;
		text-indent: 0.3rem;
		color: #CACACA;
	}
	.classfy .aside{
		padding-top: 1.76rem;
		z-index: 1;
		width: 3.6rem;
		height: 100%;
		background-color: #F4F4F4;

		position: fixed;
		top: 0;
		left: 0;
		overflow: auto;
	}
	.classfy .aside-item {
		border-bottom: 1px solid #e9e9e9;
	}
	.classfy .aside-item ul li.current{
		border-left: 0.2rem solid #2F80ED;
		background-color: #fff;
		font-size: 0.55rem;
		border-right: 1px solid #fff;
	}
	.classfy .aside-item ul li{
		border-right: 1px solid #e9e9e9;
		width: 3.6rem;
		height: 1.88rem;
		line-height: 1.88rem;
		text-align: center;
		border-bottom: 1px solid #e9e9e9;
		color: #666;
		font-size: 0.53rem;
	}

	/*右边*/
	.right-aisde{
		padding:0.35rem;
		width: 100%;
	
	}

/*各分类*/
.group em{
	font-size: 0.3rem;
}
.group i{
	float: right;
}
.enter-chano img{
	margin-top: 1rem;
	width: 100%;
	height: 1.45rem; 
}
.group h3{
	margin: 1rem 0
}
</style>