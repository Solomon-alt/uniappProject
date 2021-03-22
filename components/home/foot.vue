<template>
	<div class="box">
		<view class="container">
			<view class="context">
				登录
			</view>
			<view class="context">
				注册
			</view>
			<view class="context">
				客户服务
			</view>
			<view class="contexts">
				返回顶部
			</view>
		</view>
		<view class="icon">
			<image src="https://m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png" mode=""></image>
			<image src="https://m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png" mode=""></image>
			<image src="https://m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png" mode=""></image>
		</view>
		<view class="copyRight">
			Copyright © 2004-2020 京东JD.com 版权所有
		</view>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.box {
		margin-top: 20rpx;
	}

	.container {
		display: flex;
		justify-content: space-around;
		padding: 30rpx 0;
	}

	.context {
		border-right: 1rpx solid #D8D8D8;
		padding: 0 50rpx;
	}

	.contexts {
		padding: 0 50rpx;
	}
	.icon{
		display: flex;
		justify-content: space-around;
		padding:  20rpx 0;
	}
	image {
		width: 120rpx;
		height: 120rpx;
	}
	.copyRight{
		color: #666666;
		padding:  20rpx 0;
		text-align: center;
	}
</style>
