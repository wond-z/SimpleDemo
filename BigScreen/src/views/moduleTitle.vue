<template>
  <!-- 标题 -->
  <div class="module-box ">
    <div style="flex:0 1 30%">
      <dv-decoration-10 style="height:5px;" />
    </div>
    <div style="flex:0 1 40%">
      <div class="d-flex">
        <dv-decoration-8 style="height:50px;flex:1;" />
        <div style="flex:1;font-size: 2.4em;font-weight: bold;" class="box-middle tc">大屏可视化</div>
        <dv-decoration-8 :reverse="true"  style="height:50px;flex:1;" />
      </div>
    </div>
    <div style="flex:0 1 30%">
      <dv-decoration-10 style="height:5px; transform:rotateY(180deg);"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>
