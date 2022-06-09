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

    xhr.open(options.method, options.url, true);
    xhr.setRequestHeader('Content-Type', options['Content-Type'] ?? 'application/json')
    xhr.send(JSON.stringify(options.body));

    return result;
}

export const getCategoryList = () => request({
    method: 'get',
    url: '/v1/categorys'
});

export const getCartInfo = () => request({
    method: 'get',
    url: '/mock/1027634/v1/getCart'
});

export const getHomeSwiperImg = () => request({
    method: 'get',
    url: '/v1/homeSwiper'
});

export const getSpuList = () => request({
    method: 'get',
    url: '/mock/1027634/v1/getSpu'
});

export const reqSkuInfo = () => request({
    method: 'get',
    url: '/mock/1027634/v1/getSkuInfo'
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

