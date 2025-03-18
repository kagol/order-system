import axios from 'axios';

// 获取所有订单
export function getOrderList(params) {
  return axios.get(`/api/order`, { params });
}

// 删除订单
export function deleteOrder(params) {
  return axios.delete(`/api/order`, { params })
}

// 创建订单
export function createOrder(params) {
  return axios.post(`/api/order`, params)
}

export function uploadOrderImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post('/api/order/upload', formData)
}