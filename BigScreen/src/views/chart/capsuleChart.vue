<template>
  <dv-capsule-chart :config="config" style="width:100%;height:200px" />
</template>

<script>
export default {
  props:{
    chartColor:{
      type:Array,
      deault:()=>['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff']
    },
    chartData:{
      type:Array,
      default:()=>
      [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          },
        ]
    }
  },
  data(){
    return {
      config:{
        data: this.chartData,
        colors: this.chartColor,
        unit: '单位',
        showValue: true
      }
    }
  }
}
</script>
