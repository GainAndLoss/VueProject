import Vue from 'vue'
import Router from 'vue-router'
import Test from '../page/testdemo'
import leftNr from '../page/1-1'
import menus from '../config/menu-config'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'test',
//       component: Test,
//       children:[{
//         path:'/leftnr',
//         component:leftNr,
//         name:"左侧内容",
//         hidden: true
//       }]
//     }
//   ]
// })

var routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/page/${sub.componentName}`)
    })
  })
})

export default new Router({ routes })
