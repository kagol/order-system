<template>
  <div class="flex mt-[12px] mb-[12px]">
    <tiny-search v-model="keyword" placeholder="商品标题/订单号/店铺名" class="!w-[222px] !mr-[8px]"></tiny-search>
    <tiny-button>筛选<tiny-icon-chevron-down></tiny-icon-chevron-down></tiny-button>
    <tiny-button :icon="TinyIconDownload">导出订单</tiny-button>
  </div>
  <div class="overflow-auto h-[calc(100vh-280px)]">
    <tiny-grid :fetch-data="fetchData" :highlight-hover-row="false">
      <tiny-grid-column field="orderInfo" title="订单信息">
        <template #default="{ row }">
          <div class="flex items-center mt-[16px] mb-[16px]">
            <span>{{ row.date }}</span>
            <tiny-divider direction="vertical"></tiny-divider>
            <span>订单号: {{ row.id }}</span>
            <tiny-divider direction="vertical"></tiny-divider>
            <img :src="row.shopImage" :alt="row.shopName" class="w-[26px]! h-[12px]! mr-[4px]">
            <tiny-link href="https://opentiny.design/tiny-vue" :underline="false" class="mr-[4px]">{{ row.shopName }}</tiny-link>
            <a href="https://opentiny.design/tiny-vue" target="_blank" class="order-wangwang no-underline w-[20px] h-[20px] inline-block align-text-bottom mr-[4px]"></a>
            <tiny-link href="https://opentiny.design/tiny-vue" :underline="false">订单详情<tiny-icon-angle-right></tiny-icon-angle-right></tiny-link>
          </div>
          <div class="flex flex-row">
            <img :src="row.image" :alt="row.orderInfo" class="rounded-[8px] w-[96px] h-[96px] mr-[12px]">
            <div>
              <h3 class="mb-[4px] leading-[22px]">{{ row.orderInfo }}</h3>
              <p class="text-[#7a7a7a] mb-[4px] leading-[22px]">{{ row.description }}</p>
              <div>
                <tiny-button>退换</tiny-button>
                <tiny-button>加入购物车</tiny-button>
              </div>
            </div>
          </div>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="goodsAmount" title="商品金额" width="160px">
        <template #default="{ row }">
          <tiny-statistic prefix="￥" :value="row.goodsAmount"></tiny-statistic>
          x{{ row.goodsQuantity }}
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="disbursements" title="实付款" width="160px">
        <template #default="{ row }">
          <div class="flex">
            <span class="inline-flex items-center w-[80px]">实付款</span><tiny-statistic prefix="￥" :value="row.disbursements"></tiny-statistic>
          </div>
          <tiny-tag>手机订单</tiny-tag>
        </template>
      </tiny-grid-column>
      <tiny-grid-column
        field="operation"
        title="操作列"
        width="120px"
      >
        <template #default>
          <div class="flex flex-col">
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
    :page-sizes="[10, 20, 50, 100]"
    @current-change="currentChange"
    @size-change="sizeChange"
    layout="total, sizes, prev, pager, next, jumper"
  ></tiny-pager>
</template>

<script setup>
import { TinyGrid, TinyGridColumn, TinySearch, TinyButton, TinyPager, TinyStatistic, TinyTag, TinyLink, TinyDivider } from '@opentiny/vue'
import { iconDownload, iconChevronDown, iconAngleRight } from '@opentiny/vue-icon'
import { reactive, ref } from 'vue'
import { getOrderList } from '@/api/order'
import { orderList } from './order-list'

const TinyIconDownload = iconDownload()
const TinyIconChevronDown = iconChevronDown()
const TinyIconAngleRight = iconAngleRight()

const keyword = ref('')

const pagerConfig = ref({
  currentPage: 1,
  pageSize: 10,
  total: 100
})

function currentChange(current) {
  pagerConfig.value.currentPage = current
  // fetchData()
}

function sizeChange(size) {
  pagerConfig.value.pageSize = size
  // fetchData()
}

// let tableData = reactive(orderList)

const getData = async () => {
  let { data } = await getOrderList({
    page: 1,
    size: 10
  });
  return data.items
}

const fetchData = ref({
  api: getData
})
</script>

<style lang="less">
.order-wangwang {
  background-image: -webkit-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x) !important;
  background-position: -80px 0;
}
</style>
