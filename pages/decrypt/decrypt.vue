<template>
	<view>
		<view class="from">
			<view class="input">
				<view class="label">
					私钥:
				</view>
				<textarea  :maxlength="-1" v-model="key" />
			</view>
			<view class="input">
				<view class="label">
					信息:
				</view>
				<textarea  :maxlength="-1" v-model="msg" />
			</view>
			<view class="input">
				<view class="label">
					解密后信息:
				</view>
				<textarea  :maxlength="-1" v-model="decryMsg" />
			</view>
			<button class="button" @click="decry" >解密</button>
		</view>
	</view>
</template>

<script>
	import JSEncrypt from '../../js/jsencrypt.js'
	export default {
		data() {
			return {
				key:'',
				msg:'',
				decryMsg:''
			}
		},
		onLoad() {
						this.key = uni.getStorageSync("prikey")
		},
		methods: {
			decry(){
				let encryptor = new JSEncrypt()
				encryptor.setPrivateKey(this.key)
				this.decryMsg = encryptor.decrypt(this.msg) || "加密失败"
			}
		}
	}
</script>

<style lang="scss" scoped >
	// .from{
	// 	padding: 10rpx;
	// 	.input{
	// 		.label{
	// 			padding: 10rpx 0;
	// 		}
	// 		textarea,input{
	// 			border: 5rpx solid #d3d3d3;
	// 			width: 100%;
	// 		}
	// 	}
	// 	button{
	// 		margin: 20rpx 0;
	// 	}
	// }
</style>
