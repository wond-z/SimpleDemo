<template>
  <dv-water-level-pond :config="config" style="width:100%;height:100%;" />
</template>

<script>
export default {
  data(){
    return {
      config:{
        data: [66, 45],
        shape: 'roundRect'
      }
    }
  }
}
</script>
