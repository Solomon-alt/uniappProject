<template>
	<div class="box">
		<view class="container">
			<view class="icon">
				<u-icon name="list-dot" color="#fff" size="60"></u-icon>
			</view>
			<view class="input">
				<u-input v-model="value" @focus="focus" :type="type" :border="border" @confirm="confirm" />
			</view>
			<view class="portrait">
				<u-icon name="account" color="#fff" size="60"></u-icon>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="silde">
			<u-swiper :list="list" circular mode="dot" @click=handleItem indicator-pos="bottomRight" height=280></u-swiper>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true,
				data: '',
				list: [],
			}
		},
		methods: {
			//点击键盘回车事件==============================
			confirm() {
				// let arr = JSON.parse(localStorage.getItem("history"))
				// arr.push(this.value)
				// localStorage.setItem("history", JSON.stringify(arr))
			},
			getHistory() {
				// let search = JSON.parse(localStorage.getItem("history"))
				// if (!search) {
				// 	let arr = []
				// 	localStorage.setItem("history", JSON.stringify(arr))
				// } else {
				// 	this.data = search
				// }
			},
			//输入框获取键盘事件========================================
			focus() {
				console.log(111)
			},
			getSlide() {
				console.log(165165)
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: 'http://localhost:7001/home/slide',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res)
						this.list = res.data.data
					},
					fail: () => {},
					complete: () => {
						uni.hideLoading()
					}
				});
			},
			handleItem(index){
				console.log(this.list[index])
				uni.navigateTo({
					url:`../../pages/details/details?item=${JSON.stringify(this.list[index])}`
				})
			}
		},
		mounted() {
			uni.showLoading({
				title:"加载中..."
			})
			uni.request({
				url: `${this.$api}/home/slide`,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data.data)
					this.list = res.data.data
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
	.box {
		height: 374rpx;
		background-color: #C82519;
	}

	.container {
		display: flex;
		height: 88rpx;
	}

	.icon {
		width: 80rpx;
		line-height: 108rpx;
	}

	.input {
		flex: 1;
		margin-top: 5rpx;
	}

	.portrait {
		width: 90rpx;
		line-height: 108rpx;
	}

	.silde {
		width: 95%;
		height: 280rpx;
		margin: 40rpx auto;
	}
</style>
