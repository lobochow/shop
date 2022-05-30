export function debounce(callback, delay = 150) {
    let timer = -1;
    return function(...rest) {
        if (timer == -1) {
            timer = setTimeout(() => {
                callback.apply(this, rest);
                timer = -1;
            }, delay);
        } else {
            clearTimeout(timer);
            timer = -1;
        }
    };
}