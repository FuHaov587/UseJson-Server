<template>
  <div class="hello container">
    <h1 class="page-header">添加用户</h1>
    <form @submit.prevent="addUser">
      <div class="well">
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" v-model="userInfo.name">
        </div>
        <div class="form-group">
          <label>性别</label>
          <select v-model="userInfo.gender" class="form-control">
            <option value="男" selected>男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" v-model="userInfo.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" v-model="userInfo.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" v-model="userInfo.education">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" v-model="userInfo.intro" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary form-control">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      userInfo:{}
    }
  },
  methods:{
    addUser(){
      // let user = this.userInfo
      if( this.userInfo.name != '' && this.userInfo.phone != '' && this.userInfo.email != ''){
        this.$http.post('http://localhost:3000/users',this.userInfo).then(res=>{
          this.$router.push({path: '/', query: {alert: '用户信息添加成功'}})
        })
      }else{
        console.log('请将信息填写完整')
      }
    }
  }
}
</script>
