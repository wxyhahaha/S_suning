<template>
	<div class="recommend">
		<div class="head">
			<h3 class="title">
				<span></span>
				<em>热门专场</em>
			</h3>
			<div class="head-cd-img">
				<a href=""><img src="../../assets/images/154207757733026323.png" alt=""></a>
				<a href=""><img src="../../assets/images/154207765666572265.png" alt=""></a>
				<a href=""><img src="../../assets/images/154207767572262613.png" alt=""></a>
				<a href=""><img src="../../assets/images/154207766589426965.png" alt=""></a>
			</div>
		</div>
		<h3 class="title">
		<span></span>
		<em>热门推荐</em>
		</h3>
		<div class="proshow-box">
			<ul>
				<li v-for="(v,i) in pros">
					<a href=""><img :src=v.imgurl alt=""></a>
					<em>{{v.title}}</em>
				</li>
			</ul>
		</div>
		<div class="foot">
			<h3 class="title">
				<span></span>
				<em>为您推荐</em>
			</h3>
			<div class="proshow-box">
				<ul>
					<li v-for="(v,i) in reco">
						<a href=""><img :src=v.imgurl alt=""></a>
						<em>{{v.title}}</em>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

				pros:[
					{
						title:'电视',
						imgurl:'src/assets/images/1491712405935_pc_list.jpg'
					},
					{
						title:'洗衣机',
						imgurl:'src/assets/images/1493018450115_pc_list.jpg'
					},
					{
						title:'奶粉',
						imgurl:'src/assets/images/1493897765747_app_wap_list.jpg'
					},
					{
						title:'iPad',
						imgurl:'src/assets/images/1493946965497_app_list.jpg'
					},
					{
						title:'沙发',
						imgurl:'src/assets/images/149405787873386985.jpg'
					},
					{
						title:'电饭锅',
						imgurl:'src/assets/images/1505959759867_imgApp_tmndir.jpg'
					},
					{
						title:'水果',
						imgurl:'src/assets/images/1514965102061_imgApp_tmndir.jpg'
					},
					{
						title:'空调',
						imgurl:'src/assets/images/1526974072412_app_wap_list.jpg'
					},
					{
						title:'冰箱',
						imgurl:'src/assets/images/1528960724022_imgApp_tmndir.png'
					},
					{
						title:'手机',
						imgurl:'src/assets/images/153684246313252041.png'
					},
					{
						title:'小buil音响',
						imgurl:'src/assets/images/1541851473306_imgWap_tmndir.jpg'
					},
					{
						title:'羽绒服',
						imgurl:'src/assets/images/1540169990076_imgApp_tmndir.jpg'
					},	
				],
				reco:[
					{
						title:'卤味小食',
						imgurl:'src/assets/images/1540277801659_imgWap_tmndir.jpg'
					},
					{
						title:'饼干',
						imgurl:'src/assets/images/1540277443370_imgWap_tmndir.jpg'
					},
					{
						title:'茶饮料',
						imgurl:'src/assets/images/1528859929418_imgApp_tmndir.jpg'
					},
					{
						title:'取暖器',
						imgurl:'src/assets/images/1537960669172_imgApp_tmndir.jpg'
					},
					{
						title:'肉干',
						imgurl:'src/assets/images/1540277192166_imgWap_tmndir.jpg'
					},
					{
						title:'电动剃须刀',
						imgurl:'src/assets/images/1520254209139_imgApp_tmndir.jpg'
					}
				]
			}
		},
	}
</script>
<style >
	.recommend{
		z-index: 999;
		position: relative;
	}
	.head-cd-img{
		display: flex;
		flex-wrap: wrap;
	}
	.head-cd-img a{
		margin-left: 0.4rem;
		margin-bottom:0.3rem; 
		/*flex:50%;*/
		flex-grow: 0;	
	}
	.head-cd-img img{

		width: 5rem;
		height: 1.6rem;
	}
	.recommend .title{
		position: relative;
		margin:1.1rem 0; 
	}
	  em{
		font-style: normal;
		font-weight: lighter;
		font-size: 0.5rem;
		
		position: relative;
		background-color: #fff;
	}
	.recommend .title em{
		color: #FE256B;
	}
	.recommend .title span{
		position: absolute;
		left: 0;
		top: 0.39rem;
		width: 100%;
		height: 0.04rem;
		background-color: #f2f2f2
	}
	.proshow-box ul{
		display: flex;
		flex-wrap: wrap;
	}
	.proshow-box img{
		width: 2.6rem;
		height: 2.6rem;
	}
	.proshow-box ul li{
		flex:33.33%;
		height: 3rem;
		flex-grow: 0;
		text-align: center;
		margin-bottom: 0.7rem;
	}
	.proshow-box em{
		display: block;
		color: #666;
	}
	.recommend .head .title,.recommend .foot .title{
		text-align: center;
	}
	.recommend .head span,.recommend .foot span{
		left: 50%;
		margin-left: -15%;
		width: 30%;
	}
</style>