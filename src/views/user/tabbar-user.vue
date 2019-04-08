<template>
  <div class="tabbar-user">
    <user-header/>
    <user-order/>
    <user-tool/>
    <user-barnd/>
  </div>
</template>

<script>
  import userHeader from './tabbar-user-header';
  import userOrder from './tabbar-user-order';
  import userTool from './tabbar-user-tool';
  import userBarnd from './tabbar-user-barnd';
  export default {
    name: "user",
    components:{
      userHeader,
      userOrder,
      userTool,
      userBarnd
    }
  }
</script>

<style scoped lang="less">

</style>
