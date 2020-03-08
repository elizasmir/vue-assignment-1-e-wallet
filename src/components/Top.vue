<template>
    <h1> {{msg}} </h1>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style>
h1 {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 100%;
  text-transform: uppercase;
  color: #222222;
}
</style>