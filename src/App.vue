<template>
  <div id="app">
    <transition name="flip-y">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
#app {
  width: 100vw;
  background: #e5e5e5;
  padding: 5%;
  box-sizing: border-box;
  font-family: "PT Mono", sans-serif;
  text-transform: uppercase;
  text-align: center;
}
</style>
