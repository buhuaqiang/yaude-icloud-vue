<template>
  <a-spin :spinning="confirmLoading">
    <j-form-container :disabled="formDisabled">
      <a-form-model ref="form" :model="model" :rules="validatorRules" slot="detail">
        <a-row>
          <a-col :span="24">
            <a-form-model-item label="實例名稱" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="instanceName">
              <a-input v-model="model.instanceName" placeholder="請輸入實例名稱"  ></a-input>
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="描述" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="represent">
              <a-input v-model="model.represent" placeholder="請輸入描述"  ></a-input>
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="映像檔" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="imgId">
<!--              <j-dict-select-tag type="list" v-model="model.imgId" dictCode="" placeholder="請選擇映像檔id" />-->
              <a-select v-model="model.imgId"  placeholder="請選擇映像檔">
                <a-select-option v-for="imgs in imgIds":value="imgs.value">{{imgs.text}}</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="刪除實例時是否刪除卷" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="isDelete">
              <j-dict-select-tag type="radio" v-model="model.isDelete"  placeholder="請選擇刪除實例時是否刪除卷" />
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="虛擬硬體樣板" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="flavorId">
<!--              <j-dict-select-tag type="list" v-model="model.flavorId" dictCode="" placeholder="請選擇虛擬硬體樣板id" />-->
              <a-select v-model="model.flavorId"  placeholder="請選擇虛擬硬體樣板">
                <a-select-option v-for="flavors in flavorIds":value="flavors.value">{{flavors.text}}</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="運行狀態" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="runStatus">
              <a-input v-model="model.runStatus" placeholder="請輸入運行狀態"  ></a-input>
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="安全群組" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="securityName">
              <j-dict-select-tag type="list" v-model="model.securityName"  placeholder="請選擇安全群組" />
            </a-form-model-item>
          </a-col>
          <a-col :span="24">
            <a-form-model-item label="網路" :labelCol="labelCol" :wrapperCol="wrapperCol" prop="networkId">
              <j-dict-select-tag type="list" v-model="model.networkId"  placeholder="請選擇網路" />
            </a-form-model-item>
              <new-j-select-multi-user v-model="formData.multiUser" :query-config="selectUserQueryConfig"/>
          </a-col>
        </a-row>
      </a-form-model>
    </j-form-container>
  </a-spin>
</template>

<script>

  import { httpAction, getAction } from '@/api/manage'
  import { validateDuplicateValue } from '@/utils/util'
  import NewJSelectMultiUser from '@/components/jeecgbiz/NewJSelectMultiUser'

  export default {
    name: 'OsInstanceForm',
    components: {
      NewJSelectMultiUser
    },
    props: {
      //表單禁用
      disabled: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data () {
      return {
        model:{
         },
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        confirmLoading: false,
        validatorRules: {
           instanceName: [
              { required: true, message: '請輸入實例名稱!'},
           ],
           imgId: [
              { required: true, message: '請輸入映像檔id!'},
           ],
           flavorId: [
              { required: true, message: '請輸入虛擬硬體樣板id!'},
           ],
        },
        imgIds:[],
        flavorIds:[],
        url: {
          add: "/openstack/osInstance/add",
          edit: "/openstack/osInstance/edit",
          queryById: "/openstack/osInstance/queryById",
          getImg: "/os/osApply/getImg",
          getFlavor: "/os/osApply/getFlavor",
        },
        formData: {
          areaLinkage1: '110105',
          areaLinkage2: '140221',
          sex: 1,
          orgCodes: 'A02A01,A02A02',
          departId: '57197590443c44f083d42ae24ef26a2c,a7d7e77e06c84325a40932163adcdaa6',
          userIds: 'admin',
          multiUser: 'admin,jeecg',
          jCheckbox: 'spring,jeecgboot',
          jCodeEditor: `function sayHi(word) {\n  alert(word)\n}\nsayHi('hello, world!')`,
          jDate: '2019-5-10 15:33:06',
          jEditor: '<h2 style="text-align: center;">富文本編輯器</h2> <p>這裡是富文本編輯器。</p>',
          jEllipsis: '這是一串很長很長的文字段落。這是一串很長很長的文字段落。這是一串很長很長的文字段落。這是一串很長很長的文字段落。',
          jSlider: false,
          jSelectMultiple: 'Integer,Boolean',
          imgList:[],
          fileList:[],
          content: '',
          cronExpression: '* * * * * ? *',
        },
        // 選擇用戶查詢條件配置
        selectUserQueryConfig: [
          {key: 'phone', label: '電話'},
        ],
      }
    },
    computed: {
      formDisabled(){
        return this.disabled
      },
    },
    created () {
       //備份model原始值
      this.modelDefault = JSON.parse(JSON.stringify(this.model));
      this.getImgs(this.modelDefault);
      this.getFlavorIds(this.modelDefault);
    },
    methods: {
      getImgs(record){
        this.model = Object.assign({}, record);
        let method = "post";
        let httpurl = this.url.getImg;
        httpAction(httpurl,this.model,method).then((res)=>{
          if(res.success){
            debugger
            const result = res.result
            result.forEach((r)=>{
              this.imgIds.push({
                value:r.imgId,
                text:r.imgName
              })
            })
          }
        })
      },
      getFlavorIds(record){
        this.model = Object.assign({}, record);
        let method = "post";
        let httpurl = this.url.getFlavor;
        httpAction(httpurl,this.model,method).then((res)=>{
          if(res.success){
            debugger
            const result = res.result
            result.forEach((r)=>{
              this.flavorIds.push({
                value:r.flavorId,
                text:r.flavorName
              })
            })
          }
        })
      },
      add () {
        this.edit(this.modelDefault);
      },
      edit (record) {
        this.model = Object.assign({}, record);
        this.visible = true;
      },
      submitForm () {
        const that = this;
        // 觸發表單驗證
        this.$refs.form.validate(valid => {
          if (valid) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if(!this.model.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
               method = 'put';
            }
            httpAction(httpurl,this.model,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
            })
          }

        })
      },
    }
  }
</script>