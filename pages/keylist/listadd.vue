<template>
	<view>
		<view class="from">
			<view class="input">
				<view class="label">
					名称:
				</view>
				<input type="text" v-model="name" />
			</view>
			<view class="input">
				<view class="label">
					公钥:
				</view>
				<textarea  :maxlength="-1" v-model="key" />
			</view>
			<button class="button"  @click="add" >{{mode ? "修改" : "增加"}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode:0,   //0增 1修
				name:'',
				key:''
			}
		},
		onLoad(option) {
			if(option.name){
				this.mode = 1
				uni.setNavigationBarTitle({
					title:"修改"
				})
				let list = uni.getStorageSync("keylist")
				if(list){
					this.name = option.name
					this.key = list[option.name]
				}
			}
		},
		methods: {
			add(){
				let list = uni.getStorageSync("keylist")
				if(!list){
					list = {}
				}
				if(!this.mode && list[this.name]){
					uni.showToast({
						title:"已存在"
					})
					return;
				}
				list[this.name] = this.key
				uni.setStorageSync("keylist",list)
				uni.showToast({
					title:"成功"
				})
				setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},500)
			}
		}
	}
</script>

<style>

</style>
