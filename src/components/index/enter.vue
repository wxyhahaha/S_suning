<template>
	<div class="enter-wrapper"> 
      <ul class="enter-item">
        <li v-for="(v,i) in list">
        	<router-link :to=v.path	><img :src=v.imgurl alt=""><div class="title">{{v.title}}</div></router-link>
          
        </li>
      </ul>
    </div>
</template>
<script>
	export default{
		data(){
			return{

      list:[
      {
        title:'爆款手机',
        imgurl:'src/assets/images/hotphone.png',
        path:'/hotphone'
      },
       {
        title:'苏宁超市',
        imgurl:'src/assets/images/sumarketpng.png',
        path:'/cshome'
      },
       {
        title:'生活家电',
        imgurl:'src/assets/images/homeelec.png',
        path:'/cshome'
      },
       {
        title:'苏宁拼购',
        imgurl:'src/assets/images/supingou.png',
        path:'/cshome'
      },
       {
        title:'母婴玩具',
        imgurl:'src/assets/images/babytool.png',
        path:'/cshome'
      },
      {
        title:'大聚惠',
        imgurl:'src/assets/images/reduce_price.png',
        path:'/cshome'
      },
       {
        title:'赚钱',
        imgurl:'src/assets/images/makemoney.png',
        path:'/cshome'
      },
      {
        title:'领云钻',
        imgurl:'src/assets/images/zuanshi.png',
        path:'/cshome'
      },
      {
        title:'苏宁家电',
        imgurl:'src/assets/images/suelec.png',
        path:'/cshome'
      },
      {
        title:'分类',
        imgurl:'src/assets/images/classify2.png',
        path:'/cshome'
      },
      ]
			}
		}
	}
</script>
<style scoped="">
	/*链接*/
.enter-item{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
}
.enter-item li{
  text-align: center;
  flex:20%;
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
}
div.title{
  color: #333;
  font-size: 0.49rem
}
.enter-item a{
  flex:1;
  text-align: center;
  float: left;
}
.enter-item img{
  width: 11.8vw;

}
</style>