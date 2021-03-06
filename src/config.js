// 设置默认路由
const baseURL = process.env.NODE_ENV === 'development'
  ? 'https://easy-mock.com/mock/5cb6c6aeec4e9324bcb0c396/api/'
  : 'https://easy-mock.com/mock/5cb6c6aeec4e9324bcb0c396/api/';

export default {
  /* -----------------------------  基础配置  -------------------------------- */
  cdnUrl: '',
  baseURL: baseURL,
  timeout: 5000,

  /* ------------------------------------------------------------------------ */


  /* -------------------------------  弹框  --------------------------------- */

  errorMsg: '网络异常，请刷新页面',
  errorType: 'error',
  successMsg: '操作成功',
  successType: 'success',
  warningType: 'warning',

  /* ------------------------------------------------------------------------ */


  /* -------------------------------  路由  --------------------------------- */

  login: 'login',
  logout: 'logout',
  homeSwipe: 'homeSwipe',
  homeInfo: 'homeInfo',
  initGoods: 'initGoods',

  category: 'category',


  /* ------------------------------------------------------------------------ */


}
