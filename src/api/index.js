import ajax from './ajax'

//获取主页推荐的数据
export const getIndexData = ()=> ajax({
    method:'GET',
    url:'/getIndex'
})