//修改当前登录人的个人数据
export const setUserData = (context,data) => {
    context.commit('setUserData',data)
}

//修改当前视口宽高
export const setViewPort = (context,data) => {
    context.commit('setViewPort',data)
}
