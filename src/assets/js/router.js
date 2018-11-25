import vueRouter from 'vue-router'
import hotphone from '../../components/hotphone/hotphone.vue'
import classfy from '../../components/classfy/classfy.vue'
import cshome from '../../components/suningcs/cshome.vue'
import login from '../../components/login/login.vue'
import bqlist from '../../components/bqlist/bqlist.vue'
import shopcar from '../../components/shopcar/shopcar.vue'
export default new vueRouter({
	routes:[
		{
			path:'/hotphone',component:hotphone
		},
		{
			path:'/classfy',component:classfy
		},
		{
			path:'/cshome',component:cshome
		},
		{
			path:'/login',component:login
		},
		{
			path:'/bqlist',component:bqlist
		},
		{
			path:'/shopcar',component:shopcar
		},
	]
})