<template>
  <!-- 添加模块 -->
  <div class="module-box ">
    <!-- 三行三等分 -->
    <div style="flex:0 1 25%">
      <dv-border-box-10 style="width:100%;height:200px;">
        <CapsuleChart />
      </dv-border-box-10>
      <dv-border-box-1 style="width:100%;height:200px;"><WaterChart /></dv-border-box-1>
      <dv-border-box-8 style="width:100%;height:200px;"><PercentChart /></dv-border-box-8>
    </div>
    <div style="flex:0 1 50%">
      <dv-border-box-7 style="width:100%;height:600px;"><FlylineChart /></dv-border-box-7>
    </div>
    <div style="flex:0 1 25%">
      <dv-border-box-9 style="width:100%;height:300px;">
        <dv-charts :option="option1" />
      </dv-border-box-9>
      <dv-border-box-10 style="width:100%;height:300px;"></dv-border-box-10>
    </div>
  </div>

</template>

<script>
import CapsuleChart from './chart/capsuleChart.vue'
import WaterChart from './chart/waterChart.vue'
import PercentChart from './chart/percentChart.vue'
import FlylineChart from './chart/flylineChart.vue'

export default {
  components:{
    CapsuleChart,
    WaterChart,
    PercentChart,
    FlylineChart
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
    }
  }
}
</script>
