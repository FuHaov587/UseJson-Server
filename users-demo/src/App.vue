<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <span class="navbar-brand">用户管理系统</span>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link  to='/'>Home</router-link></li>
            <li><router-link  to='/About'>About</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link  to='/Add'>Add</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
</style>
