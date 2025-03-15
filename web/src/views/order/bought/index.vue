<template>
  <div class="flex mt-[12px] mb-[12px]">
    <tiny-search v-model="keyword" placeholder="商品标题/订单号/店铺名" class="!w-[222px] !mr-[8px]"></tiny-search>
    <tiny-button>筛选<tiny-icon-chevron-down></tiny-icon-chevron-down></tiny-button>
    <tiny-button :icon="TinyIconDownload">导出订单</tiny-button>
  </div>
  <div class="overflow-auto h-[calc(100vh-280px)]">
    <tiny-grid :data="tableData" :highlight-hover-row="false">
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
          <tiny-statistic prefix="￥">{{ row.goodsAmount }}</tiny-statistic>
          x{{ row.goodsQuantity }}
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="disbursements" title="实付款" width="160px">
        <template #default="{ row }">
          <div class="flex">
            <span class="inline-flex items-center w-[80px]">实付款</span><tiny-statistic prefix="￥">{{ row.disbursements }}</tiny-statistic>
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

const tableData = reactive([
  {
    id: crypto.randomUUID(),
    orderInfo: 'Apple/苹果 Mac mini 电脑主机',
    image: 'https://img.alicdn.com/bao/uploaded/i4/2200671859633/O1CN01uWpol92L1yJiqvGIg_!!4611686018427384753-0-item_pic.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 800,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 800,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '【国家补贴】华为MateBook D16 2024笔记本',
    image: 'https://img.alicdn.com/bao/uploaded/i3/2212851181725/O1CN01IfJFwl1Oc66EC00rV_!!0-item_pic.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 300,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 300,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '便签台历2025年新款日历记事本创意简约商务',
    image: 'https://img.alicdn.com/bao/uploaded/i2/4560622923/O1CN01tQ06cG1XSmfL433Ep_!!0-saturn_solar.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 1300,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 1300,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '室靠垫座椅工位久坐神器腰托靠枕靠背垫腰部支撑腰垫护腰',
    image: 'https://img.alicdn.com/bao/uploaded/i2/2214917952491/O1CN01HNjXQk1UGvZim8EvE_!!0-item_pic.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 360,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 360,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '美的电吹风机家用大风力负离子护发快干大功率风筒折叠宿舍用学生',
    image: 'https://img.alicdn.com/imgextra/i2/2217293179005/O1CN01pwssID2GOLbcSmDjW_!!2217293179005-0-alimamacc.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 810,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 810,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '小米烧水壶家用大容量电热水壶米家保温热水壶不锈钢泡茶开水壶',
    image: 'https://img.alicdn.com/bao/uploaded/i1/2217728271973/O1CN01RWUAec1QRgNse8RCb_!!2-item_pic.png',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 800,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 800,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '比比赞素大刀肉辣条8090后儿时怀旧解馋小零食休闲',
    image: 'https://img.alicdn.com/bao/uploaded/i3/704238090/O1CN01J1mGew29dH4gNqwKq_!!0-item_pic.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 400,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 400,
  },
  {
    id: crypto.randomUUID(),
    orderInfo: '梅干菜饼锅盔梅菜扣肉饼黄山烧饼安徽特产早餐零食',
    image: 'https://img.alicdn.com/imgextra/i4/2200779546537/O1CN01tS9Jdk1y9zpdxHjuF_!!2200779546537.jpg_200x200.jpg',
    description: 'Apple/苹果 Mac mini 电脑主机 M1芯片 8核CPU 8核GPU 16核神经网络引擎 8GB内存 256GB固态硬盘',
    goodsAmount: 540,
    goodsQuantity: 1,
    shopName: 'Apple官方旗舰店',
    date: '2021-09-01',
    shopImage: 'https://gw.alicdn.com/imgextra/i3/O1CN018zfJt01Yxl2qy08VF_!!6000000003126-2-tps-77-36.png',
    disbursements: 540
  }
])
</script>

<style lang="less">
.order-wangwang {
  background-image: -webkit-image-set(url("//img.alicdn.com/tps/i1/T15AD7FFFaXXbJnvQ_-130-60.gif") 1x,url("//img.alicdn.com/tps/i4/T1Rsz7FPJaXXbZhKn7-520-240.gif") 4x) !important;
  background-position: -80px 0;
}
</style>
