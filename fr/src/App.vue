<template>
  <div id="app">
    <nav class="nav navbar-expand bg-dark navbar-dark">
      <a href="/" class="navbar-brand">app quan ly danh ba</a>
      <div class="mr-auto navbar nav">
        <li class="nav-item">
          <router-link to="/contactbook" class="nav-link">
            danh ba
            <i class="fas fa-address-book"></i>
          </router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
