<template>
  <div class="tabbar-user">
    <user-header/>
    <user-order/>
    <user-tool/>
    <user-barnd/>
    <user-recom/>
    <navBottom/>
  </div>
</template>

<script>
  import userHeader from './tabbar-user-header';
  import userOrder from './tabbar-user-order';
  import userTool from './tabbar-user-tool';
  import userBarnd from './tabbar-user-barnd';
  import userRecom from './tabbar-user-recom';
  import navBottom from '@/components/navBottom';
  export default {
    name: "user",
    components:{
      userHeader,
      userOrder,
      userTool,
      userBarnd,
      userRecom,
      navBottom
    }
  }
</script>

<style scoped lang="less">
  .tabbar-user{
    margin-bottom:60px;
  }
</style>
