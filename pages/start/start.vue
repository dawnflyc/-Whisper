<template>
	<view>
		<view class="menu" >	
		<view @click="go('encrypt')" >发送</view>
		<view @click="go('decrypt')">接收</view>
		<view @click="go('keylist')" >钥串</view>
		<view @click="go('gen')" >生成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: new Date()
			}
		},
		onLoad() {
			
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.menu{
		display: flex;
		flex-direction: column;
		view{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 20rpx 0;
			background-color: #FFFFFF;
			border: 1rpx solid #dedde2;
			padding: 20rpx 0;
			
		}
	}
</style>
