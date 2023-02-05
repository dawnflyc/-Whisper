<template>
	<view>
		<view class="from">
			<view class="input">
				<view class="label" style="display: flex;justify-content: space-between;">
					<view>公钥:</view>
					<view style="color: #2998ff;" @click="go('guide')" >使用说明</view>
				</view>
				<textarea  :maxlength="-1" v-model="key" />
			</view>
			<view class="input">
				<view class="label">
					数据:
				</view>
				<textarea  :maxlength="-1" v-model="msg" />
			</view>
			<view class="input">
				<view class="label">
					加密后信息:(<text @click="copy(encryMsg)" style="color: #007AFF;">点击复制</text>)
				</view>
				<textarea  :maxlength="-1" v-model="encryMsg" />
			</view>
			<button class="button"  @click="encry" >加密</button>
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
				encryMsg:''
			}
		},
		onLoad(option) {
			if(option.name){
				this.key = uni.getStorageSync("keylist")[option.name]
			}
		},
		methods: {
			encry(){
				let encryptor = new JSEncrypt()
				encryptor.setPublicKey(this.key)
				this.encryMsg = encryptor.encrypt(this.msg) || "加密失败"
				
			}
		}
	}
</script>

<style lang="scss" scoped >
</style>
