<template>
	<div>
		<!-- 顶部搜索框和轮播图 -->
		<inputAndSilde></inputAndSilde>
		<!-- 服务 -->
		<serve></serve>
		<!-- 秒杀 -->
		<seckill></seckill>
		<!-- 推荐 -->
		<recommended></recommended>
		<!-- 展览图 -->
		<display></display>
		<!-- 最底部 -->
		<foot></foot>
	</div>
</template>

<script>
	import inputAndSilde from "../../components/top/Header.vue"
	import serve from "../../components/home/Serve.vue"
	import seckill from "../../components/home/Seckill.vue"
	import recommended from "../../components/home/recommended.vue"
	import display from "../../components/home/display.vue"
	import foot from "../../components/home/foot.vue"
	export default {
		components:{
			inputAndSilde,serve,seckill,recommended,display,foot
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped>

</style>
