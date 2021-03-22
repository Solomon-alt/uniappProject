<template>
	<div class="box">
		<swiper class="swiper" @change="change">
			<swiper-item>
				<u-grid :col="5" hover-class="hover-class">
					<u-grid-item @click="click(item)" v-for="(item, index) in list1" :index="index" :key="index">
						<image :src="item.image" mode=""></image>
						<text class="grid-text">{{ item.title }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
			<swiper-item>
				<u-grid :col="5">
					<u-grid-item @click="click(item)" v-for="(item, index) in list2" :index="index + 9" :key="index">
						<image :src="item.image" mode=""></image>
						<text class="grid-text">{{ item.title  }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list1: [],
				list2: [],
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			click(e) {
				console.log(e)
			}
		},
		mounted() {
			uni.showLoading({
				title: "加载中..."
			})
			uni.request({
				url: `${this.$api}/home/getServe`,
				method: 'GET',
				data: {},
				success: res => {
					this.list1 = res.data.data.slice(0, 10)
					this.list2 = res.data.data.slice(10)
				},
				fail: () => {},
				complete: () => {
					uni.hideLoading()
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	.box {
		margin-top: 40rpx;
		height: 324rpx;
		background-color: #F6F6F6;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.swiper {
		height: 480rpx;
	}

	.indicator-dots {
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.indicator-dots-item {
		background-color: $u-tips-color;
		height: 6px;
		width: 6px;
		border-radius: 10px;
		margin: 0 3px;
	}

	.indicator-dots-active {
		background-color: $u-type-primary;
	}

	image {
		width: 50rpx;
		height: 50rpx;
	}
</style>
