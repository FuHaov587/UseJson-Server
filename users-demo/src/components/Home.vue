<template>
  <div class="home container">

    <Alter v-if="alert" :message="alert"/>
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='user in users' :key='user.id'>
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td><router-link :to="'/Details/'+user.id" class="btn btn-default">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alter from './Alert'
export default {
  name: 'home',
  components: {Alter},
  data () {
    return {
      users: [],
      alert: ''
    }
  },
  methods: {
    getAllUser(){
      this.$http.get('http://localhost:3000/users').then(res => {
        this.users = res.body
      })
    }
  },
  created(){
    this.getAllUser()
  },
  updated(){
    this.alert = this.$route.query.alert
  }
}
</script>

<style scoped>

</style>
