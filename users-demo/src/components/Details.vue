<template>
  <div class="hello container">
    <router-link to='/' class="btn btn-default">返回</router-link>
      <h1 class="page-header">
        {{ user.name }}
        <span class="pull-right">
          <router-link :to="'/Update/' + user.id" class="btn btn-success">编辑</router-link>
          <button @click='delUser(user.id)' class="btn btn-danger">删除</button>
        </span>
      </h1>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-user"></span>
          <span>{{ user.gender }}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-phone"></span>
          <span>{{ user.phone }}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-envelope"></span>
          <span>{{ user.email }}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-education"></span>
          <span>{{ user.education }}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-bookmark"></span>
          <span>{{ user.intro }}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Details',
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
    delUser(id){
      this.$http.delete(`http://localhost:3000/users/${id}`).then(res => {
        this.$router.push({path: '/', query:{alert: '用户删除成功!'}})
      })
    }
  },
  created(){
    this.getInfoById(this.$route.params.id)
  }
}
</script>
