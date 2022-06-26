export function request(options){
    let xhr = new XMLHttpRequest();
    let result = new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let contentType = xhr.getResponseHeader('Content-Type');
                    if(contentType.indexOf('svg') == -1){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        resolve(xhr.responseText);
                    }
                } else {
                    reject(new Error(xhr.status + ':' + xhr.statusText));
                }
            }
        }
    })

    if(options.query){
        let urlAppend = '?';
        for(let key in options.query){
            urlAppend += `${key}=${options.query[key]}&`;
        }
        options.url += urlAppend;
    }

    xhr.open(options.method, options.url, true);
    xhr.setRequestHeader('Content-Type', options['Content-Type'] ?? 'application/json');
    let token = localStorage.getItem('lobo-shop-token');
    if(token){
        xhr.setRequestHeader('token', token);
    }
    xhr.send(JSON.stringify(options.body));

    return result;
}

export const getCategoryList = () => request({
    method: 'get',
    url: '/v1/categorys'
});

export const getCartInfo = () => request({
    method: 'get',
    url: '/v1/cart'
});

export const getHomeSwiperImg = () => request({
    method: 'get',
    url: '/v1/homeSwiper'
});

export const reqSpuInfo = (query) => request({
    method: 'get',
    url: '/v1/spu',
    query
})

export const reqSkuInfo = (query) => request({
    method: 'get',
    url: '/v1/sku',
    query
})

export const reqCartInfo = () => request({
    method: 'get',
    url: '/mock/1027634/v1/getCartInfo'
})

export const reqPayBillInfo = () => request({
    method: 'get',
    url: '/mock/1027634/v1/getPayBillInfo'
})

export const reqBillRecord = () => request({
    method: 'get',
    url: '/mock/1027634/v1/getBillRecordInfo'
})

export const getRegisterVerifyCode = () => request({
    method: 'get',
    url: '/v1/register-verify'
})

export const postRegisterVerifyCode = (body) => request({
    method: 'post',
    url: '/v1/register-verify',
    body
})

export const postRegister = (body) => request({
    method: 'post',
    url: '/v1/register',
    body
})

export const postLogin = (body) => request({
    method: 'post',
    url: '/v1/login',
    body
})

export const getUserInfo = () => request({
    method: 'get',
    url: '/v1/userInfo',
})

export const getSearchInfo = (query) => request({
    method: 'get',
    url: '/v1/search',
    query
})