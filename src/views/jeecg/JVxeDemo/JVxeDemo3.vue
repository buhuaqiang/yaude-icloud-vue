<template>
  <j-vxe-table
    ref="vTable"
    toolbar
    row-number
    row-selection
    keep-source
    :height="484"
    :dataSource="dataSource"
    :columns="columns"
    @valueChange="handleValueChange"
  />
</template>

<script>
  import moment from 'moment'
  import { randomNumber, randomUUID } from '@/utils/util'
  import { JVXETypes } from '@/components/jeecg/JVxeTable'

  export default {
    name: 'JVxeDemo2',
    data() {
      return {
        columns: [
          {
            title: '省/直轄市/自治區',
            key: 's1',
            type: JVXETypes.select,
            width: '240px',
            options: [],
            placeholder: '請選擇${title}'
          },
          {
            title: '市',
            key: 's2',
            type: JVXETypes.select,
            width: '240px',
            options: [],
            placeholder: '請選擇${title}'
          },
          {
            title: '縣/區',
            key: 's3',
            type: JVXETypes.select,
            width: '240px',
            options: [],
            placeholder: '請選擇${title}'
          }
        ],
        dataSource: [],
    
        mockData: [
          { text: '北京市', value: '110000', parent: null },
          { text: '天津市', value: '120000', parent: null },
          { text: '河北省', value: '130000', parent: null },
          { text: '上海市', value: '310000', parent: null },
      
          { text: '北京市', value: '110100', parent: '110000' },
          { text: '天津市市', value: '120100', parent: '120000' },
          { text: '石家莊市', value: '130100', parent: '130000' },
          { text: '唐山市', value: '130200', parent: '130000' },
          { text: '秦皇島市', value: '130300', parent: '130000' },
          { text: '上海市', value: '310100', parent: '310000' },
      
          { text: '東城區', value: '110101', parent: '110100' },
          { text: '西城區', value: '110102', parent: '110100' },
          { text: '朝陽區', value: '110105', parent: '110100' },
          { text: '和平區', value: '120101', parent: '120100' },
          { text: '河東區', value: '120102', parent: '120100' },
          { text: '河西區', value: '120103', parent: '120100' },
          { text: '黃浦區', value: '310101', parent: '310100' },
          { text: '徐匯區', value: '310104', parent: '310100' },
          { text: '長寧區', value: '310105', parent: '310100' },
          { text: '長安區', value: '130102', parent: '130100' },
          { text: '橋西區', value: '130104', parent: '130100' },
          { text: '新華區', value: '130105', parent: '130100' },
          { text: '路南區', value: '130202', parent: '130200' },
          { text: '路北區', value: '130203', parent: '130200' },
          { text: '古冶區', value: '130204', parent: '130200' },
          { text: '海港區', value: '130302', parent: '130300' },
          { text: '山海關區', value: '130303', parent: '130300' },
          { text: '北戴河區', value: '130304', parent: '130300' },
        ]
      }

    },
    created() {
      // 初始化數據
      this.columns[0].options = this.request(null)
    },
    methods: {
      
      request(parentId) {
        return this.mockData.filter(i => i.parent === parentId)
      },
  
      /** 當選項被改變時，聯動其他組件 */
      handleValueChange(event) {
        const { type, row, column, value, target } = event
        console.log("event",event)
        if (type === JVXETypes.select) {
      
          // 第一列
          if (column.key === 's1') {
            // 設置第二列的 options
            console.log('this.request(value)::',this.request(value))
            target.$refs.vxe.columns[3].options = this.request(value)
            // 清空後兩列的數據
            target.setValues([{
              rowKey: row.id,
              values: { s2: '', s3: '' }
            }])
            target.$refs.vxe.columns[4].options = []
          } else
          // 第二列
          if (column.key === 's2') {
            target.$refs.vxe.columns[4].options = this.request(value)
            target.setValues([{
              rowKey: row.id,
              values: { s3: '' }
            }])
          }
        }
    
      }
    }
  }
</script>

<style scoped>

</style>