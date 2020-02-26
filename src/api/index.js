import ajax from './ajax'

//获取主页推荐的数据
// export const getIndexData = ()=> ajax({
//     method:'GET',
//     url:'/getIndex'
// })


//分类界面左侧
export const getSortNavList = ()=>ajax({
    url:"/api/getSortNavList"
})

//分类界面右侧
export const getSortList = ()=>ajax({
    url:"/api/getSortList"
})


// 网易接口

