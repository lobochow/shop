function request(options){
    let xhr = new XMLHttpRequest();
    let result;

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            } else {
                throw new Error(xhr.status + ':' + xhr.statusText);
            }
        }
    }

    xhr.open(options.method, options.url, false);
    xhr.send(options.body);

    return result;
}

export const getCategoryList = () => request({
    method: 'get',
    url: '/v1/category_1'
});

export const getCartInfo = () => request({
    method: 'get',
    url: '/v1/getCart'
});

export const getHomeSwiperImg = () => request({
    method: 'get',
    url: '/v1/homeSwiper'
});

export const getSpuList = () => request({
    method: 'get',
    url: '/v1/getSpu'
});

export const reqSkuInfo = () => request({
    method: 'get',
    url: '/v1/getSkuInfo'
})