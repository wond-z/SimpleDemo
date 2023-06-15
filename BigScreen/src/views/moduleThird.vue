<template>
    <!-- 添加模块 -->
    <div class="module-box ">
      <!-- 二行二等分 -->
      <div style="flex:0 1 20%">
        <dv-border-box-9 style="width:100%;height:200px;">dv-border-box-8</dv-border-box-9>
        <dv-border-box-10 style="width:100%;height:200px;"><CapsuleChart /></dv-border-box-10>
      </div>
      <div style="flex:0 1 20%">
        <dv-border-box-1 style="width:100%;height:200px;"><WaterChart /></dv-border-box-1>
        <dv-border-box-2 style="width:100%;height:200px;"><PercentChart /></dv-border-box-2>
      </div>
      <div style="flex:0 1 60%">
        <dv-border-box-8 style="width:100%;height:400px;">
          <WaterChart />
        </dv-border-box-8>
      </div>
      
    </div>
</template>

<script>
import CapsuleChart from './chart/capsuleChart.vue'
import WaterChart from './chart/waterChart.vue'
import PercentChart from './chart/percentChart.vue'

export default {
  components:{
    CapsuleChart,
    WaterChart,
    PercentChart
  },
  data(){
    return {
      option1:{
        title: {
          text: '剩余油量表',
          style: {
            fill: '#fff'
          }
        },
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 55 } ],
            center: ['50%', '55%'],
            axisLabel: {
              formatter: '{value}%',
              style: {
                fill: '#fff'
              }
            },
            axisTick: {
              style: {
                stroke: '#fff'
              }
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      },
      config1:{
        data: [
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
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位',
        showValue: true
      }
    }
  }
}
</script>
