<template>
  <a-card :bordered="false">
    <a-tabs defaultActiveKey="1">
      <!-- 餅圖 -->
      <a-tab-pane tab="計算" key="1">
        <a-row :gutter="24">
          <a-col :span="4" >
            <pie title="'餅圖'" :dataSource="instanceUsage" :height="height" />
            <h4 :style="{textAlign:'center'}">實例:   {{ instanceUsageText }}</h4>
          </a-col>
          <a-col :span="4">
            <pie title="餅圖" :dataSource="vcpuUsage" :height="height"/>
            <h4 :style="{textAlign:'center'}">VCPU:   {{ vcpuUsageText }}</h4>
          </a-col>
          <a-col :span="4">
            <pie title="餅圖" :dataSource="ramUsage" :height="height"/>
            <h4 :style="{textAlign:'center'}">內存:   {{ ramUsageText }}</h4>
          </a-col>
        </a-row>
        <a-row>
          <ProjectInstanceList ref="projectInstanceList" :select-project-id="selectProjectId"/>
        </a-row>

      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
  import Pie from '@/components/chart/Pie'
  import ProjectInstanceList from './ProjectInstanceList'
  import { getAction,httpAction } from '@/api/manage'

  export default {
    name: 'ProjectSurvey',
    components: {
      Pie,
      ProjectInstanceList
    },
    data() {
      return {
        height: 240,
        rankList: [],
        barData: [],
        areaData: [],
        instanceUsage:[],
        vcpuUsage:[],
        ramUsage:[],
        instanceUsageText:'',
        vcpuUsageText:'',
        ramUsageText:'',
        url: {
          getProjectLimits:"/openstack/projectSurvey/getProjectLimits",
        },
        selectProjectId:''
      }
    },
    created() {
      let data = this.$route.params;
      this.selectProjectId = data.projectId;
      setTimeout(() => {
        this.loadProjectLimits({projectId:this.selectProjectId})
      }, 100)
    },
    methods: {
      loadData(x, y, max, min, before = '', after = '月') {
        let data = []
        for (let i = 0; i < 12; i += 1) {
          data.push({
            [x]: `${before}${i + 1}${after}`,
            [y]: Math.floor(Math.random() * max) + min
          })
        }
        return data
      },
      // 加載專案概況數據
      loadProjectLimits(record) {
        this.instanceUsage = [];
        this.vcpuUsage = [];
        this.ramUsage = [];

        getAction(this.url.getProjectLimits,record).then((res)=>{
          if(res.success){
            let result = res.result.absolute
            this.instanceUsage.push({
              item: '已使用',
              count: result.totalInstancesUsed
            })
            this.instanceUsage.push({
              item: '未使用',
              count: result.maxTotalInstances - result.totalInstancesUsed
            })
            this.instanceUsageText = '已使用 '+result.totalInstancesUsed+' of '+result.maxTotalInstances;

            this.vcpuUsage.push({
              item: '已使用',
              count: result.totalCoresUsed
            })
            this.vcpuUsage.push({
              item: '未使用',
              count: result.maxTotalCores - result.totalCoresUsed
            })
            this.vcpuUsageText = '已使用 '+result.totalCoresUsed+' of '+result.maxTotalCores;

            this.ramUsage.push({
              item: '已使用',
              count: result.totalRAMUsed
            })
            this.ramUsage.push({
              item: '未使用',
              count: result.maxTotalRAMSize - result.totalRAMUsed
            })
            this.ramUsageText = '已使用 '+result.totalRAMUsed+' of '+result.maxTotalRAMSize;
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
