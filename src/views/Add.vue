<template>
  <div id="add">
    <Top msg="Add a new card" />
    <CardForm />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  name: 'Add',
  components: { Top, CardForm }
}
</script>

<style>
#add {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>