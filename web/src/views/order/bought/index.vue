<template>
  <div style="margin: 12px 0; display: flex;">
    <tiny-search v-model="keyword" placeholder="商品标题/订单号/店铺名" style="width: 222px; margin-right: 8px;"></tiny-search>
    <tiny-button>筛选<tiny-icon-chevron-down></tiny-icon-chevron-down></tiny-button>
    <tiny-button :icon="TinyIconDownload">导出订单</tiny-button>
  </div>
  <div style="height: calc(100vh - 280px); overflow: auto;">
    <tiny-grid :data="tableData">
      <tiny-grid-column field="orderInfo" title="订单信息">
        <template #default="{ row }">
          <div>
            <p>{{ row.orderInfo }}</p>
            <p>订单号：{{ row.id }}</p>
          </div>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="goodsAmount" title="商品金额">
        <template #default="{ row }">
          <span>￥{{ row.goodsAmount }}</span>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="disbursements" title="实付款">
        <template #default="{ row }">
          <span style="color: #f00;">￥{{ row.disbursements }}</span>
        </template>
      </tiny-grid-column>
      <tiny-grid-column
        field="operation"
        title="操作列"
        width="120px"
      >
        <template #default>
          <div style="display: flex; flex-direction: column;">
            <tiny-button type="primary">再买一单</tiny-button>
            <tiny-button type="text">加入购物车</tiny-button>
            <tiny-button type="text">申请开票</tiny-button>
            <tiny-button type="text">删除订单</tiny-button>
          </div>
        </template>
      </tiny-grid-column>
    </tiny-grid>
  </div>
  <tiny-pager
    :current-page="pagerConfig.currentPage"
    :page-size="pagerConfig.pageSize"
    :total="pagerConfig.total"
    :page-sizes="[5, 10, 20, 50]"
    @current-change="currentChange"
    @size-change="sizeChange"
    layout="total, sizes, prev, pager, next, jumper"
  ></tiny-pager>
</template>

<script setup>
import { TinyGrid, TinyGridColumn, TinySearch, TinyButton, TinyPager } from '@opentiny/vue'
import { iconDownload, iconChevronDown } from '@opentiny/vue-icon'
import { reactive, ref } from 'vue'

const TinyIconDownload = iconDownload()
const TinyIconChevronDown = iconChevronDown()

const keyword = ref('')

const pagerConfig = ref({
  currentPage: 1,
  pageSize: 5,
  total: 0
})

function currentChange(current) {
  pagerConfig.value.currentPage = current
  // fetchData()
}

function sizeChange(size) {
  pagerConfig.value.pageSize = size
  // fetchData()
}

const tableData = reactive([
  {
    id: '1',
    orderInfo: 'Apple/苹果 Mac mini 电脑主机',
    goodsAmount: 800,
    disbursements: 800,
  },
  {
    id: '2',
    orderInfo: '【国家补贴】华为MateBook D16 2024笔记本',
    goodsAmount: 300,
    disbursements: 300,
  },
  {
    id: '3',
    orderInfo: '便签台历2025年新款日历记事本创意简约商务',
    goodsAmount: 1300,
    disbursements: 1300,
  },
  {
    id: '4',
    orderInfo: '室靠垫座椅工位久坐神器腰托靠枕靠背垫腰部支撑腰垫护腰',
    goodsAmount: 360,
    disbursements: 360,
  },
  {
    id: '5',
    orderInfo: '美的电吹风机家用大风力负离子护发快干大功率风筒折叠宿舍用学生',
    goodsAmount: 810,
    disbursements: 810,
  },
  {
    id: '6',
    orderInfo: '小米烧水壶家用大容量电热水壶米家保温热水壶不锈钢泡茶开水壶',
    goodsAmount: 800,
    disbursements: 800,
  },
  {
    id: '7',
    orderInfo: '比比赞素大刀肉辣条8090后儿时怀旧解馋小零食休闲',
    goodsAmount: 400,
    disbursements: 400,
  },
  {
    id: '8',
    orderInfo: '梅干菜饼锅盔梅菜扣肉饼黄山烧饼安徽特产早餐零食',
    goodsAmount: 540,
    disbursements: 540
  }
])
</script>
