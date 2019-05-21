<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Sign up</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.submit-button {
  width: 80px;
  height: 30px;
  color: white;
  background-color: green;
  border-radius: 10px;
  transition: background 0.2s ease-in-out;

  &:active {
    background-color: goldenrod;
  }

}
</style>
