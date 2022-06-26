const routerJump = {
    methods: {
        goHome() {
            this.$router.push('/');
        },
        goSearch(query) {
            this.$router.push({
                path: '/search',
                query
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
        },

        goComment() {
            this.$router.push('/comment');
        },

        goRegister(){
            this.$router.push('/register');
        },

        goLogin(){
            this.$router.push('/login');
        }
    }
}

export { routerJump }