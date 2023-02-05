<template>
	<view>
		<view class="list">
			<view class="item" v-for="(key,name) in keylist" :key="name" >
				<view class="name">{{name}}</view>
				<view class="oper">
					<view class="send" @click="send(name)">发</view>
					<view class="mod" @click="mod(name)" >改</view>
					<view class="del" @click="del(name)" >删</view>
				</view>
			</view>
		</view>
		<button class="button" @click="go('listadd')" >添加</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keylist:{}
			}
		},
		onShow() {
			this.keylist = uni.getStorageSync("keylist")
		},
		methods: {
			send(name){
				this.go("encrypt",{name:name})
			},
			mod(name){
				this.go("listadd",{name:name})
			},
			del(name){
				this.$delete(this.keylist,name)
				this.keylist = this.keylist
				uni.setStorageSync("keylist",this.keylist)
				uni.showToast({
					title:"删除成功"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		display: flex;
		flex-direction: column;

		.item {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 20rpx;
			margin: 20rpx 0;

			.oper {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				view{
					margin: 0 10rpx;
				}
			}
		}
	}
</style>
