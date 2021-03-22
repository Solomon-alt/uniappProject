<template>
	<div class="box">
		<view class="container">
			<view class="title">
				<view class="left">
					<view class="jdms">
						京东秒杀
					</view>
					<view class="word">
						10
						<image class="img" src="https://wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/seckill-time-to_1de70c91.png"
						 mode=""></image>
					</view>
					<view class="countdown">
						<text>{{hour}}</text>:<text>{{minutes}}</text>:<text>{{second}}</text>
					</view>
				</view>
			</view>
			<view class="goods">
				<view class="context">
					<view class="item" v-for="item in seckill" :key="item._id" @click="handle(item)">
						<image class="imgs" :src="item.image" mode=""></image>
						<view style="color: red;">
							￥{{item.current_price}}
						</view>
						<view style="color: #333333;text-decoration: line-through;">
							￥{{item.old_price}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hour: "",
				minutes: '',
				second: '',
				timer: '',
				seckill: [],
			}
		},
		methods: {
			// 每天十点倒计时
			getTime() {
				let now = Date.now();
				let deadline = 10;
				this.timer = setInterval(() => {
					const ten = new Date();
					if (new Date(now).getHours() > deadline) {
						ten.setDate(new Date(now).getDate() + 1);
					}
					ten.setHours(deadline);
					ten.setMinutes(0);
					ten.setSeconds(0);
					const interval = Math.ceil(ten.valueOf() - new Date(now).valueOf()) / 1000;
					const hou = Math.floor(interval / 3600);
					const minute = Math.floor((interval % 3600) / 60);
					const secon = Math.floor(interval % 60);
					now = Date.now();
					let hour = hou > 9 ? hou : '0' + hou
					let minutes = minute > 9 ? minute : '0' + minute
					let second = secon > 9 ? secon : '0' + secon
					this.hour = hour
					this.minutes = minutes
					this.second = second
				}, 1000);
			},
			getData() {
				uni.showLoading({
						title: "加载中..."
					}),
					uni.request({
						url: `${this.$api}/home/seckill`,
						method: 'GET',
						data: {},
						success: res => {
							this.seckill = res.data.data
						},
						fail: () => {},
						complete: () => {
							uni.hideLoading()
						}
					});
			},
			handle(e) {
				console.log(e)
				uni.navigateTo({
					url:`../../pages/details/details?item=${JSON.stringify(e)}`
				})
			}
		},
		mounted() {
			this.getTime()
			this.getData()
		},
		beforeDestroy() {
			clearInterval(this.timer);
		}
	}
</script>

<style scoped>
	.box {
		height: 320rpx;
		background-color: #F6F6F6;
		overflow: hidden;
	}

	.container {
		overflow: hidden;
		height: 280rpx;
		margin: 20rpx auto;
		width: 95%;
		border-radius: 20rpx;
		background-color: #fff;
	}

	.title {
		display: flex;
		justify-content: space-between;
		height: 68rpx;
		line-height: 68rpx;
	}

	.left {
		display: flex;
	}

	.jdms {
		color: #666666;
		margin: 0 30rpx;
	}

	.word {
		color: red;
	}

	.img {
		height: 40rpx;
		width: 40rpx;
		margin-right: 20rpx;
	}

	text {
		background-color: red;
		color: white;
		border-radius: 10rpx;
	}

	.goods {
		width: 100%;
		height: 208rpx;
		overflow: auto;
	}

	.context {
		width: 200%;
		height: 208rpx;
		display: flex;
	}

	.item {
		flex: 10%;
		text-align: center;
	}

	.imgs {
		width: 100%;
		height: 120rpx;
	}
</style>
