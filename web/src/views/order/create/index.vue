<template>
  <tiny-form ref="ruleFormRef" :model="createData" :rules="rules" label-width="100px" class="w-[600px]! ml-auto mr-auto mt-[40px] mb-[40px]">
    <tiny-form-item label="商品名称" prop="name">
      <tiny-input v-model="createData.name"></tiny-input>
    </tiny-form-item>
    <tiny-form-item label="商品描述" prop="desc">
      <tiny-input v-model="createData.desc"></tiny-input>
    </tiny-form-item>
    <tiny-form-item label="金额" prop="cost">
      <tiny-numeric v-model="createData.cost"></tiny-numeric>
    </tiny-form-item>
    <tiny-form-item label="商家名称" prop="shopName">
      <tiny-input v-model="createData.shopName"></tiny-input>
    </tiny-form-item>
    <tiny-form-item label="商品图片" prop="orderImage">
      <tiny-file-upload action="http://xxx">
        <template #trigger>
          <tiny-button>点击上传</tiny-button>
        </template>
      </tiny-file-upload>
    </tiny-form-item>
    <tiny-form-item>
      <tiny-button type="primary" @click="handleSubmit()">
        提交
      </tiny-button>
      <tiny-button @click="resetForm">重置表单</tiny-button>
    </tiny-form-item>
  </tiny-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  TinyForm,
  TinyFormItem,
  TinyInput,
  TinyButton,
  TinyModal,
  TinyNumeric,
  TinyFileUpload
} from '@opentiny/vue'
import { createOrder } from '@/api/order'

const ruleFormRef = ref()

const createData = reactive({
  name: '',
  desc: '',
  orderImage: 'http://dummyimage.com/400x400',
  cost: 0,
  shopName: '',
})

const handleSubmit = async () => {
  await createOrder(createData)
}

function resetForm() {
  ruleFormRef.value.resetFields()
}
</script>
