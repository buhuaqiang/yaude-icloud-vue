<template>
  <div>
    <a-form style="margin: 40px auto 0;">
      <result title="操作成功" :is-success="true" description="預計兩小時內到帳">
        <div class="information">
          <a-row>
            <a-col :sm="8" :xs="24">付款帳戶：</a-col>
            <a-col :sm="16" :xs="24">ant-design@alipay.com</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">收款帳戶：</a-col>
            <a-col :sm="16" :xs="24">test@example.com</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">收款人姓名：</a-col>
            <a-col :sm="16" :xs="24">輝夜</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">轉帳金額：</a-col>
            <a-col :sm="16" :xs="24"><span class="money">500</span> 元</a-col>
          </a-row>
        </div>
        <div slot="action">
          <a-button type="primary" @click="finish">再轉一筆</a-button>
          <a-button style="margin-left: 8px" @click="toOrderList">查看帳單</a-button>
        </div>
      </result>
    </a-form>
  </div>
</template>

<script>
  import Result from '../../../result/Result'

  export default {
    name: "Step3",
    components: {
      Result
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      finish () {
        this.$emit('finish')
      },
      toOrderList () {
        this.$router.push('/list/query-list')
      }
    }
  }
</script>
<style lang="less" scoped>
  .information {
    line-height: 22px;

    .ant-row:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .money {
    font-family: "Helvetica Neue",sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 14px;
  }
</style>