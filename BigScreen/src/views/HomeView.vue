<template>
  <div class="content bg">
    <dv-full-screen-container>
      <dv-loading v-if="loading">Loading...</dv-loading>

      <div v-else>
        <!-- 标题 -->
        <ModuleTitle />
        <!-- 主体模块 -->
        <ModuleMain />

        <!-- 第三模块 -->
        <ModuleThird />
      </div>
      
    </dv-full-screen-container>
  </div>
</template>

<script>
import ModuleTitle from './moduleTitle.vue'
import ModuleMain from './moduleMain.vue'
import ModuleThird from './moduleThird.vue'

export default {
  data(){
    return {
      loading:true
    }
  },
  components:{
    ModuleTitle,
    ModuleMain,
    ModuleThird
  },
  mounted(){
    setTimeout(()=>{
      this.loading = false;
    },1000)
  }
}
</script>
