<template>
	<div class="box">
		<view class="context" v-for="item in data" :key="item._id" @click="handle(item)">
			<image :src="item.image" mode=""></image>
			<view class="word">
				<text class="way" v-if="item.way">{{item.way}}</text> 
				<text class="describe">{{item.describe}}</text>
			</view>
			<view class="price">
				￥{{item.price}}
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: []
			}
		},
		methods: {
			getData() {
				uni.showLoading({
					title: "加载中...."
				})
				uni.request({
					url: `${this.$api}/home/display`,
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
			handle(e){
				uni.navigateTo({
					url:`../../pages/details/details?item=${JSON.stringify(e)}`
				})
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		margin: auto;
		padding: 20rpx 2.5% 0;
		background-color: #F6F6F6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.context {
		height: 548rpx;
		background-color: white;
		border-radius: 20rpx;
		width: 48%;
		overflow: hidden;
		margin-top: 20rpx;
	}

	image {
		height: 346rpx;
		width: 100%;

	}

	.word {
		display: -webkit-box;
		display: -moz-box;
		text-overflow: -o-ellipsis-lastline;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		/*控制文本行数，多少行以后开始省略号 */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 25rpx;
		text-indent: 1em;
		height: 70rpx;
	}

	.way {
		background-color: #E93B3D;
		color: white;
		padding: 0 5rpx;
		border-radius: 10rpx;
	}

	.describe {
		color: #666666;
	}
	.price{
		color: red;
		margin-top: 30rpx;
		font-size: 38rpx;
	}
</style>
