import axios from 'axios';

// 获取所有订单
export function getOrderList(params) {
  return axios.get(`/api/order`, { params });
}

// 删除订单
export function deleteOrder(params) {
  return axios.delete(`/api/order`, { params })
}
