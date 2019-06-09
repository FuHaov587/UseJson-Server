<template>
  <div class="update container">
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit.prevent="change">
      <div class="well">
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <label>性别</label>
          <select v-model="user.gender" class="form-control">
            <option value="男" selected>男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" v-model="user.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" v-model="user.education">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" v-model="user.intro" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary form-control">确定</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Update',
  data () {
    return {
      user:{}
    }
  },
  methods:{
     getInfoById(id){
      this.$http.get(`http://localhost:3000/users/${id}`).then(res => {
        this.user = res.body
      })
    },
    change(){
      if( this.user.name != '' && this.user.phone != '' && this.user.email != ''){
        this.$http.put(`http://localhost:3000/users/${this.user.id}`,this.user).then(res=>{
          this.$router.push({path: '/', query: {alert: '用户更新添加成功'}})
        })
      }else{
        console.log('请将信息填写完整')
      }
    }
  },
  created(){
    this.getInfoById(this.$route.params.id)
  }
}
</script>

