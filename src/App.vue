<template>
  <div id="app">
    <v-nav ></v-nav>
    
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(v,i) in bannerdata">
          <img :src=v alt="">
        </mt-swipe-item>

    </mt-swipe>
    <div class="welfare-img">
      <a href="">
        <img src="./assets/images/154245335795549034.jpg" alt="">
      </a>
    </div>
    <v-enter></v-enter>
    <div class="welfare-img newpeople">
      <a href="">
        <img v-lazy=welfareimg alt="">
      </a>   
    </div>
    <div class="r5-img row">
      <a href="">
        <div class="r5-left">
          <p class="title">新会员专享</p>
          <p class="des">注册即领新人礼包</p>
          <img src="./assets/images/154225374444868674.png" alt="">
          <img src="./assets/images/154225374201525351.png" alt="">
        </div>
      </a>
      
      <div class="r5-right">
        <a href="">
          <div class="r5-right1">
            <p class="title">大牌助力</p>
            <p class="des">好货任性抢</p>
            <img src="./assets/images/154225379905368042.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="r5-right2">
            <p class="title">今日爆款</p>
            <p class="des">特价包邮</p>
            <img src="./assets/images/154225381446397945.png" alt="">
          </div> 
        </a>
        
      </div>
    </div>
    <div class="r6-img row">
      <a href="">
        <!-- <img src="./assets/images/152032453975251438.png" alt=""> -->
        <div class="r6-left">
          <p class="title">掌上抢</p>
          <p class="des">00点场 距离下场：</p>
          <div class="img-wrapper">
            <img v-for="(v,i) in r6imgurl.left" :src=v alt="">
          </div>
          
        </div>
      </a>
      <a href="">
        <div class="r6-right">
          <p class="title">苏宁Outlets</p>
          <p class="des">斯凯奇满198减100</p>
          <div class="img-wrapper">
            <img v-for="(v,i) in r6imgurl.right" v-lazy=v alt="">
          </div>
        </div>
      </a>
    </div>
    <div class="r7-img row">      
      <div class="r5-right">
        <a href="">
          <div class="r5-right1">
            <p class="title">大牌助力</p>
            <p class="des">好货任性抢</p>
            <img src="./assets/images/154225379905368042.jpg" alt="">
          </div>
        </a>
        <a href="">
          <div class="r5-right2">
            <p class="title">今日爆款</p>
            <p class="des">特价包邮</p>
            <img src="./assets/images/154225381446397945.png" alt="">
          </div> 
        </a>        
      </div>
      <a href="">
        <div class="r5-left">
          <p class="title">新会员专享</p>
          <p class="des">注册即领新人礼包</p>
          <img src="./assets/images/154225374444868674.png" alt="">
          <img src="./assets/images/154225374201525351.png" alt="">
        </div>
      </a>
    </div>
    <div class="welfare-img">
      <a href="">
        <img src="./assets/images/154227462258318439.gif" alt="">
      </a>   
    </div>
    <div class="title-img">
      <a href="">
        <img src="./assets/images/152837857674552675.png" alt="">
      </a>   
    </div>
    <div class="r9-img row">
      <a href="" v-for="(v,i) in r9data.r9list1">
        <div class="row-item" >
          <p class="title" >{{v.title}}</p>
          <p class="des">{{v.des}}</p>
          <img v-lazy=v.imgurl[0] alt="">
          <img v-lazy=v.imgurl[1] alt="">
        </div>
      </a>
      <div class="r9-right">
        <a href="" v-for="(v,i) in r9data.r9list2" >
          <div class="r9-right1">
            <p class="title">{{v.title}}</p>
            <p class="des">{{v.des}}</p>
            <img v-lazy=v.imgurl alt="">
          </div>
        </a>
      </div>
    </div>
    <v-footer>
    </v-footer> 
    <router-view></router-view>
  </div>
</template>

<script>
import footer from './components/index/footer.vue' 
import nav from './components/index/nav.vue' 
import enter from './components/index/enter.vue' 

export default {
  
  name: 'app',
  components:{
    'v-footer':footer,
    'v-nav':nav,
    'v-enter':enter,
   
  },
  data () {
    return {
      
      index:'',
      r9data:{
        r9list1:[
                  {
                    title:'城市专享',
                    des:'必抢好物 低至9.9元包邮',
                    imgurl:[
                      'src/assets/images/154225374201525351.png',
                      'src/assets/images/154225374444868674.png'
                    ]
                  },
                  {
                    title:'大聚惠',
                    des:'狂欢不落幕 优惠继续在',
                    imgurl:[
                      'src/assets/images/154225374201525351.png',
                      'src/assets/images/154225374444868674.png'
                    ]
                  },
                  {
                    title:'领券中心',
                    des:'美妆研制日 满199减100',
                    imgurl:[
                      'src/assets/images/154225374201525351.png',
                      'src/assets/images/154225374444868674.png'
                    ]
                  },
                  {
                    title:'苏宁国际',
                    des:'洋货预售 定金最高抵1000',
                    imgurl:[
                      'src/assets/images/154225374201525351.png',
                      'src/assets/images/154225374444868674.png'
                    ]
                  },
                  {
                    title:'新品首发',
                    des:'新iPad Pro开售 购机享好礼',
                    imgurl:[
                      'src/assets/images/154225374201525351.png',
                      'src/assets/images/154225374444868674.png'
                    ]
                  },
               ],
        r9list2:[
          {
            title:'0元试用',
            des:'华为mate20',
            imgurl:'src/assets/images/154225374201525351.png'
          },
          {
            title:'苏宁声生鲜',
            des:'每满99减30',
            imgurl:'src/assets/images/154225374444868674.png'
          }
        ]

    },
    bannerdata:[
      'src/assets/images/154235319438682232.webp',
      'src/assets/images/154210763958198166.webp',
      'src/assets/images/154226373165635894.webp',
      'src/assets/images/154211304776694988.gif',
      'src/assets/images/154211304776694988.gif',
      'src/assets/images/154211304776694988.gif',
    ],
    welfareimg:'src/assets/images/154228529748454557.webp',
    r6imgurl:{
      left:['src/assets/images/10019040810587065093picH_1.jpg','src/assets/images/100188543122587216picH_1 (1).jpg'],
      right:['src/assets/images/0010149656000000010623610870.webp','src/assets/images/0010153515000000010612014413.webp']    }

    }
  },

 
}
</script>

<style >
#app{
  padding-bottom: 2.5rem;
}
#app>div{
  background-color: #fff;
}
.enter-wrapper{
  background-color: #fff;
}
/*轮播图*/
#app .mint-swipe-items-wrap{
  height:7.7rem
}
.mint-swipe-items-wrap img{
  width:100%;
  height: 7.7rem
}
#app .mint-swipe-indicator.is-active{
  transform: scaleX(2);
  border-radius: 2px;
  background-color: #fff;
}
#app .mint-swipe-indicator{
  margin-left: 0.2rem;
  opacity:1;
  background-color: #fff;
  transition: all 0.2s;
  width: 0.26rem;
  height: 0.26rem;
}
/*隔行*/


/*福利图片链接*/
.welfare-img img,.title-img img{
  width: 100%;

}

.newpeople{
  margin-top: 0.68rem
}

/*组件头部*/
.mint-header-button{
    background-color: #fff;
    color: #333;

}
.mintui{
  font-size:0.9rem 
}
.mint-header{
  background-color: #fff;
  height: 1.76rem;
  color:#66a6ff;
}
.mint-header-title{
  overflow:visible;
  font-weight: bolder;
  font-size: 0.7rem;
}
div.whitebox{
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height:100%; 
    overflow: auto;
}
.whitebox{
  background-color: #fff
}

.row{
  display: flex;
  padding: 0.2rem;
}
.row .title{
  font-size: 0.62rem;
  font-weight: bolder;
  margin-left: 0.3rem;
  line-height: 1rem;
  color: #333
}
.row .des{
  margin-left: 0.3rem;
  font-size: 0.48rem;
  color: #999;
}
.row .r5-left .title{
  color: #FF6A0C;
}
.row .r5-right1 .title,.row .r5-right1 .des{
  color: #e62e2e
}
.row .r5-right2{
  color: #333333
}
 .r5-img .r5-right2 .des{
  color: #999999
}
.row .r5-img .des{
color: #FA4B49
}
.row>div,.row>a{
  width:50%;
  flex-grow: 0;
  
}
.row a{
  z-index: 2;
  position: relative;
}
.row a>img{
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.row .img-wrapper{
  display: flex;
}
.row .img-wrapper img{
  flex:1;
}
.row img{
  width: 2.8rem;
  height: 2.8rem;
  margin: 0.4rem 0.4rem 0;
}
.r5-right>div,.r5-right>a{
  float: left
}
.r6-img{
  margin-top: 0.68rem;
}
.r9-img{
  flex-wrap: wrap;
}
.r9-right a{
  float: left;
}
</style>
