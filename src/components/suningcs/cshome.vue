<template>
	<div id="cshome">
		<div>
		<nav id="cshomenav">
			<mt-header title="苏宁超市">
			  <router-link to="/" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</nav>
		
		<div class="banner">
			
			
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(v,i) in csbanner"><img :src=v alt="">
			  </mt-swipe-item>
			</mt-swipe>
			<div class="search">
				<mt-search
				  v-model="value"
				  cancel-text="取消"
				  placeholder="品茶节满199减100">
				</mt-search>
		</div>
		</div>

		<div class="enter-wrapper" id="csenter" style="height:216px">
			<div :class="{'enter-items':true,'fixed':navfixed}">
			<ul >
				<li v-for="(v,i) in enterdata">
					<a href="">
						<img v-lazy=v.imgurl alt="">
						<div class="title">{{v.title}}</div>
					</a>
				</li>
			</ul>
			</div>
		</div>
		<div class="ad-img">
			<img src="../../assets/images/154236821131030759.png" alt="">
		</div>
		<div class="itembox">
			<div class="item-head-img">
				<img src="../../assets/images/153933077520884825.png" alt="">
				<div class="bq-bg"></div>
			</div>
			<div class="bqPro">
				<div class="bqPro-box">
					<img src="../../assets/images/1493953442909_app_wap_list.jpg" alt="">
					<div class="bq-infobox">
						<div class="bq-title">鲜记  阳光脆网红香蕉片120g*2袋</div>
						<div class="bq-hot">前100件立减3元</div>
						<div class="bq-hot">补水 保湿</div>
						<div class="buynum">
							<div class="capacity">已抢225件</div>
							<div class="progress"></div>
						</div>
						<div class="bq-price">
							<span>￥19.9</span>
							<del>￥26.80</del>
						</div>
						<a href="" class="q-btn">马上抢</a>
				</div>
				
				</div>
				<div class="slide-box-wrapper">			
					<div class="slide-Prosbox">
						<a href="" v-for="(v,i) in bqdata" >
							<div class="graymask"></div>
							<img v-lazy=v.imgurl alt="" >
							<div class="bq-title">{{v.title}}</div>
							<div class="buynum">
								<div class="capacity" >已抢{{v.bought}}件</div>
								<div class="progress" :style=v.progress></div>
							</div>

								
							<div class="bq-price">
								<span>￥{{v.onsale}}</span>
								<del>￥{{v.originPrice}}</del>
							</div>
						</a>					
					</div>
				</div>
			</div>
		</div>
		<div class="itembox">
			<div class="item-head-img">
				<img src="../../assets/images/153812160151963474.png" alt="">
				<a href="">
					<img class="ppjuimg" src="../../assets/images/154236897358815130.png" alt="">
				</a>
			</div>
			<div class="ppProsbox">

					<a href="">
						
						<img src="../../assets/images/154236904495486257.png" alt="">
					</a>
					<a href="">
						<img src="../../assets/images/154259205333816199.png" alt="">
					</a>
					<a href="">
						<img src="../../assets/images/154258998053746774.png" alt="">
					</a>				
			</div>
		</div>
		<div class="itembox">
				<div class="item-head-img">
					<img src="../../assets/images/153812162740757852.png" alt="">			
				</div>
				<div class="phbimg img1"></div>
				<div class="slide-box-wrapper">
				<div>	
					<div class="slide-Prosbox">
						<a href="" v-for="(v,i) in phbdata1" ref="proinfo" >
							<div class="graymask"></div>
							<img v-lazy=v.imgurl alt=""   >
							<div class="phb-title">{{v.title}}</div>		
							<div class="phb-buy">
								<span>￥{{v.onsale}}</span>
								<span class="shopcar" @click.prevent="shopcar(i,$event,1)" ></span>
							</div>
						</a>					
					</div>
					</div>		
				</div>
				<div class="phbimg img2"></div>
				<div class="slide-box-wrapper">
				<div>	
					<div class="slide-Prosbox">
						<a href="" v-for="(v,i) in phbdata2" >
							<div class="graymask"></div>
							<img v-lazy=v.imgurl alt="" ref="proimg" >
							<div class="phb-title">{{v.title}}</div>		
							<div class="phb-buy">
								<span>￥{{v.onsale}}</span>
								<span class="shopcar" @click.prevent="shopcar(i,$event,1)"></span>
							</div>
						</a>					
					</div>
					</div>		
				</div>
		</div>
		<div class="itembox">
			<div class="item-head-img">
				<img src="../../assets/images/153812165191604810.png" alt="">
				<div class="row-pro-view">
					<a href="" v-for="(v,i) in themrecomdata1">
						<div class="graymask"></div>
						<img v-lazy=v.imgurl alt="">
						<div class="recomPro" :style=v.backgroundColor>
							<span>{{v.title[0]}}</span>
						
							<span>{{v.title[1]}}</span>
						</div>
					</a>
				</div>
				<div class="row-pro-view">
					<a href="" v-for="(v,i) in themrecomdata2">
						<div class="graymask"></div>
						<img v-lazy=v.imgurl alt="">
						<div class="recomPro" :style=v.backgroundColor>
							<span>{{v.title[0]}}</span>
						
							<span>{{v.title[1]}}</span>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="itembox">
			<div class="item-head-img">
				<img src="../../assets/images/153812166366155156.png" alt="">			
			</div>
			<div class="darenrecombox">
				<div class="scrollmore">
					<a href="" v-for="(v,i) in darenrecomdate">
					<div class="graymask"></div>
						<img v-lazy=v.bigimgurl alt="">
						<div class="smallimg" >
						<a href="" v-for="(a,j) in v.smallimgurl">
							<img v-lazy=a alt="">	
						</a>	
										
						</div>
					</a>
				</div>
				
			</div>
		</div>
		<div class="itembox">
			<div class="item-head-img">
				<img src="../../assets/images/153812168395010149.png" alt="">			
			</div>
			<div class="Pro-swipe">
				<ul>
					<li v-for="(v,i) in ProSwipe">
						<div class="Row" >
							<a href="" v-for="(a,j) in v.row1">
								<div class="throughline"></div>
								<img v-lazy=a.headImg alt="">
								<div class="titleinfo">
									<div class="main-title">{{a.maintitle}}</div>
									<div class="small-title">{{a.smalltitle}}</div>
								</div>
								<div class="r1-img-box">
									<img v-lazy=a.imgBox[0] alt="">
									<img v-lazy=a.imgBox[1] alt="">
								</div>
							</a>

						</div>
						<div class="Row" >
							<a href="" v-for="(a,j) in v.row2">
								<div class="throughline"></div>
								<img v-lazy=a.headImg alt="">
								<div class="titleinfo">
									<div class="main-title">{{a.maintitle}}</div>
									<div class="small-title">{{a.smalltitle}}</div>
								</div>
								<div class="r1-img-box">
									<img v-lazy=a.imgBox[0] alt="">
									<img v-lazy=a.imgBox[1] alt="">
								</div>
							</a>
							
						</div>
					</li>

				</ul>
				<div class="circel ">
					<ol>
						<li class="active"></li>
						<li></li>
						<li></li>
					</ol>
				</div>
			</div>
		</div>
		<div class="qb">
			<div class="qb-banner">

			</div>
			

		</div>
		<router-link to='/shopcar'>
		<div class="addcar-icon" >
			<i class="num">{{this.$store.state.pronum}}</i>
		</div>
		</router-link>
		<div class="backtotop" @click="backtotop()"></div>
		<v-addcar ref="addcarcom"></v-addcar>
		
		</div>
	</div>
</template>
<script>
	import addcar from '../../components/suningcs/addcar.vue'
	export default{
		components:{
			'v-addcar':addcar
		},
		data(){
			return{

				
				addcarcom:addcar,
				navfixed:false,
				
				progress:0,
				value:'超值',
				bqdata:this.$store.state.csbqdata,
				enterdata:this.$store.state.csenterdata,
				csbanner:[
					'src/assets/images/154236204261412348.webp',
					'src/assets/images/154236178911407485.webp',
					'src/assets/images/154236855740778853.webp',
					'src/assets/images/154236951118251617.webp',
					'src/assets/images/154236852627208834.webp',
					'src/assets/images/154236888222381386.webp',
					'src/assets/images/154236845746952840.webp',
				],
				phbdata1:[
					{
						imgurl:'src/assets/images/762415262110982443766187_x.webp',
						title:'【领券第二件半价】伊萨',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/112797804715962837759145_x.webp',
						title:'皇家(ROYAL CANIN)猫粮 室内成猫粮 Indoor27/2KG',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/762415262110982443766187_x.webp',
						title:'Happy100鲜封包猫用鸡肉金枪鱼鲜封包70g猫零食猫湿粮拌饭营养食品',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/240254141132749792890143_x.webp',
						title:'麦富迪狗零食 优质鸡胸肉360g 营养鸡胸肉干 训狗必备零食',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811130933429386_x.webp',
						title:'宝尼BAONI可爱的膨润土条形猫砂 5KG 膨润土除臭圆砂强力结团猫沙',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811131029505523_x.webp',
						title:'【苏宁超市】Wanpy顽皮鲜封包活力营养鲜封包80g金枪鱼猫零食猫湿粮拌饭营养食品',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201808121205523891_x.webp',
						title:'Wanpy顽皮狗罐头375g牛肉肉泥狗罐头拌饭狗湿粮挑嘴粮',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/699988153207237163870380_x.webp',
						title:'麦富迪 Myfoodie 猫狗通用冻干宠物零食鸡肉鸭肉三文鱼训练狗零食 诱导零食 鸡胸肉冻干60g',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/168819845523639154874665_x.webp',
						title:'小佩PETKIT宠物智能饮水机二代猫咪自动循环喝水器狗狗用品喂水器',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811131021111960_x.webp',
						title:'【领券第二件半价】伊萨',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					}
				],
				phbdata2:[
					{
						imgurl:'src/assets/images/201811120248389051_x.webp',
						title:'七度空间(SPACE 7)优雅系列超薄丝柔卫生巾245mm日用10片装',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/102242268420285948918380_x.webp',
						title:'MEDIAN麦迪安 专业清除93%牙结石牙周护理牙膏 绿茶薄荷味120g',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811141157178961_x.webp',
						title:'力士 (LUX) 精油香氛沐浴露 幽莲魅肤1KG 各种肤质 成人 香氛浴露【联合利华】',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811111026052608_x.webp',
						title:'蓝月亮 芦荟抑菌洗手液 (芦瓶+芦袋) 组合装 500g+500g',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/0000000000-000000000103720844_1.webp',
						title:'高洁丝（kotex）小Q包150mm40+5片无香型护垫卫生巾',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811120734517055_x.webp',
						title:'舒客（Saky）防蛀固齿140克*3支牙膏组合装',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/665587187149801698625984_x.webp',
						title:'【清洁平衡】芳芯(femfresh)英国洋甘菊女性洗护理液250ml 清洁平衡PH安全低敏无皂基私处洗液 通用 英国进口',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/201811111128254274_x.webp',
						title:'阿道夫（ADOLPH）成人通用祛屑止痒洗发水洗发膏 正品防伪去头屑洗头水420洗发乳液',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					},
					{
						imgurl:'src/assets/images/0070146866-000000000709551374_1.webp',
						title:'【买2送1】艾叶养生型沐足泡脚粉800克（8g*100袋）驱寒祛湿暖宫失眠艾叶草痛经中医配方',
						onsale:38.9,
						weight:22,
						taste:'口味奇特'
					}

				],
				themrecomdata1:[
					{
						imgurl:'src/assets/images/0000000000000000000124725600.webp',
						title:['纸品盛宴','欢乐一辈纸'],
						backgroundColor:{
							background:'linear-gradient(90deg,rgba(255,181,76,0.70) 0,#ffb24c 100%)'
						}
					},
					{
						imgurl:'src/assets/images/0000000000000000000187721261.webp',
						title:['健康好奶','奶香四溢'],
						backgroundColor:{
							background:'linear-gradient(90deg,rgba(255,148,76,0.70) 0,#ff944c 100%)'
						}
					},
					{
						imgurl:'src/assets/images/0070128858000000000189348006.webp',
						title:['绽放自信','呵护您的牙齿'],
						backgroundColor:{
							background:'linear-gradient(90deg,rgba(192,199,79,0.70) 0,#c0c74f 100%)'
						}
					}
				],
				themrecomdata2:[
					{
						imgurl:'src/assets/images/0070117634000000010573627055.webp',
						title:['拔草网红','暖心下午茶'],
						backgroundColor:{
							background:'linear-gradient(90deg,rgba(255,120,102,0.70) 0,#ff7866 100%)'
						}
					},
					{
						imgurl:'src/assets/images/0070239991000000010627293539.webp',
						title:['初夏小食光','时令生鲜'],
						backgroundColor:{
							background:'linear-gradient(90deg,rgba(255,102,143,0.70) 0,#ff668f 100%)'
						}
					},
					{
						imgurl:'src/assets/images/0000000000000000000104344944.webp',
						title:['零食大轰趴','好吃又不贵'],
						backgroundColor:{
							background:'linear-gradient(90deg,rgba(229,101,182,0.70) 0,#e65cb3 100%)'
						}
					}
				],
				darenrecomdate:[
					{
						bigimgurl:'src/assets/images/154236908209218652.png',
						smallimgurl:['src/assets/images/0000000000-000000000124222861_1.webp','src/assets/images/0000000000-000000010567768327_1.webp','src/assets/images/0000000000-000000010583993403_1.webp']
					},
					{
						bigimgurl:'src/assets/images/154236927399871508.png',
						smallimgurl:['src/assets/images/0000000000-000000010471928901_1.webp','src/assets/images/0000000000-000000000680817361_1.webp','src/assets/images/0000000000-000000000687016572_1.webp']
					},
					{
						bigimgurl:'src/assets/images/154235883461595374.png',
						smallimgurl:['src/assets/images/0000000000-000000000132213669_1.webp','src/assets/images/0000000000-000000000103642697_1.webp','src/assets/images/0000000000-000000010531399685_1.webp']
					}
				],
				ProSwipe:[
					{
						row1:[
							{
								headImg:'src/assets/images/151359683152922130.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000609760797.webp','src/assets/images/0000000000000000000856900484.webp']
							},
							{
								headImg:'src/assets/images/150044797792825382.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000740568654.webp','src/assets/images/0000000000000000000721604940.webp']
							},
						],
						row2:[
							{
								headImg:'src/assets/images/149872487804439308.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000140826205.webp','src/assets/images/0000000000000000000140822017.webp']
							},
							{
								headImg:'src/assets/images/150045264997052168.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000184313512.webp','src/assets/images/0000000000000000000184313487.webp']
							},
						]
					},
					{
						row1:[
							{
								headImg:'src/assets/images/150045271342520382.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0070073390000000000189910246.webp','src/assets/images/0070073390000000000141454707.webp']
							},
							{
								headImg:'src/assets/images/150045048839049666.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000715989030.webp','src/assets/images/0000000000000000000639863822.webp']
							},
						],
						row2:[
							{
								headImg:'src/assets/images/151359814387277926.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000624243607.webp','src/assets/images/0000000000000000000623779984.webp']
							},
							{
								headImg:'src/assets/images/150045047674838142.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000171461912.webp','src/assets/images/0000000000000000000164089606.webp']
							},
						]
					},
					{
						row1:[
							{
								headImg:'src/assets/images/151359683152922130.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000609760797.webp','src/assets/images/0000000000000000000856900484.webp']
							},
							{
								headImg:'src/assets/images/151359683152922130.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000609760797.webp','src/assets/images/0000000000000000000856900484.webp']
							},
						],
						row2:[
							{
								headImg:'src/assets/images/151359683152922130.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000609760797.webp','src/assets/images/0000000000000000000856900484.webp']
							},
							{
								headImg:'src/assets/images/151359683152922130.webp',
								maintitle:'中粮名庄荟自营官方旗舰店',
								smalltitle:'中粮名庄荟自营官方旗舰店',
								imgBox:['src/assets/images/0000000000000000000609760797.webp','src/assets/images/0000000000000000000856900484.webp']
							},
						]
					}
				]

			}
		},
		mounted(){

			
			
			console.log(document.getElementsByClassName('addcar-icon')[0].offsetTop)
			for(var i=0;i<this.bqdata.length;i++){
				this.bqdata[i].progress.width=this.bqdata[i].bought/this.bqdata[i].rest *3.5+'rem'
			}
			
			window.addEventListener('scroll',this.navscroll,true)
		},
		beforeDestroy(){
			window.removeEventListener("scroll",this.navscroll,true)
		},
		methods:{
			backtotop(){

			},
			shopcar(n,e,num){
				// var arr = this.$refs.proinfo.title.filter(item=>{
				// 	return item != v
				// })
				
				this.$store.state.carY=document.getElementsByClassName('addcar-icon')[0].offsetTop
				this.$store.state.carX=document.getElementsByClassName('addcar-icon')[0].offsetLeft
				console.log(document.getElementsByClassName('addcar-icon')[0].offsetTop)
				let offsetTop=e.target.parentNode.parentNode.getElementsByTagName('img')[0].offsetParent.offsetTop-this.$store.state.scrolltop
				let pffsetLeft = e.target.parentNode.parentNode.getElementsByTagName('img')[0].offsetParent.offsetLeft
			console.log(e.target.parentNode.parentNode.getElementsByTagName('img')[0].offsetParent.offsetTop-this.$store.state.scrolltop)
				this.$store.state.proX =pffsetLeft
	 			this.$store.state.proY =offsetTop
				console.log(e.target.parentNode.parentNode.getElementsByClassName('phb-title')[0].innerText)
				let img = e.target.parentNode.parentNode.getElementsByTagName('img')[0].getAttribute('src')
				
				
				this.$store.state.carimgshow = true
				let protitle = e.target.parentNode.parentNode.getElementsByClassName('phb-title')[0].innerText;
				let arr1 = this.phbdata1.filter(item=>{
					return item.title==protitle
				})
				let arr2 = this.phbdata2.filter(item=>{
					return item.title==protitle
				})
				
				this.$store.commit('shopcar',{img:img,num:num,proarr1:arr1[0],proarr2:arr2[0]})
			},
			navscroll(e){
				console.log(e.srcElement.scrollTop)
				this.$store.state.scrolltop = e.srcElement.scrollTop
				let objoffsetTop = document.getElementsByClassName('enter-items')[0].offsetTop;
				let objHeight = document.getElementsByClassName('enter-items')[0].offsetHeight
				let scrollTop = e.srcElement.scrollTop
				if(scrollTop>objoffsetTop + objHeight){
					this.navfixed = true;

				}
				 if (scrollTop<objoffsetTop + objHeight)
				{
					this.navfixed = false;
				}
				
			}
		}
	}
</script>
<style>
	image[lazy=loading] {
	  width: 11rem;
	  /*height: 300px;*/
	  margin: auto;
	}
	#cshome{
		padding-top: 1.77rem;
	padding-bottom: 1.77rem;
	z-index: 999;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left:0;
	background-color: #fff;
	overflow-y: auto
	}
	#cshome>div{
		overflow:hidden; 	
	}
	#cshome a{
		color: #222;
		margin: 0.2rem 0.2rem;
	}
	#cshome nav{
		width: 100%;
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
	}
	#cshome .mint-header-button{
		background-color:transparent;
	}
	#cshome .mint-header{
		color: #333;
		font-weight: lighter;
		background-color: #fff;
	}
	#cshome h1{
		font-size: 0.64rem
	}
	#cshome .mint-searchbar-inner .mintui-search{
		font-size: 0.85rem;
		margin-right: 0.1rem;
	}
	#cshome .mint-searchbar{
		background-color: transparent;

	}
	#cshome .mint-searchbar-inner{
		height: 1.35rem;
		border-radius: 50px;
		background-color: #fff;
	}
	#cshome .mint-search{
		height: 100%;
	}
	.search{
		width: 100%;
		position: absolute;
		top: 1.78rem;

	}
	.enter-items ul{
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		font-size: 0.5rem
		
	}
	#csenter{
		height: 7.5rem;
	}
	.enter-items.fixed{
		overflow: auto;
		flex-wrap: nowrap;
	}
	.enter-items.fixed ul{
		position: fixed;
		top: 0;
		left: 0;
		/*overflow: auto;*/
		flex-wrap: nowrap;
		background-color: #fff;
		z-index: 9999;
	}
	.enter-items.fixed li{
		margin-right: 0.2rem;
		flex:20%;
	}
	.enter-items.fixed li img{
		margin: 0.5rem 0.25rem 0;
	}
	.enter-items li{
		float: left;
		flex:20%;
		text-align: center;
	}
	#cshome .enter-items li>a{
		margin: 0;
	}
	.enter-items li img{
		margin:1.2rem 0.25rem 0; 
		width: 3.2em;
		/*height: 1.68rem;*/

	}
	#cshome div.title{
		margin-top: 0.1rem;
	}

	.itembox{
		padding: 0.2rem;
	}
	.item-head-img>img{
		width: 100%;
		height: 1.7rem;
	}
	#cshome .item-head-img a{
		margin:0.2rem 0;
	}
	.bq-bg{
		width: 100%;
		height: 1.8rem;
		background: url(../../assets/images/bq-bg.png)no-repeat;
		background-size: 100% 100%;

	}
	.bqPro>img{
		width: 4.4rem;
		height: 4.4rem;
		margin-left: 0.5rem;
		margin-top: 0.48rem;
	}
	.bqPro-box{
		box-shadow: 0 0.08rem 0.2rem #f2f2f2;
		padding: 0.3rem 0;
		border-radius: 5px;
	}
	.bqPro-box>img{
		width: 4.4rem;
		height: 4.4rem;
	}
	.bq-infobox{
		width: 8.2rem;
		display: inline-block;
		padding-top: 0.48rem;
		vertical-align: top;
		position: relative;
	}
	.bq-infobox>div{
		margin-bottom: 0.1rem;
	}
	.bq-title{
		font-size: 0.53rem;
		color: #333;
		line-height: 0.64rem;
		/*height: 0.64rem;*/
		font-weight: bold;
	}
	.bq-hot{
		background: url(../../assets/images/hot64.png)no-repeat;
		background-size: 0.54rem 0.64rem;
		background-position: left;
		padding-left: 0.6rem;
		color: #333;
		line-height: 0.8rem; 
	}
	#cshome .q-btn{
		position: absolute;
		right: -0.8rem;
		bottom: 0;
		color:#f40;
		border: 1px solid #f40;
		border-radius: 50px;
		width: 2.4rem;
		height: 1.1rem;
		line-height: 1.1rem;
		text-align: center;
	}
	.capacity{
		width: 3.5rem;
		height: 0.48rem;
		border-radius: 50px;
		background-color: #f40;
		opacity: 0.5;
		font-size: 0.2rem;
		line-height: 0.6rem;
		text-align: center;
		color: #fff;
		position: relative;
		z-index: 2;
	}
	.buynum{
		position: relative;
	}
	.progress{
		border-radius:50px;
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(90deg,#f50 0,#ff8f00 100%);
		width: 1.5rem;
		height: 100%;
	}
	.slide-Prosbox{
		display: flex;
		overflow: auto;
	}
	.slide-Prosbox .bq-title{
		font-weight: lighter;
		margin-bottom: 0.4rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 0.48rem;
	}
	.slide-Prosbox img{
		width: 3.6rem;
		height: 3.6rem;
	}
	.slide-Prosbox>a{
		margin-right: 0.3rem;
		position: relative;
	}
	.slide-Prosbox>a>div{
		margin-bottom: 0.3rem;
	}
	.slide-Prosbox del{
		display: block;
	}
	.slide-box-wrapper{
		width: 100%;
		/*overflow: auto;	*/
		margin: 0.3rem 0;
		
	}

	#cshome .mint-swipe .mint-swipe-indicator{
		border-radius: 0;
		height: 0.1rem;
		background-color: rgba(255,255,255,.4);
	}
	#cshome .mint-swipe-indicator.is-active{
		background-color: #fff;
	}

	.ad-img img{
		margin: 0.3rem 0;
		width: 100%;
	}
	.item-head-img .ppjuimg{
		width: 100%;
		height: 5.2rem;
	}
	.ppProsbox{
		display: flex;
		flex-wrap: nowrap;
	}
	.ppProsbox>div{
		background-color: rgba(255,255,255,.3);
	}
	.ppProsbox img{
		width: 100%;
	}
	.ppProsbox a{
		
		flex-grow: 0;
	}
	
	.phbimg.img1{
		background-image: url(../../assets/images/153914364790927964.png);
	}
	.phbimg.img1{
		background-image: url(../../assets/images/153914364790927964.png);
	}
	.phbimg.img2{
		background-image: url(../../assets/images/153914365518546757.png);
	}
	.phbimg{

		width: 100%;
		height: 3rem;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin: 0.3rem 0;
	}

	.phb-title{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.phb-buy{
		color: #f40;
		font-size: 0.55rem;
		position: relative;
	}
	.shopcar{

		position: absolute;
		background: url(../../assets/images/char.png)no-repeat;
		background-size: contain;
		width: 1.3rem;
		height: 1.3rem;
		top: 50%;
		margin-top: -0.65rem;
		right: 0;
	}
	.row-pro-view{
		display: flex;
		overflow: hidden;
		

	}
	.row-pro-view img{
		width: 4rem;
		height: 4rem;
	}
	.row-pro-view span{

	}
	.row-pro-view>a{
		position: relative;
		text-align: center;	
		flex:1;
		margin-bottom: 0.2rem;
	}
	.row-pro-view div.recomPro{
		height: 1.8rem;
		margin: 0 auto;
		width: 4rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		align-content: center;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		color: #fff;
		font-size: 0.55rem;
	}
	.row-pro-view .graymask{
		width:4rem;
		height:4.2rem;
		left: 50%;
		margin-left: -2rem;
	}
	.scrollmore{
		display: flex;
		overflow: auto;
	}
	.scrollmore>a{
		height: 7.1rem;
		position: relative;
		margin-right: 0.3rem; 
	}
	.scrollmore .graymask{
		width: 100%;
		height: 100%
	}
	.scrollmore img{
		width: 11rem;
	}
	.smallimg {
		bottom: 1.8rem;
		left: 0.2rem;
		position: absolute;
	}
	.smallimg img{
		width: 1.85rem;
		border-radius: 5px;
	}
	.smallimg>a{
		margin-right: 0.23rem;
	}
	.graymask{
		width: 3.6rem;
		height: 3.6rem;
		background-color: rgba(0,0,0,.03);
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 5px;
	}
	.Pro-swipe .Row>a{
		width: 7.06rem;
		height: 7.2rem;
		box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,0.1);
		border-radius: 5px;
		text-align: center;
		position: relative;
	}
	.Row>a>img{
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		box-shadow:  0 0.04rem 0.12rem 0 rgba(0,0,0,0.1);
	}
	.titleinfo{
		text-align: center;
	}
	.r1-img-box img{
		width: 3.12rem;
		height: 3.12rem;

	}
	.Pro-swipe ul{
		overflow: hidden;
		display: flex;
	}
	.Pro-swipe ul li{
		float: left;
	}
	.Pro-swipe .Row{
		display: flex;
		
	}
	.Row .throughline{
		width: 4.6rem;
		height:0.1rem;
		position: absolute; 
		top: 0.61rem;
		left: 50%;
		margin-left: -2.3rem;
		background:url(../../assets/images/meimao.png)no-repeat;
		background-size: contain;
	}
	.titleinfo{
		margin-bottom: 0.3rem;
	}
	.titleinfo .main-title{
		font-size: .48rem;
		color: #333;
	}
	.titleinfo .small-title{
		font-size: .4rem;
		color: #999;
	}
	.circel ol{
		overflow: hidden;
		text-align: center;
		width: 1.6rem;
		margin: 0 auto
	}
	.circel li.active{
		background-color: #fa0
	}
	.circel ol li{
		text-align: center;
		float: left;
		background-color: #ccc;
		width:0.35rem;
		margin-right: 0.16rem;
		height: 0.12rem;

	}
	.addcar-icon{
		position: fixed;
		bottom: 3rem;
		left: 0.5rem;
		background: url(../../assets/images/car-icon.png)no-repeat;
		background-size: contain;
		width: 2rem;
		height: 2rem;
	}
	.addcar-icon .num{
		position: absolute;
		right: 0rem;
		top: 0rem;
		width:0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		background-color: #e21d1d;
		font-size: 0.5rem;
		line-height: 0.7rem;
		text-align: center;
		color: #fff;
		font-weight: 500;
		font-style: normal;
	}
	.backtotop{
		position: fixed;
		bottom: 3rem;
		right: 0.5rem;
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 50%;
		background: url(../../assets/images/backtop.png)no-repeat center center #5B6167;
		background-size: 0.7rem;
	}
</style>