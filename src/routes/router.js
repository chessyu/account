
export default[
    {
        path:'/',
        redirect:'/layout'
    },
    {
        path:'/layout',
        name:'layout',
        component: () => import(/* webpackChunkName: "index" */ '@/view/layout/index.vue')
    },
]