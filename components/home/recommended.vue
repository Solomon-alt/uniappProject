<template>
	<div class="box">
		<view class="container">
			<view @click="handle(item)" class="context" v-for="(item,index) in data" :key="index" :class="{active:index ===0||index===1}">
				<view class="title">
					{{item.title}}
				</view>
				<view class="describe">
					{{item.describe}}
				</view>
				<view class="img">
					<image :src="item.img" mode=""></image>
					<image :src="item.image" mode=""></image>
				</view>
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				data:[]
			}
		},
		methods:{
			getData(){
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: `${this.$api}/home/getRecommended`,
					method: 'GET',
					data: {},
					success: res => {
						this.data = res.data.data
					},
					fail: () => {},
					complete: () => {
						uni.hideLoading()
					}
				});
			},
			handle(item){
				// uni.navigateTo({
				// 	// url:`../../pages/details/details?item=${JSON.stringify(item)}`
				// })
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>

<style scoped>
.box{
	height: 480rpx;
	background-color: #F6F6F6;
}
.container{
	width: 95%;
	height: 100%;
	margin: auto;
	background-color: #fff;
	border-radius: 20rpx;
}
	
.context{
	width: 25%;
	height: 50%;
	float: left;
}
.active{
	width: 50%!important;
}
.title{
	font-weight: 700;
	font-size: 35rpx;
}
.img{
	width: 100%;
	height: 152rpx;
	display: flex;
	justify-content: space-around;
	padding-top: 10%;
}
image{
	height: 90%;
	width: 48%;
}
</style>