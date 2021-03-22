<template>
	<div>
		<view class="wrap">
			<u-swiper :list="list"></u-swiper>
		</view>
		<view class="price">
			￥{{data.price}}
		</view>
		<view class="pricing">
			定价￥{{data.pricing}}
		</view>
		<view class="">
			<text class="way">{{data.way}}</text><text class="describe">{{data.describe}}</text>
		</view>
		<view style="margin: 30rpx 0;">
			<u-divider fontSize="35rpx" margin-top="30rpx">编辑推荐</u-divider>
		</view>
		<view class="recommended">
			{{data.recommended}}
		</view>
		<view class="author1">
			{{data.author1}}
		</view>
		<view class="Introduction1">
			{{data.Introduction1}}
		</view>
		<view class="author2">
			{{data.author2}}
		</view>
		<view class="Introduction">
			{{data.Introduction}}
		</view>
		<image :src="data.details" mode=""></image>
		<view class="foot">
			<view class="icon">
			<u-icon name="calendar" color="#F33017" size="80"></u-icon></br>
				店铺
			</view>
			<view class="icon">
			<u-icon name="shopping-cart" color="#262626" size="80"></u-icon></br>
				购物车
			</view>
			<u-button style="margin-top: 20rpx;" type="error">加入购物车</u-button>
			<u-button style="margin-top: 20rpx;" type="warning">立即购买</u-button>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
				],
			}
		},
		onLoad(option) {
			let item = JSON.parse(option.item)._id
			console.log(item)
			uni.showLoading({
				title: "加载中...."
			})
			uni.request({
				url: `${this.$api}/getDetails`,
				method: 'POST',
				data: {
					id: item
				},
				success: res => {
					this.data = res.data.data
					this.list[0].image = res.data.data.image1
					this.list[1].image = res.data.data.image2
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading()
				}
			});
		}
	}
</script>

<style scoped>
	.price {
		color: red;
		font-size: 45rpx;
		margin: 20rpx;
	}

	.pricing {
		font-size: 26rpx;
		margin:0 0 30rpx 20rpx;
		text-decoration: line-through;
		color: #666666;
	}
	.way{
		color: white;
		background-color: red;
		font-size: 26rpx;
		border-radius: 6rpx;
		margin-left: 20rpx;
	}
	.describe{
		font-weight: 700;
		line-height: 45rpx;
	}
	.Introduction1,
	.Introduction,
	.recommended{
		color: #333333;
		font-size: 24rpx;
		line-height: 36rpx;
	}
	.author2,
	.author1{
		margin: 20rpx 0;
	}
	image{
		height: 4500rpx;
		margin-bottom: 120rpx;
		width: 100%;
	}
	.foot{
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		width: 100%;
		background-color: white;
	}
	.icon{
		width: ;
		text-align: center;
		margin: 0 20rpx;
	}
	
</style>
