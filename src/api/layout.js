import request from 'public-component-ui/utils/require.js'



export const getMenuList = (data) =>
    request({
        url:'/getRouters',
        method:'get',
        params:data

    })