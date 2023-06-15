<template>
  <dv-percent-pond :config="config" style="width:100%;height:200px" />
</template>

<script>
export default {
  data(){
    return {
      config:{
        value: 66
      }
    }
  }
}
</script>
