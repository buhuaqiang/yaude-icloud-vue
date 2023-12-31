<template>
  <a-row class="j-select-biz-component-box" type="flex" :gutter="8">
    <a-col class="left" :class="{'full': !buttons}">
      <slot name="left">
        <a-select
          mode="multiple"
          :placeholder="placeholder"
          v-model="selectValue"
          :options="selectOptions"
          allowClear
          :disabled="disabled"
          :open="selectOpen"
          v-show="false"
          style="width: 0px;"
          @dropdownVisibleChange="handleDropdownVisibleChange"
          @click.native="visible=(buttons || disabled ?visible:true)"
        />
      </slot>
    </a-col>

    <a-col v-if="buttons" class="right">
      <a type="primary" icon="search" :disabled="disabled" @click="showModal">{{selectButtonText}}</a>
    </a-col>

    <j-select-biz-component-modal
      ref="bizModal"
      v-model="selectValue"
      :visible.sync="visible"
      v-bind="modalProps"
      :project-data="projectData"
      @options="handleOptions"
      @ok="handleOk"
    />
  </a-row>
</template>

<script>
  import JSelectBizComponentModal from './JSelectBizComponentModal'

  export default {
    name: 'JSelectBizComponent',
    components: { JSelectBizComponentModal },
    props: {
      value: {
        type: String,
        default: ''
      },
      /** 是否返回 id，默認 false，返回 code */
      returnId: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '請選擇'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否支持多選，默認 true
      multiple: {
        type: Boolean,
        default: true
      },
      // 是否顯示按鈕，默認 true
      buttons: {
        type: Boolean,
        default: true
      },
      // 顯示的 Key
      displayKey: {
        type: String,
        default: null
      },
      // 返回的 key
      returnKeys: {
        type: Array,
        default: () => ['id', 'id']
      },
      // 選擇按鈕文字
      selectButtonText: {
        type: String,
        default: '選擇'
      },
      projectData:{
        type: Object,
        default: ()=>{},
        required: false
      }

    },
    data() {
      return {
        selectValue: [],
        selectOptions: [],
        dataSourceMap: {},
        visible: false,
        selectOpen: false,
      }
    },
    computed: {
      valueKey() {
        return this.returnId ? this.returnKeys[0] : this.returnKeys[1]
      },
      modalProps() {
        return Object.assign({
          valueKey: this.valueKey,
          multiple: this.multiple,
          returnKeys: this.returnKeys,
          displayKey: this.displayKey || this.valueKey
        }, this.$attrs)
      },
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          if (val) {
            this.selectValue = val.split(',')
          } else {
            this.selectValue = []
          }
        }
      },
      selectValue: {
        deep: true,
        handler(val) {
          let rows = val.map(key => this.dataSourceMap[key])
          let data = val.join(',')
          if (data !== this.value) {
            this.$emit('select', rows)
            this.$emit('input', data)
            this.$emit('change', data)
          }
        }
      }
    },
    methods: {
      handleOptions(options, dataSourceMap) {
        this.selectOptions = options
        this.dataSourceMap = dataSourceMap
      },
      handleDropdownVisibleChange() {
        // 解決antdv自己的bug —— open 設置為 false 了，點擊后還是添加了 open 樣式，導致點擊事件失效
        this.selectOpen = true
        this.$nextTick(() => {
          this.selectOpen = false
        })
      },
      handleOk(){
        this.$emit('ok');
      },
      showModal(){
        this.visible=true
        this.$refs.bizModal.test()
      }
    }
  }
</script>

<style lang="less" scoped>
  .j-select-biz-component-box {

    @width: 82px;

    .left {
      width: calc(100% - @width - 8px);
    }

    .right {
      width: @width;
    }

    .full {
      width: 100%;
    }

    /deep/ .ant-select-search__field {
      display: none !important;
    }
  }
</style>