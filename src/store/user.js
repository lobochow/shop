import { getUserInfo, postLogin, postAddAndUpdateCart, getCartInfo, postPayBill, getPayBill } from '@/api/index'
//数据
const state = {
    username: '',
    user_id: '',
    cartList: [],
    billInfo: []
};

//业务逻辑
const actions = {
    async acLogin(context, params) {
        let { account, password } = params;
        let result = await postLogin({
            account,
            password
        });
        if (result.code == 200) {
            context.commit('muLogin', result.token);
            return 200;
        } else {
            console.log(result.msg);
        }
    },
    async acReqUserInfo(context) {
        let reqResult = await getUserInfo();
        if (reqResult.code === 200) {
            context.commit('muReqUserInfo', reqResult.data);
        }
    },
    async acAddCart(context, params) {
        let result = await postAddAndUpdateCart(params);
        if (result.code == 200) {
            context.dispatch('acReqCartInfo');
            return 200;
        } else {
            console.log(result.msg);
        }
    },
    async acReqCartInfo(context) {
        let result = await getCartInfo();
        if (result.code == 200) {
            context.commit('muReqCartInfo', result.data);
            return 200;
        } else {
            console.log(result.msg);
        }
    },
    async acUpdateCart(context, updateData) {
        let result = await postAddAndUpdateCart(updateData);
        if (result.code == 200) {
            context.dispatch('acReqCartInfo');
            return 200;
        } else {
            console.log(result.msg);
        }
    },
    async acUpdateBill(context, reqData) {
        let result = await postPayBill(reqData);
        if (result.code == 200) {
            return 200;
        } else {
            console.log(result.msg);
        }
    },
    async acReqBillInfo(context, paginationOption) {
        let result = await getPayBill(paginationOption);
        if (result.code == 200) {
            context.commit('muReqBillInfo', result.data);
            return 200;
        } else {
            console.log(result.msg);
        }
    },
};

//操作数据
const mutations = {
    muReqUserInfo(state, data) {
        state.username = data.account;
        state.user_id = data._id;
    },
    muLogin(state, token) {
        localStorage.setItem('lobo-shop-token', token);
    },
    muLogout(state) {
        state.username = '';
        state.user_id = '';
        state.cartInfo = {};
        localStorage.removeItem('lobo-shop-token');
    },
    muReqCartInfo(state, data) {
        state.cartList = data;
    },
    muReqBillInfo(state, data) {
        state.billInfo = data;
    }
};

//类似于计算属性
const getters = {};

//创建及暴露store
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}