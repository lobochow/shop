const routerJump = {
    methods: {
        goHome() {
            this.$router.push('/');
        },
        goSearch(keyword) {
            this.$router.push({
                path: '/search',
                query: { keyword }
            })
        },
        goCart() {
            this.$router.push('/cart');
        },

        goPayBill() {
            this.$router.push('/payBill');
        },

        goBillRecord() {
            this.$router.push('/billRecord');
        }
    }
}

export { routerJump }