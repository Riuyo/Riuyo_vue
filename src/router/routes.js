import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import SortRight from '../pages/Sort/SortRight.vue'
import Worth from '../pages/Worth/Worth.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'


export default [

  {
    path: '/home',
    component: Home 
  },
  {
    path: '/sort',
    component: Sort,
    children:[
      {
        path:'/sort/right/:id',
        component:SortRight
      },
      // {
      //   path: '/cate',
      //   redirect: '/cate/right'
      // }


    ]
  },
  {
    path: '/worth',
    component: Worth
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/sort'
  }
]